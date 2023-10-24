const inputPesquisa = document.getElementById("pesquisa-nome");
inputPesquisa.addEventListener("input", () => {
    const valorPesquisa = inputPesquisa.value.toLowerCase();
    const cartoesPokemon = document.querySelectorAll(".cartao-pokemon");

    cartoesPokemon.forEach((cartao) => {
        const nomePokemon = cartao.querySelector(".informacoes span:first-child").textContent.toLowerCase();
        if (nomePokemon.includes(valorPesquisa)) {
            cartao.style.display = "flex";
        } else {
            cartao.style.display = "none";
        }
    });
});
