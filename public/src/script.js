let vAsideArctile = document.getElementById("show_aside_artcile");
//let vCards = document.getElementById("cards");
let vMain = document.getElementById("main");

let BreadcrumbArr = [];
let elmArray = [vAsideArctile, vMain];
console.log(vMain);
console.log(vAsideArctile);

console.log(elmArray);

function showHide(arrayElm = [], p_elm) {
  arrayElm.forEach((e) => {
    console.log(e);
    e.id === p_elm ? (e.style.display = "flex") : (e.style.display = "none");
  });
}
showHide(elmArray, "main");

const chkLogin = function (user, pass) {
  return `true`;
};
let brdElm;
/***   Change Breadcrumb ***/
const chngBreadcrumb = function () {
  let brd = document.querySelector("#breadcrumbId");
  let brdChild = brd.getElementsByClassName("breadcrumb-item");

  let childsBrd = brd.querySelectorAll(".li");

  while (brd.hasChildNodes()) {
    brd.removeChild(brd.firstChild);
  }

  let brdClass = 'class="breadcrumb-item active" aria-current=page';

  console.log(childsBrd);

  let arr = [...new Set(BreadcrumbArr)];
  brdElm = "";
  if (arr.length === 1) {
    brdElm = `<li href=#' ${brdClass}>${arr[0]}</li>`;
    console.log("lengh =1");
  } else {
    console.log("else");
    arr.forEach((e, i) => {
      brdClass =
        arr[i] === e
          ? 'class="breadcrumb-item active" aria-current=page'
          : 'class="breadcrumb-item" ';
      brdCls.classList.remove("active");
      brdElm =
        brdElm === undefined
          ? ""
          : brdElm + `<li href=#' ${brdClass}>${e}</li>`;
    });
  }

  //element.is ?? "" : element.remove();

  try {
    const element = document.getElementById("grid");
    console.log(`element`);
    console.log(element);
    element.remove();
  } catch (error) {
    console.log(`error`);
    console.log(error);
  }

  brd.insertAdjacentHTML("beforeend", brdElm);
  navBreadcrumb();
};
//};
/*** END  Change Breadcrumb ***/

/* Navigate Breadcrumb **/

const navBreadcrumb = function (nav = "n") {
  let brd = document.querySelector("#breadcrumbId");
  let childsBrd = brd.querySelectorAll("li");
  console.log(`navBreadcrumb childsBrd`);
  console.log(childsBrd);
  //childsBrd = childsBrd.querySelectorAll("a");
  let brdLength = childsBrd.length;
  console.log("brd length");
  console.log(brdLength);

  childsBrd.forEach((el) => {
    console.log(`el`);
    console.log(el);
    el.addEventListener("click", (e) => {
      console.log("on click");
      console.log(el.textContent);
      e.preventDefault();

      if (el.textContent === "Home" && brdLength > 1) {
        BreadcrumbArr.pop();
        chngBreadcrumb();
        showHide(elmArray, "cards");
      }
    });
  });
};

/*** END  Navigate Breadcrumb ***/

/*** Alret Function  ***/
const showAlert = function (msg, typ = "success") {
  let vAlert = document.getElementById("login-alert");
  let vAlertTxt = document.querySelector("#text-alert");
  console.log(`vAlertTxt`);
  console.log(vAlertTxt);
  vAlertTxt.textContent = msg;
  let classNam = `alert-${typ}`;

  vAlert.classList.remove("login-alert");
  vAlert.classList.add("is-show");
  vAlertTxt.classList.remove(`alert-danger`);
  vAlertTxt.classList.remove(`alert-success`);

  vAlertTxt.classList.add(classNam);

  setTimeout(() => {
    let vAlert = document.getElementById("login-alert");
    console.log(vAlert);
    vAlert.classList.add("login-alert");
    vAlert.classList.remove("is-show");
    //vAlertBtn.click();
  }, 2000);
};

/***End  Alet Function  ***/

let vButton = document.querySelector("#loginButton");
console.log(`vButton`);
console.log(vButton);

vButton.addEventListener("click", (e) => {
  e.preventDefault();
  let vInputUser = document.getElementById("floatingInput").value;
  let vPassword = document.getElementById("floatingPassword").value;
  /*console.log(vInputUser);
  console.log(vPassword);
*/
  if (!vInputUser || !vPassword) {
    showAlert("UserName Or Password is not Entered!", "danger");
    return;
  }

  if (chkLogin(vInputUser, vPassword) === "true") {
    showAlert("Succeful Login !", "success");
    //showHide(elmArray, "cards");
    showHide(elmArray, "show_aside_artcile");

    BreadcrumbArr.push("Home");
    chngBreadcrumb();
  } else {
    showAlert("UserName Or Password is Uncorrect!", "danger");

    return;
  }
});
console.log("get Cards Button");
console.log(
  document.getElementById("cards").querySelectorAll(".btn")
  /*.getElementsByClassName("card-body")
    .getElementsByClassName("btn btn-primary")*/
);

let vCardBuutons = document.getElementById("cards").querySelectorAll(".btn");

vCardBuutons.forEach((e) => {
  e.addEventListener("click", (eb) => {
    eb.preventDefault();
    let pageName = document
      .getElementById("cards")
      .querySelectorAll("h5").value;
    console.log(`pageName`);
    console.log(pageName);
    showHide(elmArray, "show_aside_artcile");
    let brdVal = e.previousElementSibling.previousElementSibling.textContent;
    BreadcrumbArr.push(brdVal);
    chngBreadcrumb();

    try {
      let vAlert = document.getElementById("login-alert");

      vAlert.classList.add("login-alert");
      vAlert.classList.remove("is-show");
    } catch (error) {
      console.log(error);
    }
    try {
      const element = document.getElementById("grid");
      console.log(`element remove gird`);
      console.log(element);
      //element.remove();
      console.log(document.getElementById("grid"));
    } catch (error) {
      console.log(`error`);
      console.log(error);
    }

    //nabBreadcrumb();
  });
  let vnam = e.previousElementSibling.previousElementSibling.textContent;

  console.log(`vnam`);
  console.log(vnam);

  /*console.log(`e`);
  console.log(e);*/
  //chngBreadcrumb(vnam);
});

const cardAction = function () {
  return 0;
};

var vPassword = document.getElementById("floatingPassword");

vPassword.addEventListener("keydown", function (event) {
  var text = document.getElementById("text_caps");
  text.style.opacity = "0";
  if (event.getModifierState("CapsLock")) {
    text.style.opacity = "1";
  } else {
    text.style.opacity = "0";
  }
});
