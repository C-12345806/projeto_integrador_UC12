
const telaLogin = document.getElementById("telaLogin");
const telaCadastro = document.getElementById("telaCadastro");

// Abrir cadastro
document.getElementById("linkCadastro").addEventListener("click", function(e) {
    e.preventDefault();
    telaLogin.hidden = true;
    telaCadastro.hidden = false;
});

// Voltar para login
document.getElementById("linkLogin").addEventListener("click", function(e) {
    e.preventDefault();
    telaCadastro.hidden = true;
    telaLogin.hidden = false;
});

// Mostrar ou esconder senha
function mostrar(id) {
    const campo = document.getElementById(id);
    campo.type = campo.type === "password" ? "text" : "password";
}

// Validar cadastro
document.getElementById("formCadastro").addEventListener("submit", function(e) {
    e.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const senha = document.getElementById("senhaCadastro").value;
    const confirmar = document.getElementById("confirmarSenha").value;

    if (nome.length < 3) {
        alert("Digite seu nome completo!");
        return;
    }

    if (senha.length < 8) {
        alert("A senha precisa ter pelo menos 8 caracteres!");
        return;
    }

    if (senha !== confirmar) {
        alert("As senhas não são iguais!");
        return;
    }

    if (!document.getElementById("aceitarTermos").checked) {
        alert("Aceite os termos para continuar!");
        return;
    }

    alert("Cadastro realizado com sucesso!");
});

// Login (validação visual básica)
document.getElementById("formLogin").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Formulário de login preenchido!");
});
