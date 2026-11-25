
const filters = document.querySelectorAll(".filter");

const cards = document.querySelectorAll(".attraction-card");

const emptyMessage = document.getElementById("emptyMessage");

const modal = document.getElementById("detailsModal");

const modalTitle = document.getElementById("modalTitle");

const modalDescription = document.getElementById("modalDescription");

const closeModal = document.getElementById("closeModal");

const confirmModal = document.getElementById("confirmModal");


// FILTRAR ATRAÇÕES

filters.forEach(button => {

    button.addEventListener("click", () => {

        // Remover classe active
        filters.forEach(filter => {
            filter.classList.remove("active");
        });

        // Ativar botão clicado
        button.classList.add("active");

        const selectedFilter = button.dataset.filter;

        let visibleCards = 0;

        // Percorrer cartões
        cards.forEach(card => {

            const category = card.dataset.category;

            if (
                selectedFilter === "todos" ||
                selectedFilter === category
            ) {

                card.style.display = "flex";
                visibleCards++;

            } else {

                card.style.display = "none";

            }

        });

        // Mensagem caso não encontre atrações
        emptyMessage.hidden = visibleCards !== 0;

    });

});


// ABRIR DETALHES DA ATRAÇÃO

document.querySelectorAll(".details-btn").forEach(button => {

    button.addEventListener("click", () => {

        const card = button.closest(".attraction-card");

        const name = card.dataset.name;

        const description = card.dataset.description;

        modalTitle.textContent = name;

        modalDescription.textContent = description;

        modal.classList.add("show");

        modal.setAttribute("aria-hidden", "false");

        closeModal.focus();

    });

});


// FECHAR MODAL

function hideModal() {

    modal.classList.remove("show");

    modal.setAttribute("aria-hidden", "true");

}


// Botão fechar
closeModal.addEventListener("click", hideModal);


// Botão entendi
confirmModal.addEventListener("click", hideModal);


// Fechar clicando fora
modal.addEventListener("click", event => {

    if (event.target === modal) {
        hideModal();
    }

});


// Fechar usando ESC
document.addEventListener("keydown", event => {

    if (event.key === "Escape") {
        hideModal();
    }

});
