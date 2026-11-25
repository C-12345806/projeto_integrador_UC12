
document.addEventListener("DOMContentLoaded", function() {

    // Pesquisa
    const buscar = document.getElementById("buscar");
    const cards = document.querySelectorAll(".card");
    const mensagem = document.getElementById("mensagem");

    buscar.addEventListener("input", function() {

        let encontrou = false;

        cards.forEach(function(card) {

            let nome = card.getAttribute("data-nome");

            if (nome.includes(buscar.value.toLowerCase())) {
                card.style.display = "flex";
                encontrou = true;
            } else {
                card.style.display = "none";
            }

        });

        if (encontrou) {
            mensagem.textContent = "";
        } else {
            mensagem.textContent = "Nenhuma opção encontrada.";
        }

    });

    // Botão do banner
    const btnBanner = document.getElementById("btnBanner");

    btnBanner.addEventListener("click", function() {
        window.location.href = "atracoes.html";
    });

});
