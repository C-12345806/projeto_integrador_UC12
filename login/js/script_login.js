const formulario = document.querySelector("#formLogin");
const campoSenha = document.querySelector("#senha");
const botaoMostrarSenha = document.querySelector("#mostrarSenha");
const linkEsqueci = document.querySelector("#linkEsqueci");
const linkCadastro = document.querySelector("#linkCadastro");

// Mostra ou esconde a senha
botaoMostrarSenha.addEventListener("click", function () {
    if (campoSenha.type === "password") {
        campoSenha.type = "text";
        botaoMostrarSenha.textContent = "◎";
        botaoMostrarSenha.setAttribute("aria-label", "Esconder senha");
    } else {
        campoSenha.type = "password";
        botaoMostrarSenha.textContent = "◉";
        botaoMostrarSenha.setAttribute("aria-label", "Mostrar senha");
    }
});

// Verifica o formulário quando o botão Entrar é clicado
formulario.addEventListener("submit", function (evento) {
    evento.preventDefault();

    const email = document.querySelector("#email").value.trim();
    const senha = campoSenha.value.trim();

    if (email === "" || senha === "") {
        alert("Preencha o e-mail e a senha.");
    } else {
        alert("Login enviado! A conexão com uma conta ainda precisa ser configurada.");
    }
});

