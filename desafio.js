// 1. Declarar 5 variáveis para representar um produto.
let preco = 12;
const nomeDoProduto = "Limpol";
let numeracaoDoLote = 13579;
let validadeDoProduto = "01/07/27";
let quantidadeDoEstoque = 50;

console.log(`Atenção! O produto ${nomeDoProduto} (Lote: ${numeracaoDoLote}, Validade: ${validadeDoProduto}) está disponível por apenas R$${preco}!`);

console.log(`Estoque limitado: apenas ${quantidadeDoEstoque} unidades. Garanta o seu agora!`);

// 2. Crie dua variáveis e exiba uma subtração.

let precoInicial = 12;
const desconto = 0.3
const precoComDesconto = precoInicial - desconto;

console.log(`Além disso, temos 3% de desconto. Então, você irá levar o ${nomeDoProduto} por R$${precoComDesconto}`);

// 3. Declarar preço e quantidade. Calcular o valor total, o valor com 20% de desconto, quantos produtos inteiros se compram com R$ 500,00 e quanto sobra de troco.

const produto = "Caderno";
let precoSecundario = 40;
let quantidade = 60;

// Valor total
const valorTotal = precoSecundario * quantidade;

// Valor com 20% de desconto
const desconto20 = valorTotal * 0.2; 
const valorComDesconto = valorTotal - desconto20;
 
// Quantos produtos cabem em R$ 500
const dinheiroDisponivel = 500;
const produtosInteiros = Math.floor(dinheiroDisponivel / precoSecundario);

// Troco que sobra
const troco = dinheiroDisponivel - (produtosInteiros * precoSecundario);

// Mostrar resultados
console.log(`O valor total da compra é R$ ${valorTotal}`);
console.log(`O valor com 20% de desconto é R$ ${valorComDesconto}`);
console.log(`Com R$ 500, você pode comprar ${produtosInteiros} ${produto}s`);
console.log(`E ainda sobra R$ ${troco} de troco`);
