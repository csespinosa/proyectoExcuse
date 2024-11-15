/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let first = "A ";
  let adj = [
    "focus ",
    "happy ",
    "angry ",
    "lonely ",
    "crazy ",
    "stupid ",
    "smelly ",
    "fast ",
    "old "
  ];
  let noun = [
    "runner ",
    "giraffe ",
    "dog ",
    "old man ",
    "driver ",
    "comedian ",
    "clown "
  ];
  let action = [
    "took my ",
    "threw my ",
    "yelled at my ",
    "kicked my ",
    "stole my ",
    "burned my ",
    "bit my ",
    "hit my "
  ];
  let possetion = [
    "toe ",
    "car ",
    "watch ",
    "shoe ",
    "wallet ",
    "shirt ",
    "keys ",
    "computer ",
    "phone ",
    "sandwich "
  ];
  let where = [
    "on the street",
    "in my house",
    "in the subway",
    "in front of the office",
    "near the mall",
    "on the toilet",
    "at the bus station"
  ];

  // declaring random variables
  let rdm1 = Math.floor(Math.random() * adj.length);
  let rdm2 = Math.floor(Math.random() * noun.length);
  let rdm3 = Math.floor(Math.random() * action.length);
  let rdm4 = Math.floor(Math.random() * possetion.length);
  let rdm5 = Math.floor(Math.random() * where.length);

  // creating a sentence (the excuse)
  document.querySelector("#excuse").innerHTML =
    first +
    adj[rdm1] +
    noun[rdm2] +
    action[rdm3] +
    possetion[rdm4] +
    where[rdm5];
  console.log("Hello Rigo from the console!");
};
