
const form = document.getElementById("signupForm");

const successMessage = document.getElementById("successMessage");

// FUNÇÃO PARA MOSTRAR ERROS

function showError(id, message) {
    document.getElementById(id).textContent = message;
}

// MOSTRAR E ESCONDER SENHA

document.querySelectorAll(".toggle-password").forEach(button => {

    button.addEventListener("click", () => {

        const input = document.getElementById(
            button.dataset.target
        );

        const showing = input.type === "text";

        input.type = showing ? "password" : "text";

        button.textContent = showing ? "◉" : "◎";

    });

});

// CADASTRO


form.addEventListener("submit", function(event) {

    event.preventDefault();

    successMessage.textContent = "";

    // LIMPAR ERROS

    [
        "nameError",
        "emailError",
        "passwordError",
        "confirmError"
    ].forEach(id => showError(id, ""));

    // PEGAR VALORES

    const name = document.getElementById("name").value.trim();

    const email = document.getElementById("email").value.trim();

    const password = document.getElementById("password").value;

    const confirmPassword = document.getElementById("confirmPassword").value;

    let valid = true;

    // VALIDAR NOME

    if (name.length < 3) {

        showError(
            "nameError",
            "Digite seu nome corretamente."
        );

        valid = false;
    }

    // VALIDAR E-MAIL

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {

        showError(
            "emailError",
            "Digite um e-mail válido."
        );

        valid = false;
    }

    // VALIDAR SENHA

    if (password.length < 6) {

        showError(
            "passwordError",
            "A senha precisa ter pelo menos 6 caracteres."
        );

        valid = false;
    }

    // CONFIRMAR SENHA

    if (!confirmPassword || confirmPassword !== password) {

        showError(
            "confirmError",
            "As senhas não coincidem."
        );

        valid = false;
    }

    // VERIFICAR SE EXISTEM ERROS

    if (!valid) {
        return;
    }

    // CADASTRO VALIDADO

    successMessage.textContent =
        `Cadastro validado! Seja bem-vindo(a), ${name}.`;

    form.reset();

    document.querySelectorAll(".toggle-password").forEach(button => {
        button.textContent = "◉";
    });

});

// LINK DE LOGIN

document.getElementById("loginLink").addEventListener("click", function(event) {

    event.preventDefault();

    alert("Redirecionar para a página de login!");

});
