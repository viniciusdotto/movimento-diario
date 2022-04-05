// Seletor de página
const links = document.querySelectorAll("nav ul li a");

function linkAtual(link){
    const url = location.href;
    const href = link.href;
    if (url.includes(href)){
        link.classList.add("atual");
    }
}

links.forEach(linkAtual)

// Seletor de assinatura
const plano = new URLSearchParams(location.search);

function planoSelecionado(selecionado){
    const elemento = document.getElementById(selecionado);
    if (elemento){
        elemento.checked = true;
    }
}

plano.forEach(planoSelecionado);

// Display de perguntas
const perguntas = document.querySelectorAll(".perguntas div button");

function ativarPergunta(event){
    const pergunta = event.currentTarget;
    controle = pergunta.getAttribute('aria-controls');
    const resposta = document.getElementById(controle);
    resposta.classList.toggle("pergunta-ativa");

    const ativa = resposta.classList.contains("pergunta-ativa");
    pergunta.setAttribute('aria-expanded', ativa);
}

function cliquePergunta(element){
    element.addEventListener('click', ativarPergunta);
}

perguntas.forEach(cliquePergunta);

// Galeria de imagens
const imagem = document.querySelectorAll('.calistenia-img-container div');
const galeria = document.querySelector('.calistenia-img-container');

function trocarImagem(event){
    img = event.currentTarget;
    galeria.prepend(img);
}

function cliqueImagem(item){
    item.addEventListener('click', trocarImagem);
}

imagem.forEach(cliqueImagem);