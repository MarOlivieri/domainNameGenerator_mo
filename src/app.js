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
let noun = ["jogger", "racoon", "leones", "capcom"];
let extension = [".es", ".com", ".net"];

//esta funcion comprueba si coincide la extensión conlas últimas letras del nombre
//declaro una variable tam, a la que asigno el tamaño de la extension -1
//para solo comprobar ese número de letras de la palabra
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
        if (coincide(noun[j], extension[r])) {
          //si coinciden las últimas leras del nombre con la extension sin el punto
          //convierto el nombre en un array, le corto el numero de letras exacto a la extension-1
          //e introduzco la extension en el array, despues convierto el array en string y lo junto
          //a las cadenas de texto
          let arr = noun[j].split("");
          let tamext = extension[r].length - 1;
          let narr = arr.slice(0, arr.length - tamext);
          for (let n = 0; n < extension[r].length; n++) {
            narr.push(extension[r][n]);
          }
          let palabrafinal = narr.join("");
          console.log(pronoun[i] + adj[t] + palabrafinal);
        } else console.log(pronoun[i] + adj[t] + noun[j] + extension[r]);
      }
    }
  }
}
