let firstN = document.getElementById("firstN");
let secondN = document.getElementById("secondN");
let risultato = document.getElementById("risultatoN");

let bottone = document.getElementById("sommaN");


bottone.addEventListener("click", ()=> /* che è come scrivere function() */ {
let n1 = parseFloat(firstN.value);
let n2 = parseFloat(secondN.value);

let somma = n1 + n2;

risultato.textContent = somma;

});
