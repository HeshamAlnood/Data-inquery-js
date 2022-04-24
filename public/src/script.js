let vAsideArctile = document.getElementById("show_aside_artcile");
let vCards = document.getElementById("cards");
let vMain = document.getElementById("main");

let BreadcrumbArr = [];
//vAsideArctile.style.display = "none";
let elmArray = [vAsideArctile, vCards, vMain];
console.log(vMain);

console.log(elmArray);
//vCards.style.display = "none";

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

  /*console.log(`brd`);
  console.log(brd);
  console.log(brd.hasChildNodes());*/
  while (brd.hasChildNodes()) {
    brd.removeChild(brd.firstChild);
  }
  /*childsBrd.forEach((e) => {
    console.log(`remove e`);
    console.log(e);
    e.remove();
  });*/

  /*console.log(`print after removing`);

  console.log(brd);*/
  //brd.remove();

  let brdClass = 'class="breadcrumb-item active" aria-current=page';
  /*console.log("Array");
  console.log(BreadcrumbArr);
  console.log(BreadcrumbArr.length);
  console.log(`brd`);
  console.log(brd);*/
  /*console.log(brdChild);
  console.log(brd.getElementsByTagName("li"));*/
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
      //brdCls.classList.remove("active");
      brdElm =
        brdElm === undefined
          ? ""
          : brdElm + `<li href=#' ${brdClass}>${e}</li>`;
      /*console.log("forEach");
      console.log(brdElm);*/
    });
  }

  /*console.log(`brdElm`);
  console.log(brdElm);*/
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
  childsBrd.forEach((el) => {
    console.log(`el`);
    console.log(el);
    el.addEventListener("click", (e) => {
      console.log("on click");
      console.log(e.value);
      e.preventDefault();
      if (e.value === "Home") {
        showHide(elmArray, "cards");
        BreadcrumbArr.pop();
      }
    });
  });
};

/*** END  Navigate Breadcrumb ***/

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
    /*alert("UserName Or Password is not Entered");
    return;*/

    Swal.fire({
      icon: "error",
      title: "Login Faild",
      text: "UserName Or Password is not Entered!",
      footer: "",
    });
    return;
  }

  if (chkLogin(vInputUser, vPassword) === "true") {
    //Swal.fire("Succeful Login");
    let vAlert = document.getElementById("login-alert");
    console.log(vAlert);
    //vAlert.style.display = "flex";
    //vAlert.classlist.add("login-alert.is-show");
    vAlert.classList.remove("login-alert");
    vAlert.classList.add("is-show");

    console.log(vAlert);
    setTimeout(() => {
      let vAlertBtn = document.getElementById("alertSuccessBtn");
      let vAlert = document.getElementById("login-alert");

      console.log(vAlertBtn);
      console.log(vAlert);
      vAlert.classList.add("login-alert");
      vAlert.classList.remove("is-show");
      //vAlertBtn.click();
    }, 2000);
    showHide(elmArray, "cards");
    BreadcrumbArr.push("Home");
    chngBreadcrumb();

    //alrt().then(showHide(elmArray, "cards"));
  } else {
    Swal.fire({
      icon: "error",
      title: "Login Faild",
      text: "UserName Or Password is Uncorrect!",
      footer: "",
    });

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

vPassword.addEventListener("keyup", function (event) {
  var text = document.getElementById("text_caps");
  text.style.opacity = "0";
  if (event.getModifierState("CapsLock")) {
    text.style.opacity = "1";
  } else {
    text.style.opacity = "0";
  }
});
