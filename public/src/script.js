//let vAsideArctile = document.getElementById("show_aside_artcile");
//let vCards = document.getElementById("cards");
let vMain = document.getElementById("main");
let vAside = document.getElementById("aside");
let vHeader = document.getElementById("header");
let vNavBar = document.getElementById("navbar");
let vArticle = document.getElementById("article");
let vGrid = document.getElementById("grid");

let BreadcrumbArr = [];
let elmArray = [vMain, vAside, vHeader, vNavBar];
console.log(vMain);
//console.log(vAsideArctile);

/**  Handle Login **/
const handleLogin = (flg = "false") => {
  console.log(`printing from handleLogin ${flg}`);
  if (flg === "false") {
    vHeader.style.display = "none";
    vNavBar.style.display = "none";
    vAside.style.display = "none";
    vArticle.style.display = "none";
    vMain.style.display = "";
  } else {
    vHeader.style.display = "";
    vNavBar.style.display = "";
    vAside.style.display = "";
    vArticle.style.display = "";
    vMain.style.display = "none";
  }
};
handleLogin();
/** **/

/** Handle Login Screen*/
//const handleLoginScreen = () => {
var current = null;
document.querySelector("#userLogin").addEventListener("focus", function (e) {
  if (current) current.pause();
  console.log("anime1");
  current = anime({
    targets: "path",
    strokeDashoffset: {
      value: 0,
      duration: 700,
      easing: "easeOutQuart",
    },
    strokeDasharray: {
      value: "240 1386",
      duration: 700,
      easing: "easeOutQuart",
    },
  });
});
document.querySelector("#password").addEventListener("focus", function (e) {
  if (current) current.pause();
  console.log("anime2");
  current = anime({
    targets: "path",
    strokeDashoffset: {
      value: -336,
      duration: 700,
      easing: "easeOutQuart",
    },
    strokeDasharray: {
      value: "240 1386",
      duration: 700,
      easing: "easeOutQuart",
    },
  });
});
document.querySelector("#loginButton").addEventListener("focus", function (e) {
  if (current) current.pause();
  current = anime({
    targets: "path",
    strokeDashoffset: {
      value: -730,
      duration: 700,
      easing: "easeOutQuart",
    },
    strokeDasharray: {
      value: "530 1386",
      duration: 700,
      easing: "easeOutQuart",
    },
  });
});

document.querySelector("#loginButton").addEventListener("click", function (e) {
  if (current) current.pause();
  current = anime({
    targets: "path",
    strokeDashoffset: {
      value: -730,
      duration: 700,
      easing: "easeOutQuart",
    },
    strokeDasharray: {
      value: "530 1386",
      duration: 700,
      easing: "easeOutQuart",
    },
  });
});
//};
/** End Handle Login  */
handleLogin();
console.log(elmArray);

function showHide(arrayElm = [], p_elm) {
  arrayElm.forEach((e) => {
    console.log(e);
    e.id === p_elm ? (e.style.display = "block") : (e.style.display = "none");
    //e.id === p_elm ? (e.style.opacity = 1) : (e.style.opacity = 0);
  });
}

const createMenuItem = function (pMenuName, pMenuList = []) {
  console.log(pMenuList);
  let classSubMenu;
  console.log(`is Array ? ${Array.isArray(pMenuList)}`);
  if (Array.isArray(pMenuList) === true) {
    pMenuList.forEach((e) => {
      console.log(`e ${e}`);
      classSubMenu = `${
        classSubMenu || ""
      } <li class="nav-item"><a class="nav-link legitRipple">${e}</a></li>`;
    });

    classSubMenu = `<ul class="nav nav-group-sub" data-submenu-title="${pMenuName}">${classSubMenu}</ul>`;
  }

  console.log(`classSubMenu`);
  console.log(classSubMenu);

  let classMenu =
    pMenuList.length > 0
      ? `class="nav-item nav-item-submenu"`
      : `class="nav-item"`;
  let menuItem = `<li ${classMenu}><a href="#" class="nav-link legitRipple"><i class="icon-stack"></i><span>${pMenuName}</span></a>${classSubMenu}</li>`;

  let menus = document
    .querySelector("aside")
    .querySelector(".nav-item-submenu");

  console.log(`menuItem`);
  console.log(menuItem);

  menus.insertAdjacentHTML("afterend", menuItem);

  menus.insertAdjacentHTML(
    "beforeend",
    `
 	<li class="nav-item-header">
		<div>Navigation title</div>
		<i class="icon-menu" title="Tooltip title"></i>
	</li>

	<li class="nav-item">
		<a href="#" class="nav-link">
			<i class="icon-home4"></i>
			Top level link
		</a>
	</li>

	<li class="nav-item nav-item-submenu">
		<a href="#" class="nav-link">
			<i class="icon-copy"></i>
			<span>Top level with subnav</span>
		</a>

		<ul class="nav nav-group-sub" data-submenu-title="Folded nav title">
			<li class="nav-item">
				<a href="#" class="nav-link">2nd level item</a>
			</li>
			 
		</ul>
	</li>
 

<!-- /accordion navigation markup -->
<link href="/css/styles.min.css" rel="stylesheet" type="text/css" />

  <link
    href="https://fonts.googleapis.com/css?family=Roboto:400,300,100,500,700,900"
    rel="stylesheet"
    type="text/css"
  />
  <link href="/css/styles.min.css" rel="stylesheet" type="text/css" />
  <link href="/css/bootstrap.min.css" rel="stylesheet" type="text/css" />
  <link
    href="/css/bootstrap_limitless.min.css"
    rel="stylesheet"
    type="text/css"
  />
  <link href="/css/layout.min.css" rel="stylesheet" type="text/css" />
  <link href="/css/components.min.css" rel="stylesheet" type="text/css" />
  <link href="/css/colors.min.css" rel="stylesheet" type="text/css" />
  <!-- /global stylesheets -->`
  );
};

