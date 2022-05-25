const fs = require("fs");
const async = require("hbs/lib/async");

//const mypw = "ATC2002";
let libPath = "D:\\instantclient_21_3";

function getQuery(inquery) {
  let queryString;
  let v = inquery;

  if (v === undefined) {
    return;
  }

  console.log(`v = ${v}`);
  if (v.toUpperCase() === "PURCHASING") {
    queryString = `SELECT PIH_INV_NO, PIH_INV_DATE, PIH_INV_DUE, 
   PIH_TERMS, PIH_VENDOR, PIH_VEND_NAME, 
   PIH_TOT_INV_AMT, PIH_DISCOUNT_AMT, PIH_NET_INV_AMT, 
   PIH_PAID_AMT, PIH_CHEQUE_NO, PIH_POSTED, 
   PIH_YEAR, PIH_PERIOD, PIH_CREATED_BY, 
   PIH_CREATED_DATE, PIH_INV_BALANCE, PIH_FACTOR, 
 PIH_ORDER_NO, PIH_TAX_VAL, 
   PIH_DISCOUNT_PRSNT, PIH_TAX_VALUE 
FROM PURCHASE_INVOICE_HD`;
  } else if (v.toUpperCase() === "INVOICING") {
    queryString = `SELECT SIH_INV_NO, SIH_INV_DATE, SIH_INV_DUE, 
   SIH_TERMS, SIH_CUSTOMER, SIH_CUST_NAME, 
   SIH_TOT_INV_AMT, SIH_DISCOUNT_AMT, SIH_NET_INV_AMT, 
   SIH_TOT_COST_AMT, SIH_PAID_AMT, SIH_PRINTED, 
   SIH_SMAN_NO, SIH_SMAN_NAME, SIH_POSTED, 
   SIH_YEAR, SIH_PERIOD, SIH_CREATED_BY, 
   SIH_CREATED_DATE, SIH_PROFIT, SIH_INV_BALANCE, 
   SIH_CREDIT_HOLD, PURCHASE_ORDER_NO, SIH_DISCOUNT_PRSN, 
   SIH_DISCOUNT_VAL, SIH_TAX_PRSNT, SIH_NOTE, 
   SIH_INT_TOT_INV_AMT, SIH_INT_DISCOUNT_AMT, SIH_INT_NET_INV_AMT, 
   SIH_INT_TOT_COST_AMT, SIH_INT_PROFIT
   FROM SALES_INVOICE_HD`;
  } else if (v.toUpperCase() === "Inventory") {
    queryString = `SELECT  ITEM_PART_NO, ITEM_DESCRIPTION, ITEM_CLASS, 
   ITEM_ON_ORDER_QTY, ITEM_ON_HAND_QTY, ITEM_UNIT_COST, 
   ITEM_TOTAL_COST, ITEM_UNIT_PRICE, ITEM_MINIMUM_QTY, 
   ITEM_MAXIMUM_QTY, ITEM_STAMPING_NO, ITEM_LOCATION, 
   ITEM_CLASS_DESCRIPTION, ITEM_STATUS, ITEM_CREATED_BY, 
   ITEM_CREATED_DATE, ITEM_REMARKS, ITEM_LAST_PURCH_UNIT_PRICE, 
   ITEM_DPRICE, BRAND_NO, TYPE_NO, 
   MODEL_NO, SUB_MODEL, LOCK_FLAG, 
   LOCK_USER, LOCK_DATE, ITEM_DESCRIPTION_ARB, 
   WSA_QTY, WSA_PRICE, WSB_F_QTY, 
   WSB_T_QTY, WSB_PRICE, LOCKED_QTY
   FROM ITEMS`;
  } else if (v.toUpperCase() === "CUSTOMER") {
    queryString = `SELECT 
    CUST_CUSTOMER, CUST_NAME, CUST_ADDRESS, 
   CUST_CONTACT, CUST_PHONE, CUST_FAX, 
   CUST_TELEX, CUST_BALANCE, CUST_CREDIT_LIMIT, 
   CUST_TERRITORY, CUST_TERMS, CUST_STATUS, 
   CUST_EMAIL, CUST_CREATED_BY, CUST_CREATED_DATE, 
   CUST_CREDIT_PERIOD, CUST_SMAN_NO, CUST_CATEGORY, 
   CUST_PROFIT_MARGIN, CUST_REGION, CUST_TAX_ID, 
   VAT_ID, CUST_NAME_ARB
FROM CUSTOMER `;
  } else if (v.toUpperCase() === "VENDOR") {
    queryString = `SELECT 
    VEND_VENDOR, VEND_NAME, VEND_ADDRESS, 
   VEND_CONTACT, VEND_PHONE, VEND_FAX, 
   VEND_TELEX, VEND_BALANCE, VEND_TERRITORY, 
   VEND_TERMS, VEND_STATUS, VEND_EMAIL, 
   VEND_CREATED_BY, VEND_CREATED_DATE, VEND_REGION
FROM VENDOR`;
  } else {
    return;
  }
  return queryString;
}

let frm = getQuery("PURCHASING");
frm = frm.substring(frm.indexOf("SELECT") + 6, frm.indexOf("FROM"));
frm = frm.replace(/\s/g, "");
/*console.log(frm);
console.log(frm.split(","));*/

const oracledb = require("oracledb");
try {
  oracledb.initOracleClient({ libDir: libPath });
} catch (err) {
  console.error("Whoops!");
  console.error(err);
  process.exit(1);
}

let user = "ATC2002";

let fetchInfoO = {};
let fetob = frm.split(",");
fetob.forEach((e) => {
  fetchInfoO[`'${e.toString()}'`] = { type: oracledb.STRING };
});
console.log(fetchInfoO);

const runSql = async function (sql, binds = []) {
  let connection;
  let rslt;

  try {
    connection = await oracledb.getConnection({
      user: user,
      password: user,
      connectString: "192.168.0.151:1521/orcl",
    });

    //oracledb.fetchAsString = [oracledb.String];
    //oracledb.fetchAsString = [oracledb.DATE /*, oracledb.NUMBER*/];

    /*const nls_date_lang = await connection.execute(
      `ALTER SESSION SET NLS_DATE_LANGUAGE = 'ARABIC'`
    );*/
    /*const nls_date_lang = await connection.execute(
      `ALTER SESSION SET NLS_DATE_LANGUAGE  = 'AMERICAN'`
    );
    const nls = await connection.execute(
      `ALTER SESSION SET NLS_DATE_FORMAT = 'YYYYMMDD'`
    );
    const nls_timeStamp = await connection.execute(
      `ALTER SESSION SET NLS_TIMESTAMP_FORMAT = 'YYYYMMDD'`
    );*/
    //    oracledb.fetchAsString = [oracledb.DATE, oracledb.NUMBER];

    const result = await connection.execute(
      sql,
      binds, // bind value for :id
      { outFormat: oracledb.OUT_FORMAT_OBJECT /*fetchInfo: fetchInfoO*/ } // bind value for :id
    );

    return result.rows;
  } catch (err) {
    console.error(err);
  } finally {
    if (connection) {
      try {
        await connection.close();
      } catch (err) {
        console.error(err);
      }
    }
  }
};

module.exports = { runSql, getQuery };
