var titulo = document.querySelector(".title");

var pacienteUm = document.querySelector("#paciente-um");

var pesoTd = pacienteUm.querySelector(".info-peso");
var peso = pesoTd.textContent;

var alturaTd = pacienteUm.querySelector(".info-altura");
var altura = alturaTd.textContent;

var imcCalculado = peso / (altura * altura);

var imcTd = pacienteUm.querySelector(".info-imc");

imc = imcCalculado;

imcTd.textContent = imc;

console.log(peso);
console.log(altura);
console.log(imcCalculado);
console.log(imc);

titulo.textContent = "Aparecida teste novo";