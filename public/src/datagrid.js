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
        type: e.toLocaleUpperCase().includes("DATE")
          ? /*"number"*/ "date"
          : "string",
        title: e.toLocaleUpperCase().replaceAll("_", " "),
        format: e.toLocaleUpperCase().includes("DATE") ? "{0:dd/MM/yyyy}" : "",

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
        type: e.toLocaleUpperCase().includes("DATE")
          ? /*"number"*/ "date"
          : "string",
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

let query = document.querySelector("aside");
query = document.querySelectorAll(".nav-link");
//query = document.getElementsByClassName("nav-link");
console.log(`query`);
console.log(query);

query.forEach((e) => console.log(e.textContent.replace(/\s/g, "")));
console.log(query[0]);

query.forEach((e) => {
  let vArctile = document.querySelector("article");
  console.log(`vArctile`);
  console.log(vArctile);
  e.addEventListener("click", () => {
    console.log(`e click ${e.textContent}`);
    console.log(e);
    //if (e.textContent.replace(/\s/g, "") === "DashBoard")
    console.log(`has childern ? ${e.tagName}`);
    console.log(`  childNodes length ? ${e.childNodes.length}`);
    if (e.childNodes.length > 1) {
      console.log(`stop the ${e.textContent}`);
      return;
    }
    console.log(e.textContent);
    let vlink = `http://localhost:3001/dbData?inquery=${e.textContent.replace(
      /\s/g,
      ""
    )}`;
    vlink = `https://covid-api.mmediagroup.fr/v1/cases?country=Yemen`;
    console.log(vlink);
    dataV = "";
    const element = document.getElementById("grid");
    console.log(`fieldSchema`);
    console.log(fieldSchema);
    columnsP.length = 0;
    document.querySelector("aside").classList.add("disabledbutton");
    console.log("aside");
    console.log(document.querySelector("aside"));

    //element.replaceChildren();
    try {
      element.remove();
    } catch (error) {
      console.log(`error`);
      console.log(error);
    }

    vArctile.insertAdjacentHTML(
      "beforeend",
      `<div id="grid"  >
        <div id="loading-parent" class="d-flex justify-content-center">
          <div
            id="loading"
            class="spinner-border text-primary"
            style="width:60px;height:60px;margin-top:400px;margin-left:50px;"
            role="status"
          >
            <span class="visually-hidden">Loading...</span>
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

        dataV = data;
        /* for testing data*/

        var products = [
          {
            ProductID: 1,
            ProductName: "Chai",
            SupplierID: 1,
            CategoryID: 1,
            QuantityPerUnit: "10 boxes x 20 bags",
            UnitPrice: 18.0,
            UnitsInStock: 39,
            UnitsOnOrder: 0,
            ReorderLevel: 10,
            Discontinued: false,
          },
          {
            ProductID: 2,
            ProductName: "Chang",
            SupplierID: 1,
            CategoryID: 1,
            QuantityPerUnit: "24 - 12 oz bottles",
            UnitPrice: 19.0,
            UnitsInStock: 17,
            UnitsOnOrder: 40,
            ReorderLevel: 25,
            Discontinued: false,
          },
          {
            ProductID: 3,
            ProductName: "Aniseed Syrup",
            SupplierID: 1,
            CategoryID: 2,
            QuantityPerUnit: "12 - 550 ml bottles",
            UnitPrice: 10.0,
            UnitsInStock: 13,
            UnitsOnOrder: 70,
            ReorderLevel: 25,
            Discontinued: false,
          },
          {
            ProductID: 4,
            ProductName: "Chef Anton's Cajun Seasoning",
            SupplierID: 2,
            CategoryID: 2,
            QuantityPerUnit: "48 - 6 oz jars",
            UnitPrice: 22.0,
            UnitsInStock: 53,
            UnitsOnOrder: 0,
            ReorderLevel: 0,
            Discontinued: false,
          },
          {
            ProductID: 5,
            ProductName: "Chef Anton's Gumbo Mix",
            SupplierID: 2,
            CategoryID: 2,
            QuantityPerUnit: "36 boxes",
            UnitPrice: 21.35,
            UnitsInStock: 0,
            UnitsOnOrder: 0,
            ReorderLevel: 0,
            Discontinued: true,
          },
          {
            ProductID: 6,
            ProductName: "Grandma's Boysenberry Spread",
            SupplierID: 3,
            CategoryID: 2,
            QuantityPerUnit: "12 - 8 oz jars",
            UnitPrice: 25.0,
            UnitsInStock: 120,
            UnitsOnOrder: 0,
            ReorderLevel: 25,
            Discontinued: false,
          },
        ];
        dataV.length = 0;
        dataV = "";

        dataV = products;
        products = "";

        //       createTable(products);
        /* end*/
        //createTable(dataV);

        console.log(`dataV`);
        console.log(dataV);

        $(document).ready(function () {
          $("#grid").kendoGrid({
            dataSource: {
              data: dataV,
              pageSize: 50,
            },
            scrollable: {
              //virtual: "columns",
              endless: true,
            },
            navigatable: true,

            /* try schema */
            schema: {
              model: {
                fields: fieldSchema,
              },
            },

            /* end try schema */
            //  rowTemplate: kendo.template($("#template").html()),
            height: "1110",
            width: "99%",
            noRecords: true,

            groupable: {
              messages: {
                empty: "Drag Coulumn to Group By",
              },
            },
            sortable: true,
            reorderable: true,
            resizable: true,
            columnMenu: true,
            loaderType: "loadingPanel",

            //selectable: "multiple cell",
            //allowCopy: true,
            toolbar: ["excel", "pdf", "search"],
            excel: {
              fileName: "Grid.xlsx",
              proxyURL: "https://demos.telerik.com/kendo-ui/service/export",
              filterable: true,
            },
            filterable: {
              mode: "row",
              //ui: "datePicker",
            },
            /*   pageable: {
              refresh: false,
              pageSizes: true,
              buttonCount: 5,
            },*/
            columns: columnsP,
          });
        });
        document.getElementById("loading").style.opacity = "0";
        document.getElementById("grid").style.opacity = "1";
        document.getElementById("loading-parent").remove();
        document.querySelector("aside").classList.remove("disabledbutton");
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
