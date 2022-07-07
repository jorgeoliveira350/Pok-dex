const button = document.getElementById("botaoInput");

const nomePoké = document.getElementById("nome");

const alturaPoké = document.getElementById("altura");

const pesoPoké = document.getElementById("peso");

const tipoPoke = document.getElementById("tipo")

const search = document.getElementById("searchInput");

const imageDiv = document.getElementById('image');

const imagePoke = document.getElementById("imgPoke");


async function getPoke(url) {
    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        return (data);
        
       
    } catch (error) {
        console.error(error)
    }
}



button.addEventListener("click", function(){
    event.preventDefault();
    
    
    async function getContent() {
        try {
            const response = await fetch('https://pokeapi.co/api/v2/type/' + $("#selectType").val());
            const data = await response.json();
            console.log(data.pokemon);
            $("#tableHolder").html("");
            for (let index = 0; index < data.pokemon.length; index++) {
                var pokeData = await getPoke(data.pokemon[index].pokemon.url);
                var linha = "<tr data-pokeImage = '"+pokeData.sprites.other.home.front_default+"'>";
                linha += "<td>";
                linha += "<span class='infoPokemon'>"+data.pokemon[index].pokemon.name+"</span>";
                linha += "</td>";
                linha += "<td>";
                linha += "<span class='infoPokemon'>"+pokeData.id+"</span>";
                linha += "</td>";
                linha += "<td>";
                linha += "<span class='infoPokemon'>"+pokeData.height+"</span>";
                linha += "</td>";
                linha += "<td>";
                linha += "<span class='infoPokemon'>"+pokeData.weight+"</span>";
                linha += "</td>";
                linha += "</tr>";
                $("#tableHolder").append(linha);
                

            }
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

$(document).ready(function(){
    async function getTypes() {
        try {
            const response = await fetch('https://pokeapi.co/api/v2/type/');
            const data = await response.json();
            console.log(data.results);
            for (let index = 0; index < data.results.length; index++) {
                $("#selectType").append("<option value='"+data.results[index].name+"'>"+data.results[index].name+"</option>");
                
            }
            
           
        } catch (error) {
            console.error(error)
        }
    }
    getTypes();
    $(document).on("click", "#tableHolder tr", function(e){
        console.log(e);
         $("#imgPoke").attr("src", $(e.currentTarget).attr("data-pokeImage"));
    });
});






