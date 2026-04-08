//Declaração da função com parâmetros
function saudacao(nomeJogador) {
    console.log("Bem vindo ao jogo, " + nomeJogador + "!")
};

saudacao("Khilie");

//Função que recebe um valor, soma 1 e retorna
function subirDeNivel(nivelAtual) {
    return nivelAtual + 1
};

let meuNivel = 10; 

let nivelAtualizado = subirDeNivel(meuNivel);
console.log("Seu nível atual é: " + nivelAtualizado);

//Função que suma 2 números
 function soma(numero1, numero2) {
    return numero1 + numero2
 }

 console.log(soma(5,3));
 
 function verificarPar (numero) {
if (numero % 2 === 0) {
return "O número é par"
} else {
return "O número é ímpar"
}
};
console.log(verificarPar(3));