showHide(elmArray, "main");

const chkLogin = function (user, pass) {
  return `true`;
};
let brdElm;
/***   Change Breadcrumb ***/
const chngBreadcrumb = function () {
  return 0;
};
/*const chngBreadcrumb = function () {
  let brd = document.querySelector("#breadcrumbId");
  //let brdChild = brd.getElementsByClassName("breadcrumb-item");

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
};*/
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

/*** updating user Name */

const updateUserName = (e) => {
  let userMenu1 = document.getElementById("welcomUser1");
  let userMenu2 = document.getElementById("welcomUser2");
  let userLoggedDate = document.getElementById("welcomDate");

  console.log(`userMenu1`);
  console.log(userMenu1);
  let sysdate = new Date();

  userMenu1.textContent = `Morning ${e}`;
  userMenu2.textContent = `Welcom ${e}`;
  userLoggedDate.textContent = `Logged at :   ${dateFormat(
    sysdate,
    "dd/MM/yyyy"
  )} ${sysdate.getHours().toString().padStart(2, "0")}:${sysdate
    .getMinutes()
    .toString()
    .padStart(2, "0")}:${sysdate.getSeconds().toString().padStart(2, "0")}`;
};

/*  */

/*** Alret Function  ***/
const showAlert = function (msg, typ = "success") {
  let vTitle = typ === "success" ? "Succefuly Login" : "Login Error";
  let vTitleText =
    typ === "success" ? "Welcom " : "Invalid UserName Or Password !";

  let vAlert = document.querySelector("#notifiction");

  let vAlertTitle = document.querySelector(".ui-pnotify-title");
  let vAlertText = document.querySelector(".ui-pnotify-text");
  vAlertTitle.textContent = vTitle;
  vAlertText.textContent = msg;

  if (typ === "success") {
    vAlert.classList.add("bg-primary");
    vAlert.classList.remove("bg-danger");
  } else {
    vAlert.classList.remove("bg-primary");
    vAlert.classList.add("bg-danger");
  }

  console.log(vAlertTitle);
  vAlert.style.opacity = 1;
  setTimeout(() => {
    let vAlert = document.querySelector("#notifiction");

    console.log(vAlert);
    vAlert.style.opacity = 0;

    //vAlertBtn.click();
  }, 2000);
};

/***End  Alet Function  ***/

let vButton = document.querySelector("#loginButton");
console.log(`vButton`);
console.log(vButton);

vButton.addEventListener("click", (e) => {
  e.preventDefault();
  let vInputUser = document.getElementById("userLogin").value;
  let vPassword = document.getElementById("password").value;
  /*console.log(vInputUser);
  console.log(vPassword);
*/
  if (!vInputUser || !vPassword) {
    showAlert("UserName Or Password is not Entered!", "danger");
    return;
  }

  if (chkLogin(vInputUser, vPassword) === "true") {
    let userMap = new Map();
    userMap.set("user", vInputUser);
    showAlert("Succeful Login !", "success");
    //showHide(elmArray, "cards");
    //showHide(elmArray, "show_aside_artcile");
    updateUserName(userMap.get("user"));
    handleLogin("true");

    document.getElementById("userLogin").value = "";
    document.getElementById("password").value = "";
    //showHide(elmArray, "aside");

    BreadcrumbArr.push("Home");

    chngBreadcrumb();
  } else {
    showAlert("UserName Or Password is Uncorrect!", "danger");

    return;
  }
});
console.log("get Cards Button");
/*console.log(
  document.getElementById("cards").querySelectorAll(".btn")
  /*.getElementsByClassName("card-body")
    .getElementsByClassName("btn btn-primary")*/
//);

/*let vCardBuutons = document.getElementById("cards").querySelectorAll(".btn");

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
//});

const cardAction = function () {
  return 0;
};

// check caps lock

var vPassword = document.getElementById("password");

vPassword.addEventListener("keydown", function (event) {
  var text = document.getElementById("text_caps");
  text.style.opacity = "0";
  if (event.getModifierState("CapsLock")) {
    text.style.opacity = "1";
  } else {
    text.style.opacity = "0";
  }
});

let logOutIcon = document.querySelector(".icon-switch2");

logOutIcon.addEventListener("click", (e) => {
  e.preventDefault();
  handleLogin("false");
});

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
