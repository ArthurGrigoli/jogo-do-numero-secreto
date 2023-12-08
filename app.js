let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroSecreto();
console.log (`${numeroSecreto}`);

function exibirTextoNaTela(tag,texto) {
    let campo = document.querySelector (tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, "Brazilian Portuguese Female", {rate:1.2});
}
function exibirMensagemInicial() {

exibirTextoNaTela("h1","Bem vindo ao jogo do número secreto!");
exibirTextoNaTela("p", "Escolha um número de 1 - 10");

}

exibirMensagemInicial();

function gerarNumeroSecreto () {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;
    if (quantidadeDeElementosNaLista == numeroLimite){
        listaDeNumerosSorteados = [];
    }
    if (listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroSecreto();
    } else {
        listaDeNumerosSorteados.push (numeroEscolhido);
        console.log (listaDeNumerosSorteados);
        return numeroEscolhido;
    }
    
}

gerarNumeroSecreto()


let tentativas = 1;


function verificarChute() {
    let chute = document.querySelector ("input").value;
if (chute == numeroSecreto){
    let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
    let mensagemTentativa = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}`;
    exibirTextoNaTela ("h1", "Parabéns!");
    exibirTextoNaTela ("p",mensagemTentativa);
    document.getElementById("reiniciar").removeAttribute("disabled");
} else {
    let mensagemDeComparacaoMenor = `O número secreto é menor que ${chute}`;
    let mensagemDeComparacaoMaior = `O número secreto é maior que ${chute}`;
    if (chute > numeroSecreto) {
        exibirTextoNaTela("p",mensagemDeComparacaoMenor);

    } else {
        exibirTextoNaTela("p",mensagemDeComparacaoMaior);  
    }  tentativas++; limparCampo();
} 
}

function limparCampo(){
    chute = document.querySelector ("input");
    chute.value = "";
}

function reiniciarJogo(){
    document.getElementById("reiniciar").setAttribute("disabled",true);
    numeroSecreto = gerarNumeroSecreto();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();

}