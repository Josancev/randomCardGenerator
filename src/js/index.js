/* eslint-disable */

import "file-loader?name=[name].[ext]!../index.html";
import "../assets/img/rigo-baby.jpg";
import "../assets/img/4geeks.ico";
//import 'breathecode-dom'; //DOM override to make JS easier to use
import "../style/index.scss";

window.onload = function() {
  let card = ["&spades;", "&hearts;", "&clubs;", "&diams;"];
  let numbers = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];

  let c = card.length;
  let n = numbers.length;

  let ca = Math.floor(Math.random() * c);
  let nu = Math.floor(Math.random() * n);
  console.log(ca);
  console.log(nu);
  let car = card[ca];
  let num = numbers[nu];
  console.log(car);
  console.log(num);

  document.getElementById("symbol").innerHTML = car;
  document.getElementById("numb").innerHTML = num;
  document.getElementById("symbols").innerHTML = car;
};
