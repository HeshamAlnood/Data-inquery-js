let vAsideArctile = document.getElementById("show_aside_artcile");
let vCards = document.getElementById("cards");
let vMain = document.getElementById("main");

//vAsideArctile.style.display = "none";
let elmArray = [vAsideArctile, vCards, vMain];
console.log(vMain);

console.log(elmArray);
//vCards.style.display = "none";

function showHide(arrayElm = [], p_elm) {
  arrayElm.forEach((e) => {
    console.log(e);
    e.id === p_elm
      ? /*? (e.style.visibility = "visible")
      : (e.style.visibility = "hidden");*/
        (e.style.display = "flex")
      : (e.style.display = "none");
  });
}
showHide(elmArray, "main");

const chkLogin = function (user, pass) {
  return `true`;
};

let vButton = document.querySelector("#loginButton");
console.log(`vButton`);
console.log(vButton);

vButton.addEventListener("click", () => {
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
    //alert("Succeful Login");
    const alrt = async function () {
      await Swal.fire("Succeful Login");
    };
    alrt().then(showHide(elmArray, "cards"));
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
  e.addEventListener("click", () => showHide(elmArray, "show_aside_artcile"));
});

const cardAction = function () {
  return 0;
};
