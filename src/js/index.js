/* eslint-disable */

import "file-loader?name=[name].[ext]!../index.html";
import "../assets/img/rigo-baby.jpg";
import "../assets/img/4geeks.ico";
//import 'breathecode-dom'; //DOM override to make JS easier to use
import "../style/index.scss";

window.onload = function() {
  //   let who = ["the dog", "my granma", "his turtle", "my bird"];
  //   let what = ["eat", "pissed", "crushed", "broked"];
  //   let when = [
  //     "before the class",
  //     "right in time",
  //     "when I finished",
  //     "during my lunch",
  //     "while I was praying"
  //   ];

  let card = ["1", "2"];
  let numbers = ["a", "b"];

  //   let card = ["&spades;", "&clubs;", "&hearts;", "&diams;"];
  //   let numbers = [
  //     "A",
  //     "2",
  //     "3",
  //     "4",
  //     "5",
  //     "6",
  //     "7",
  //     "8",
  //     "9",
  //     "10",
  //     "J",
  //     "Q",
  //     "K"
  //   ];

  let c = card.length;
  let n = numbers.length;

  let ca = Math.round((Math.random() * c) + 1);
  let nu = Math.round((Math.random() * n) + 1);

  let car = card[ca];
  let num = numbers[nu];

  //   let w = who.length;
  //   let x = what.length;
  //   let y = when.length;

  //   let a = Math.round(Math.random() * w);
  //   let b = Math.round(Math.random() * x);
  //   let c = Math.round(Math.random() * y);

  //   let t = who[a] + " " + what[b] + " " + when[c];
  //   document.getElementById("excuse").innerHTML = t;
  document.getElementById("symbol").innerHTML = car;
  document.getElementById("numb").innerHTML = num;
  document.getElementById("symbols").innerHTML = car;
};
