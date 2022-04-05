// Seletor de página
const links = document.querySelectorAll("nav ul li a");

function linkAtual(link){
    const url = location.href;
    console.log(link.href)
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