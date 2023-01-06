const calcular = document.getElementById('calcular');



function imc () {
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');

    if (nome !== '') {
        alert ('valor preenchido!')
    }
}

calcular.addEventListener('click', imc);