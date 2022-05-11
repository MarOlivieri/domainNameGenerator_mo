/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
};

let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];
let extension = [".es", ".com", ".net"];

function coincide(nombre, ext) {
  let tam = ext.length - 1;
  let comp = true;
  while (tam >= 0 && comp === true) {
    let pos = 1;
    if (nombre[nombre.length - pos] !== ext[ext.length - pos]) return false;
    pos++;
    tam--;
  }
  return true;
}

for (let i = 0; i < pronoun.length; i++) {
  for (let t = 0; t < adj.length; t++) {
    for (let j = 0; j < noun.length; j++) {
      for (let r = 0; r < extension.length; r++) {
        if (coincide(noun[j], extension[r])) console.log("coincide");
        else console.log(pronoun[i] + adj[t] + noun[j] + extension[r]);
      }
    }
  }
}
