let listaDeNumerosSorteados = [];
let nuemroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}
function exibirMensagemInicial() {
  exibirTextoNaTela('h1','Jogo do número Secreto');
  exibirTextoNaTela('p','Escolha um número entre 1 e 10');
}


function verificarChute() {
    let chute = document.querySelector('input').value;
    console.log(chute == numeroSecreto);

    if (chute == numeroSecreto) {
      exibirTextoNaTela('h1','Acertou!');
      let palavraTentaviva = tentativas > 1 ? 'tentativas' : 'tentativa';
      let mensagemTentativas = `Você descobriu o número Secreto com ${tentativas} ${palavraTentaviva}!`;
      exibirTextoNaTela('p','Você descobriu o número Secreto com 5 tentativas!');
      exibirTextoNaTela('p',mensagemTentativas);
      document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
      if(chute > numeroSecreto) {
        exibirTextoNaTela('p','O número secreto é menor');
      } else {
        exibirTextoNaTela('p','O número secreto é maior');
      }
      tentativas++;
      limparCampo();
    }
    }

function gerarNumeroAleatorio() {
  let numeroEsolhido = parseInt(Math.random() * nuemroLimite + 1);
  let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

  if(quantidadeDeElementosNaLista == nuemroLimite) {
    listaDeNumerosSorteados = [];
  }
  if (listaDeNumerosSorteados.includes(numeroEsolhido)) {
    return gerarNumeroAleatorio();
  } else {
    listaDeNumerosSorteados.push(numeroEsolhido);
    console.log(listaDeNumerosSorteados);
    return numeroEsolhido;
  }
}

function limparCampo() {
  chute = document.querySelector('input');
  chute.value = '';
}

function reiniciarJogo() {
  numeroSecreto = gerarNumeroAleatorio();
  limparCampo();
  tentativas = 1;
  exibirMensagemInicial();
  document.getElementById('reiniciar').setAttribute('disabled',true)

  exibirTextoNaTela('h1','Jogo do número Secreto');
exibirTextoNaTela('p','Escolha um número entre 1 e 10');

}