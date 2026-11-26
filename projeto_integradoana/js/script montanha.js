
function selecionarData(botao) {
    document.querySelectorAll('.data').forEach(item => {
        item.classList.remove('ativa');
    });

    botao.classList.add('ativa');
}

function selecionarHorario(botao) {
    document.querySelectorAll('.horario').forEach(item => {
        item.classList.remove('ativo');
    });

    botao.classList.add('ativo');
}

function confirmarHorario() {
    const data = document.querySelector('.data.ativa');
    const horario = document.querySelector('.horario.ativo');

    if (!data || !horario) {
        alert("Selecione uma data e um horário!");
        return;
    }

   function confirmarHorario() {
    window.location.href = "confirmacao.html";
}
}

function inicio() {
    alert("Você clicou em Início!");
}

function perfil() {
    alert("Você clicou em Perfil!");
}
