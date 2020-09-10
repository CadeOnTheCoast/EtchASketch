let container = document.getElementById("container");
let clear = document.getElementById("clear");
let bw = document.getElementById("bw");
let colorize = document.getElementById("color");
let retro = document.getElementById("retro");
let vang = document.getElementById("stry");
let aubc = document.getElementById("aub");
let color = 5;

function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    cell.innerText = ("");
    container.appendChild(cell).className = "grid-item";
    cell.addEventListener("mouseover", paint);
  };
};


makeRows(16, 16);

bw.addEventListener("click", bwGrid);
colorize.addEventListener("click", colorGrid);
retro.addEventListener("click", retroGrid);
clear.addEventListener("click", clearGrid);
vang.addEventListener("click", stryNight);
aubc.addEventListener("click", aubGrid);

function stryNight(){
  color = 4
}

function bwGrid () {
  color = 1;
}

function colorGrid() {
  color = 2;
}

function retroGrid() {
  color = 3;
}

function aubGrid() {
  color = 5;
}

function clearGrid(){
  sz = prompt("How big do you want the drawing area to be?")
  container.innerHTML = "";
  makeRows(sz, sz);
}



function paint() {
  if (color == 1) {
    this.style.backgroundColor = "black";
  } else if (color == 2) {
    let random1 = Math.floor(Math.random() * 256);
    let random2 = Math.floor(Math.random() * 256);
    let random3 = Math.floor(Math.random() * 256);
    this.style.backgroundColor = "rgb(" + random1 + ", " + random2 + ", " + random3 + ")";
    console.log(this.style.backgroundColor);
  } else if (color == 3){
    let retro1 = "rgb(56, 104, 203)";
    let retro2 = "rgb(202, 125, 216)";
    let retro3 = "rgb(249, 234, 13)";
    let retro4 = "rgb(191, 128, 211)";
    let retro5 = "rgb(107, 228, 225)";
    let retro6 = "rgb(237, 114, 166)";
    let retroColor = [retro1, retro2, retro3, retro4, retro5, retro6];
    this.style.backgroundColor = retroColor[Math.floor(Math.random() * retroColor.length)];
} else if (color == 4) {
    let stry1 = "rgb(4, 21, 37)";
    let stry2 = "rgb(7, 28, 61)";
    let stry3 = "rgb(87, 139, 163)";
    let stry4 = "rgb(243, 232, 133)";
    let stry5 = "rgb(238, 181, 81)";
    let stryColor = [stry1, stry2, stry5, stry3, stry4];
    this.style.backgroundColor = stryColor[Math.floor(Math.random() * stryColor.length)];
  } else if (color == 5) {
    let aub1 = "#002649";
    let aub2 = "#e87511";
    let aub3 = "#eeeeee";
    let aubColor = [aub1, aub2, aub3];
    this.style.backgroundColor = aubColor[Math.floor(Math.random() * aubColor.length)];
  }
}