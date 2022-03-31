const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".color__menu--hide");
const colorHome = document.querySelector(".color--home");
const colorRed = document.querySelector(".color--red");
const colorOrange = document.querySelector(".color--orange");
const colorGreen = document.querySelector(".color--green");
const colorPurple = document.querySelector(".color--purple");
const checkHome = document.getElementById("gray");
const checkRed = document.getElementById("red");
const checkOrange = document.getElementById("orange");
const checkGreen = document.getElementById("green");
const checkPurple = document.getElementById("purple");
const text = document.querySelector(".text");

const showMenu = () => {
  menu.classList.remove("color__menu--hide");
  menu.classList.add("color__menu");
};
const hideMenu = () => {
  menu.classList.remove("color__menu");
  menu.classList.add("color__menu--hide");
};

const setColor = (color) => {
  document
    .querySelector("body")
    .classList.remove(
      "color--home",
      "color--red",
      "color--orange",
      "color--green",
      "color--purple"
    );
  document.querySelector("body").classList.add(color);
};

const setText = (e) => {
  text.innerHTML = `Background color selected: ${e}`;
};

hamburger.addEventListener("mouseover", showMenu);
hamburger.addEventListener("mouseout", hideMenu);

const keyHandler = (e) => {
  switch (e) {
    case "1":
      colorHandler("gray");
      break;
    case "2":
      colorHandler("red");
      break;
    case "3":
      colorHandler("orange");
      break;
    case "5":
      colorHandler("green");
      break;
    case "7":
      colorHandler("purple");
      break;
    default:
      break;
  }
};

const colorHandler = (setEvent) => {
  switch (setEvent) {
    case "gray":
      setColor("color--home");
      hideMenu();
      setText("gray");
      document.getElementById(setEvent).checked = true;
      break;
    case "red":
      setColor("color--red");
      hideMenu();
      setText("red");
      document.getElementById(setEvent).checked = true;
      break;
    case "orange":
      setColor("color--orange");
      hideMenu();
      setText("orange");
      document.getElementById(setEvent).checked = true;
      break;
    case "green":
      setColor("color--green");
      hideMenu();
      setText("green");
      document.getElementById(setEvent).checked = true;
      break;
    case "purple":
      setColor("color--purple");
      hideMenu();
      setText("purple");
      document.getElementById(setEvent).checked = true;
      break;
    default:
      setColor("color--home");
      hideMenu();
      setText("gray");
      document.getElementById("gray").checked = true;
      break;
  }
};

colorHandler();

colorHome.addEventListener("click", function () {
  colorHandler("gray");
});
colorRed.addEventListener("click", function () {
  colorHandler("red");
});
colorOrange.addEventListener("click", function () {
  colorHandler("orange");
});
colorGreen.addEventListener("click", function () {
  colorHandler("green");
});
colorPurple.addEventListener("click", function () {
  colorHandler("purple");
});
document.addEventListener("keydown", (event) => {
  keyHandler(event.key);
});
checkHome.addEventListener("click", function () {
  colorHandler("gray");
});
checkRed.addEventListener("click", function () {
  colorHandler("red");
});
checkOrange.addEventListener("click", function () {
  colorHandler("orange");
});
checkGreen.addEventListener("click", function () {
  colorHandler("green");
});
checkPurple.addEventListener("click", function () {
  colorHandler("purple");
});