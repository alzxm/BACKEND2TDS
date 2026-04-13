//Lista ordenada de valores
const frutas = ["Maçã", "Banana", "Uva", "Manga"];
//Índice =         0       1         2      3

console.log(frutas[0]);
console.log(frutas[3]);
//console.log(frutas.length) //Faz a contagem dos itens do array

frutas[1] = "Morango";
console.log(frutas);

frutas.push("Maçã");
frutas.unshift("Abacaxi")
console.log(frutas);

frutas[1] = "Ameixa";
console.log(frutas); //muda a posição ameixa por maçã

frutas[4] = "Caju"; // muda a fruta 4 por caju 
console.log(frutas);