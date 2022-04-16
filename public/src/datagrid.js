let vlink;

let columnsP = [];
let dataV;
let fieldSchema = {};
const createTable = async function (data) {
  const createSearchAndCols = function (data) {
    let obC = {};
    let keys = Object.keys(data[1]);
    console.log(keys);
    keys.forEach((e) => {
      console.log(e.toLocaleUpperCase().includes("DATE") ? e : "not date");
      obC = {
        field: e.toLocaleUpperCase(),
        //format: e.toLocaleUpperCase().includes("DATE") ? "{0:DD/MM/YYYY}" : "",
        title: e.toLocaleUpperCase(),
        width: `150px`,
        filterable: {
          /*cell: {
            showOperators: false,
          },*/ mode: "row",
          //"datepicker",
          /*ui: function (element) {
            element.kendoDatePicker({
              format: "DD/MM/YYYY",
              //culture: "ar-SY",
              //parseFormats: ["MMMM yyyy", "dd/MM/YYYY"],
              dateInput: true,
              //parseFormats: ["MMMM yyyy"], //format also will be added to parseFormats
              change: function () {
                console.log(this.value());
                console.log(kendo.toString(new Date(this.value()), "d"));
                //kendo.toString(new Date(this.value()), "d");
              },
            });

            console.log(`element`);
            console.log(element);

            var datetimepicker = $(element).data("kendoDatePicker");
            console.log(datetimepicker.options);
          },*/

          search: true,

          //extra: false,
          messages: {
            and: "and",
            or: "or",
            filter: "Apply filter",
            clear: "Clear filter",
          },
        },
      };

      fieldSchema[`${e}`] = {
        type: e.toLocaleUpperCase().includes("DATE") ? `number` : `string`,
        operators: {
          number: {
            gte: "Greater or equal to",
            lte: "Less or equal to",
          },
        },
      };
      //});

      columnsP.push(obC);
    });
  };

  createSearchAndCols(dataV);
};

let query = document.querySelector("aside").querySelectorAll("a");

query.forEach((e) => {
  let vArctile = document.querySelector("article");

  e.addEventListener("click", () => {
    console.log(e.textContent);
    let vlink = `http://localhost:3001/dbData?inquery=${e.textContent}`;
    console.log(vlink);
    dataV = "";
    const element = document.getElementById("grid");
    console.log(`fieldSchema`);
    console.log(fieldSchema);
    columnsP.length = 0;

    //element.replaceChildren();
    element.remove();

    vArctile.insertAdjacentHTML("afterbegin", `<div id="grid"></div>`);

    /*});
});*/

    const pRequest = fetch(vlink, {
      method: "get", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
    })
      .then((resp) => resp.json()) // return prmoise again
      .then((data) => {
        console.log(`data`);
        //console.log(dataV);
        dataV = data;
        //console.log(data);
        createTable(data);
        //return data;

        console.log(`dataV`);
        //console.log(dataV);

        $(document).ready(function () {
          /* datePicker */

          /* $("#datepicker").kendoDatePicker({
            dateInput: true,
          });

          var datetimepicker = $("#datepicker").data("kendoDatePicker");
          datetimepicker._dateInput.setOptions({
            messages: {
              year: "yyyy",
              month: "mm",
              day: "dd",
            },
          });

          /* end datePicker*/

          $("#grid").kendoGrid({
            dataSource: {
              data: dataV,
              pageSize: 100,
            },

            /* try schema */
            schema: {
              model: {
                fields: fieldSchema,
              },
            },

            /* end try schema */
            //  rowTemplate: kendo.template($("#template").html()),
            height: 1170,
            width: 2400,

            groupable: true,
            sortable: true,
            reorderable: true,
            resizable: true,
            columnMenu: true,

            //selectable: "multiple cell",
            //allowCopy: true,
            toolbar: ["excel"],
            excel: {
              fileName: "Kendo UI Grid Export.xlsx",
              proxyURL: "https://demos.telerik.com/kendo-ui/service/export",
              filterable: true,
            },
            filterable: {
              mode: "menu",
              //ui: "datePicker",
            },
            pageable: {
              refresh: false,
              pageSizes: true,
              buttonCount: 5,
            },
            columns: columnsP,
          });
        });

        // Change the name of the first dataItem.

        // Call refresh in order to see the change.
        /*var grid = $("#grid").data("kendoGrid");
        console.log(`grid`);
        console.log(grid);*/
        //grid.setDataSource({ data: dataV, pageSize: 100 });

        //grid.refresh();
      })
      .catch((err) => console.log(err));
  });
});

function formatDate(pdate, pformat = "dd/mm/yyyy") {
  let vdd = String(pdate.getDate());
  let vmm = String(pdate.getMonth());
  let vyyyy = pdate.getFullYear();
  let vformat = pformat;
  vdd = vdd.padStart(2, "0");
  vmm = vmm.padStart(2, "0");
  vformat = vformat
    .replace("dd", vdd)
    .replace("mm", vmm)
    .replace("yyyy", vyyyy);
  return vformat;
}

function dateFormat(inputDate, format) {
  //parse the input date
  const date = new Date(inputDate);

  //extract the parts of the date
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  //replace the month
  format = format.replace("MM", month.toString().padStart(2, "0"));

  //replace the year
  if (format.indexOf("yyyy") > -1) {
    format = format.replace("yyyy", year.toString());
  } else if (format.indexOf("yy") > -1) {
    format = format.replace("yy", year.toString().substr(2, 2));
  }

  //replace the day
  format = format.replace("dd", day.toString().padStart(2, "0"));

  return format;
}
