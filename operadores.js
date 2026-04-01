const idade = 18;
const maiorDeIdade = idade >= 18;
const possuiCNH = true;

//Operador E
const podeDirigir = maiorDeIdade && possuiCNH;
console.log("Pode dirigir? " + podeDirigir);

//Operador OU
const podeViajarSozinho = maiorDeIdade || possuiCNH;
console.log("Pode viajar sozinhos? " + podeViajarSozinho);

//Operador NOT
const precisaDeAcompanhante = !maiorDeIdade;
console.log("Precisa de acompanhante? " + precisaDeAcompanhante);