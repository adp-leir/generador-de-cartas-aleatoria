import "bootstrap";
import "./style.css";

window.onload = function() {
  //write your code here
  let numbercard = [ '1', '2', '3', '4','5','6','7','8','9','10','J','Q','K']
  let palo = ['♦', '♥', '♠','♣']
  let numeroAleatorio = Math. floor(Math.random() * numbercard.length);
  let paloAleatorio = Math.floor(Math.random() * palo.length);

  let upperIcon = document.querySelector(".upper-icon");
  let numberCard = document.querySelector(".number-card");
  let downIcon = document.querySelector(".down-icon");
  let card = document.querySelector(".card");

  let simbolo = palo[paloAleatorio];
  upperIcon.innerText = simbolo;
  downIcon.innerText = simbolo;

  numberCard.innerText = numbercard[numeroAleatorio];

   card.classList.remove("heart", "diamond", "spade", "club");

   if (simbolo === "♥" || simbolo === "♦") {
    upperIcon.style.color = "red";
    downIcon.style.color = "red";
    numberCard.style.color = "red";
  } else {
    upperIcon.style.color = "black";
    downIcon.style.color = "black";
    numberCard.style.color = "black";
  }

  console.log(card, simbolo);
};
