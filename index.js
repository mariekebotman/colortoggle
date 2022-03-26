const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".color__menu--hide");
const colorHome = document.querySelector(".color--home");
const colorRed = document.querySelector(".color--red");
const colorOrange = document.querySelector(".color--orange");
const colorPurple = document.querySelector(".color--purple");
const colorGreen = document.querySelector(".color--green");
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
      "color--purple"
      "color--green",
      
    );
  document.querySelector("body").classList.add(color);
};

const setText = (e) => {
  text.innerHTML = `Background color selected: ${e}`;
};

hamburger.addEventListener("mouseover", showMenu);
hamburger.addEventListener("mouseout", hideMenu);


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
colorPurple.addEventListener("click", function () {
  colorHandler("purple");
});
colorGreen.addEventListener("click", function () {
  colorHandler("green");
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
checkPurple.addEventListener("click", function () {
  colorHandler("purple");
});
checkGreen.addEventListener("click", function () {
  colorHandler("green");
});









