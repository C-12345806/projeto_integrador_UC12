
document.addEventListener("DOMContentLoaded", () => {

    // Seleciona todos os itens do menu
    const menuItems = document.querySelectorAll(".menu-item");

    // Ações de cada opção
    menuItems.forEach((item) => {

        item.addEventListener("click", (event) => {

            event.preventDefault();

            const page = item.dataset.page;

            switch (page) {

                case "historico":
                    console.log("Abrir Histórico de visitas");
                    alert("Histórico de visitas");
                    break;

                case "configuracoes":
                    console.log("Abrir Configurações");
                    alert("Configurações");
                    break;

                case "ajuda":
                    console.log("Abrir Ajuda");
                    alert("Central de Ajuda");
                    break;

                default:
                    console.log("Página não encontrada");
            }

        });

    });

});
