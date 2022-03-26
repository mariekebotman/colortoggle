let getBody = document.querySelector('body');

const hamburgermenu = document.querySelector('.hamburgermenu');
let getColormenu = document.querySelector('.colormenu');


hamburgermenu.addEventListener('click', function(){
    getColormenu.style.visibility = "visible";
});


const btnGrey = document.querySelector('#btn-grey');
const btnRed = document.querySelector('#btn-red');
const btnOrange = document.querySelector('#btn-orange');
const btnPurple = document.querySelector('#btn-purple');
const btnGreen = document.querySelector('#btn-green');


btnGrey.addEventListener('click', function(){
    getBody.style.backgroundColor = "rgb(173, 173, 173)";
    getColormenu.style.visibility = "hidden";
});

btnRed.addEventListener('click', function(){
    getBody.style.backgroundColor = "rgba(212, 0, 0, 0.993)";
    getColormenu.style.visibility = "hidden";
});

btnOrange.addEventListener('click', function(toggleColor){
    getBody.style.backgroundColor = "rgb(255, 123, 0)";
    getColormenu.style.visibility = "hidden";
});

btnPurple.addEventListener('click', function(toggleColor){
    getBody.style.backgroundColor = "rgb(158, 0, 111)";
    getColormenu.style.visibility = "hidden";
});

btnGreen.addEventListener('click', function(toggleColor){
    getBody.style.backgroundColor = "rgb(0, 160, 0)";
    getColormenu.style.visibility = "hidden";
});

















