//SISTEMA DE GERENCIAMENTO DE PERSONAGEM

function calcularPontuacaoTotal(historicoDePontos) {
    const somarRodada = function(acumulador, pontosDaFase) {
        const novaSoma = acumulador + pontosDaFase;
        return novaSoma;
    }; pink ni
    
    const pontuacaoFinal = historicoDePontos.reduce(somarRodada, 0)
    return pontuacaoFinal;
};

function filtrarMissoesConcluidas(listaDeMisssoes) {
    const verificarStatusDaMissao = function(missao) {
        const foiFinalizada = missao.status === "concluída"; // === Igualdade ESTRITA
        return foiFinalizada;
    };0

    const apenasConcluidas = listaDeMisssoes.filter(verificarStatusDaMissao);
    return apenasConcluidas;
};

function atualizarInventario(inventarioAtual, acao, nomeDoItem) {
    let novoInventario;

    if(acao === "pegar") {
        const inventarioComItenNovo = [inventarioAtual, nomeDoItem];
        novoInventario = inventarioComItenNovo;
    } else if (acao === "descartar") //parei aqui
}

const pontosDoJogador = [100, 50, 200, 10]
console.log(pontosDoJogador);