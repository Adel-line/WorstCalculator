"use strict";

init();

function init() {
  document.getElementById("calculate").addEventListener("click", start);
}

function start() {
    console.log("Start");
  let firstchoice = document.getElementById("firstnumber").value;
  let secondchoice = document.getElementById("secondnumber").value;
  const operation = document.getElementById("operator").value;
  let no1 = Number(firstchoice);
  let no2 = Number(secondchoice);

  if (operation === "add") {
   document.getElementById("results").innerHTML = no1 + no2;
  } else if (operation === "sub") {
   document.getElementById("results1").innerHTML = no1 - no2;
  } else if (operation === "mul") {
    document.getElementById("results2").innerHTML = no1 * no2;
  } else if (operation === "div") {
     document.getElementById("results3").innerHTML = no1 / no2;
  }
}

document.querySelector("#clear").addEventListener("click", e=>{
    window.location.reload();
});
