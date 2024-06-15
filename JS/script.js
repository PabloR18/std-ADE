const valor = document.getElementById('valor');
const buttonMais = document.getElementById('mais');
const buttonMenos = document.getElementById('menos');
const buttonResetar = document.getElementById('resetar');

const mostrarNaTela = () => {
    valor.innerHTML = contador;
};

buttonMais.addEventListener('click', () => {
    contador += 1;
    mostrarNaTela();
});

buttonMenos.addEventListener('click', () => {
    contador -= 1;
    mostrarNaTela();
});

buttonResetar.addEventListener('click', () => {
    contador = 0;
    mostrarNaTela();
});

let contador = 0;



function logar() {
    var username = document.getElementById('login').value;
    var password = document.getElementById('senha').value;

    if (username == "admin" && password == "admin") {
        alert("Login bem-sucedido, Redirecionando....");
        location.href = "home.html"

    } else {
        alert("Login ou Senha incorreto.");
    }
};