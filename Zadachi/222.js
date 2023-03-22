// Задание №1
document.querySelector(".btn").addEventListener("click", () => {
  alert("Привет, Россия!");
});

// Задание №2
let input1 = document.getElementById("input");
document.querySelector(".inpbtn").addEventListener("click", () => {
  input1.value = "sereja@ulichnaya.com";
});

// Задание №3
let test = document.getElementById("input2");
document.querySelector(".inpbtn2").addEventListener("click", () => {
  alert(test.value);
});

// Задание №4
const input3 = document.getElementById("input3");
const input4 = document.getElementById("input4");

document.getElementById("button").addEventListener("click", () => {
  let temp = input3.value;
        input3.value = input4.value;
        input4.value = temp;
});

// Задание №5
let blockBtn = document.getElementById("blockbtn");
let unblockBtn = document.getElementById("unblockbtn");
let block = document.getElementById("disable");
  
  blockBtn.addEventListener("click", () => {
    block.disabled = true;
  });
  
  unblockBtn.addEventListener("click", () => {
    block.disabled = false;
  });

// Задание №6
const square = document.querySelector(".square");
const toggleBtn = document.querySelector("#toggle-btn");

toggleBtn.addEventListener("click", () => {
  if (square.style.display === "none") {
    square.style.display = "block";
    toggleBtn.textContent = "Скрыть квадрат";
  } else {
    square.style.display = "none";
    toggleBtn.textContent = "Показать квадрат";
  }
});

// Задание №7
const squareColor = document.querySelector(".squarecolor");

squareColor.addEventListener("mouseover", () => {
  squareColor.style.background = "red";
});

squareColor.addEventListener("mouseleave", () => {
  squareColor.style.background = "grey";
});

// Задание №8

let eight = document.getElementById("Squares");
eight.addEventListener("click", (event) => {
  document.querySelectorAll(".squareID").forEach((element) => {
    element.style.cssText = "background: red;";
  });
  event.target.style.backgroundColor = "green";
});

