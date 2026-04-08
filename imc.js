//Calcupadora de imc

let nome = "Mukael";
let peso = 200;
let altura = 1.60;

//Função que calcula e retorna o imc
function calcularIMC(peso, altura) {
    let imc = peso / (altura * altura)
};

let resultado = calcularIMC(peso, altura);
console.log(`IMC de ${nome}: ${resultado}`);