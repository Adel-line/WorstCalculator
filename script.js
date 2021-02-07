"use strict";
init();

function init() {
  //Init calc + Button
  document.querySelector("#calculate").addEventListener("click", start);
  console.log("start calculator");
}

function start() {
  // Getting Elements
  let firstchoice = document.querySelector("#firstnumber");
  let secondchoice = document.querySelector("#secondnumber");
  let operator = document.querySelector("#operator");
  let no1 = Number(firstchoice);
  let no2 = Number(secondchoice);
  calculator();
}

// Calculator operations
function calculator() {
  console.log("Calculator");
  if (operator === "add") {
    let li = document.createElement("li");
    document.getElementById("#results").innerHTML = no1 + no2;
    res(li);
  } else if (operator === "sub") {
    let li = document.createElement("li");
    li.innerHTML = no1 - no2;
    res(li);
  } else if (operator === "mul") {
    let li = document.createElement("li");
    li.innerHTML = no1 * no2;
    res(li);
  } else if (operator === "div") {
    let li = document.createElement("li");
    li.innerHTML = no1 / no2;
    res(li);
  }
}

function res(li) {
  console.log(li);
  console.log("hio this checked");
  document.querySelector("#results").appendChild(li);

  console.log("hio this not checked");
  document.querySelector("#results").appendChild(li);
}
