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
      console.log(e.toLocaleUpperCase().replaceAll("_", " "));
      obC = {
        field: e.toLocaleUpperCase(),
        //format: e.toLocaleUpperCase().includes("DATE") ? "{0:DD/MM/YYYY}" : "",
        type: e.toLocaleUpperCase().includes("DATE") ? "number" : "string",
        title: e.toLocaleUpperCase().replaceAll("_", " "),
        width: `150px`,

        attributes: {
          class: "row-style",
        },
        headerAttributes: { class: "label-color" },

        filterable: {
          mode: "row",

          search: true,
        },
      };

      fieldSchema[`"${e}"`] = {
        type: e.toLocaleUpperCase().includes("DATE") ? "number" : "string",
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

    vArctile.insertAdjacentHTML(
      "afterbegin",
      `<div id="grid">
      <div id="loading-parent" class="d-flex justify-content-center" >
  <div id="loading" class="spinner-border text-primary" style="width:60px;height:60px;margin-top:400px;margin-left:800px;" role="status">
    <span class="visually-hidden" >Loading...</span>
  </div>
</div>
      </div>`
    );

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
        document.getElementById("loading").style.opacity = "1";
        document.getElementById("grid").style.opacity = "0";

        //console.log(`data`);
        //console.log(dataV);
        dataV = data;
        //console.log(data);
        createTable(data);
        //return data;

        console.log(`dataV`);
        //console.log(dataV);

        $(document).ready(function () {
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
            height: 1100,
            width: "200%",

            groupable: true,
            sortable: true,
            reorderable: true,
            resizable: true,
            columnMenu: true,

            //selectable: "multiple cell",
            //allowCopy: true,
            toolbar: ["excel", "pdf", "search"],
            excel: {
              fileName: "Kendo UI Grid Export.xlsx",
              proxyURL: "https://demos.telerik.com/kendo-ui/service/export",
              filterable: true,
            },
            filterable: {
              mode: "row",
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
        document.getElementById("loading").style.opacity = "0";
        document.getElementById("grid").style.opacity = "1";
        document.getElementById("loading-parent").remove();
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
