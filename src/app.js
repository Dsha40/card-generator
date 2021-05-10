/* eslint-disable */
import "./style.css";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let sym = ["&#9824;", "&#9827;", "&#9829", "&#9830"];
  let numCard = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  let cardNum = {
    0: "A",
    1: "2",
    2: "3",
    3: "4",
    4: "5",
    5: "6",
    6: "7",
    7: "8",
    8: "9",
    9: "10",
    10: "J",
    11: "Q",
    12: "K"
  };

  const numRandom = (num, arrSym) => {
    let arrRandom = [];
    arrRandom.push(Math.floor(Math.random() * num.length));
    arrRandom.push(Math.floor(Math.random() * arrSym.length));
    return arrRandom;
  };

  const creatorCard = (objCarta, pintaCarta, arrRandom) => {
    let card = [];
    card.push(objCarta[arrRandom[0]]);
    card.push(pintaCarta[arrRandom[1]]);
    return card;
  };

  const htmlCard = arregloFinal => {
    let insertar = document.querySelector(".contenido");

    if (insertar.childElementCount !== 0) {
      insertar.removeChild(insertar.childNodes[0]);
    }

    let divCarta = document.createElement("div");
    divCarta.className = "card";

    let pintaArriba = document.createElement("div");
    pintaArriba.className = "header";
    pintaArriba.innerHTML = arregloFinal[1];
    if (pintaArriba.innerHTML === "♥") {
      pintaArriba.style.color = "red";
    } else if (pintaArriba.innerHTML === "♦") {
      pintaArriba.style.color = "red";
    }
    divCarta.appendChild(pintaArriba);

    let contenido1 = document.createElement("h1");
    contenido1.innerHTML = arregloFinal[0];
    if (pintaArriba.innerHTML === "♥") {
      contenido1.style.color = "red";
    } else if (pintaArriba.innerHTML === "♦") {
      contenido1.style.color = "red";
    }
    divCarta.appendChild(contenido1);

    let pintaAbajo = document.createElement("div");
    pintaAbajo.className = "footer";
    pintaAbajo.innerHTML = arregloFinal[1];
    if (pintaAbajo.innerHTML === "♥") {
      pintaAbajo.style.color = "red";
    } else if (pintaAbajo.innerHTML === "♦") {
      pintaAbajo.style.color = "red";
    }
    divCarta.appendChild(pintaAbajo);

    insertar.appendChild(divCarta);
  };

  let numeros = numRandom(numCard, sym);
  let carta = creatorCard(cardNum, sym, numeros);
  htmlCard(carta);

  setInterval(() => {
    let numeros = numRandom(numCard, sym);
    let carta = creatorCard(cardNum, sym, numeros);
    htmlCard(carta);
  }, 5000);
};
