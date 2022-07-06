const button = document.getElementById("botaoInput");

const nomePoké = document.getElementById("nome");

const alturaPoké = document.getElementById("altura");

const pesoPoké = document.getElementById("peso");

const tipoPoke = document.getElementById("tipo")

const search = document.getElementById("searchInput");

const imageDiv = document.getElementById('image');

const imagePoke = document.getElementById("imgPoke");




button.addEventListener("click", function(){
    event.preventDefault();
    const pokemon = search.value;
    
    
    async function getContent() {
        try {
            const response = await fetch('https://pokeapi.co/api/v2/pokemon/' + pokemon);
            const data = await response.json();
            console.log(data);
            // ------ 
            nomePoké.textContent = data.name;
            alturaPoké.textContent = data.height;
            pesoPoké.textContent = data.weight;
            tipoPoke.textContent = data.types[0].type.name;
            imagePoke.src = data.sprites.other.home.front_default;
        } catch (error) {
            console.error(error)
        }
    }
    getContent();
});
