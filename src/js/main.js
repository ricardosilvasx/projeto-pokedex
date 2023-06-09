
// Alterar Tema ->->
const botaoAlterarTema = document.getElementById("botao-alterar-tema")

const body = document.querySelector("body")

const ImagemBotaoTrocarTema = document.querySelector(".imagem-botao")

botaoAlterarTema.addEventListener("click", () => {

    const modoEscuroAtivo = body.classList.contains("modo-escuro")
    body.classList.toggle("modo-escuro")


    if (modoEscuroAtivo) {
        ImagemBotaoTrocarTema.setAttribute("src", "./src/imagens/sun.png")
    }
    else {
        ImagemBotaoTrocarTema.setAttribute("src", "./src/imagens/moon.png")
    }


})

// Pesquisa por Nome ->

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


// Tocar os cry´s dos pokemons 


function tocaCryPokemon(IdElementoAudio){
    document.querySelector(IdElementoAudio).play()
}

const crysPokemon = document.querySelectorAll('.botao')

for (let contador = 0; contador < crysPokemon.length; contador++){
    const button = crysPokemon[contador];
    const cry = button.classList[1];
    const idAudio = `#som_${cry}`;


    button.onclick = function () {
        tocaCryPokemon (idAudio);
       }
}