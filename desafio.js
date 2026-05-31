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
const precoComDesconto = Math.floor(precoInicial - desconto);

console.log(`Além disso, temos 3% de desconto. Então, você irá levar o ${nomeDoProduto} por R$${precoComDesconto}`);

// 3. Declarar preço e quantidade. Calcular o valor total, o valor com 20% de desconto, quantos produtos inteiros se compram com R$ 500,00 e quanto sobra de troco.

const produto = "Caderno";
let precoSecundario = 40;
let quantidade = 60;

const descontoSecundario = 0.20;
const precoComDescontoSecundario = (precoSecundario * descontoSecundario);
const precoAtualizado = precoSecundario - precoComDescontoSecundario;

console.log(`Somente nas lojas americanas, o ${produto} está saindo no preço bruto de ${precoSecundario} reais. Porém, estamos com desconto de 20%, então nosso produto ficará ${precoAtualizado} reais`);


// Quantos produtos inteiros se compra com R$ 500 reais, e quando sobra de troco:

const quinhentosReais = 500;
const quantidadeCadernos = Math.floor(quinhentosReais / precoSecundario);
const troco = quinhentosReais % precoSecundario;

console.log(`Você pode comprar ${quantidadeCadernos} cadernos com apenas 500 reais.`);
console.log(`E o melhor, ainda vai sobrar R$ ${troco} de troco.`);

// 4. Declare estoque e preço e exiba se o produto entra em promoção, se está em falta e se precisa de reposição de produto
