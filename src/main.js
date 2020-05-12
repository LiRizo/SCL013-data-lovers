import pokeData from './data/pokemon/pokemon.js';
import { allPoke, orderDataAz, orderDataZa, orderDataNumDes, filterPokeTypeSteel, weaknessFilter, searchPokemon } from './data.js';

//Búsqueda interna (header) 

const lupa = document.getElementById("lupa");
lupa.addEventListener('keydown', function() {
    if (event.which === 15 || event.keycode === 15 || event.key === "Enter") {
        event.preventDefault();
        const busqueda = lupa.value;
        const namePokemon = busqueda.charAt(0).toUpperCase() + busqueda.slice(1).toLowerCase();
        let pickPokemon = searchPokemon(dataPokedex, namePokemon);
        lookPokedex(pickPokemon);
    }
});


const card = document.getElementById("lookPoke");

//Arreglo para llamar a la data de pokémon
const dataPokedex = allPoke(pokeData.pokemon);
const orderPokeAz = orderDataAz(allPoke);
const orderPokeZa = orderDataZa(allPoke);
const orderPokeNumDes = orderDataNumDes(allPoke);


//Muestra tarjetas de pokémon en pantalla
function lookPokedex(dataInfo) {
    let cardDesign = "";
    for (let i = 0; i < dataInfo.length; i++) {
        cardDesign += `
        <div class="elemCard">
        <div id='pokemon${dataInfo[i].id}' class="card${dataInfo[i].type[0]}">
           <div class='pokeProperty'> 
               <img class="imgPokemon" src="${dataInfo[i].img}"/>
               <h2>${dataInfo[i].name}</h2>
               <h3># ${dataInfo[i].num}</h3>
               <h3>${dataInfo[i].type[0]}</h3>
           </div>
       </div>
       </div>`;
    }
    card.innerHTML = cardDesign;
}
lookPokedex(dataPokedex);

lookPokedex(dataPokedex);


//Para ordenar alfabéticamente (a-z / z-a)
const menuPokedex = document.querySelector("#order");
menuPokedex.addEventListener("change", () => {
    const resultado = '$ {event.target.value}';
    if (resultado === "A-Z") {
        lookPokedex(orderPokeAz);
    }
    if (resultado === "Z-A") {
        lookPokedex(orderPokeZa);
    }
    if (resultado === "9-0") {
        lookPokedex(orderPokeNumDes);
    } else if (resultado === "0-9") {
        lookPokedex(dataPokedex);
    }
});

//Para filtrar por debilidad (eliminamos tipo "Normal" por no ser debilidad de ningún pokémon)
const selectorPokeWeakness = document.querySelector("#weakness");
selectorPokeWeakness.addEventListener("change", () => {
    let pokemonWeakness = selectorPokeWeakness.value;
    if (pokemonWeakness === "weakness") {
        lookPokedex(dataPokedex);
    } else {
        let result = weaknessFilter(dataPokedex, pokemonWeakness);
        lookPokedex(result);
    }
});

//Filtrar por tipo
const selectorPokeTypeSteel = document.querySelector("#pokeType");
selectorPokeTypeSteel.addEventListener('click', () => {
    let pokemonType = selectorPokeTypeSteel.value;
    if (pokemonType === "Steel") {
        let result = filterPokeTypeSteel(dataPokedex, pokemonType);
        lookPokedex(result);
    }
});

//Boton del menu (Entrenador)
document.getElementById("allPokemonMenu").addEventListener("click", allPokemonMenu);

function allPokemonMenu() {
    let originActual = document.getElementById("origin");
    originActual.style.display = "none";
    let lookPokedex = document.getElementById("pokedexKanto");
    lookPokedex.style.display = "block";
}
document.getElementById("typeMenu").addEventListener("click", typeMenu);

function typeMenu() {
    let originActual = document.getElementById("origin");
    originActual.style.display = "none";
    let lookType = document.getElementById("typePokemon");
    lookType.style.display = "block";
}
//Parte de los botones 
//Muestra sección Novato

document.getElementById("buttonNovato").addEventListener("click", buttonNovato);

function buttonNovato() {
    let originActual = document.getElementById("origin");
    originActual.style.display = "none";
    let lookNovato = document.getElementById("novato");
    lookNovato.style.display = "block";
}

let mostrarNovato = () => {
    document.getElementById("origin").style.display = "none";
    document.getElementById("queEsUnPokemon").style.display = "";
    document.getElementById("queEsUnPokedex").style.display = "";
    document.getElementById("queEsUnTipoDePokemon").style.display = "";
};
document.getElementById("buttonNovato").addEventListener("click", mostrarNovato);


//Muestra sección Entrenador
document.getElementById("buttonEntrenador").addEventListener("click", buttonEntrenador);

function buttonEntrenador() {
    let originActual = document.getElementById("origin");
    originActual.style.display = "none";
    let lookEntrenador = document.getElementById("entrenador");
    lookEntrenador.style.display = "block";
}

//Muestra sección Tipos de Pokémon
document.getElementById("typePokeBtn").addEventListener("click", typePokeBtn);

function typePokeBtn() {
    let entrenadorActual = document.getElementById("entrenador");
    entrenadorActual.style.display = "none";
    let lookTypePokemon = document.getElementById("typePokemon");
    lookTypePokemon.style.display = "block";
}
//Muestra sección Pokédex Kanto
document.getElementById("allPokeBtn").addEventListener("click", allPokeBtn);

function allPokeBtn() {
    let entrenadorActual = document.getElementById("entrenador");
    entrenadorActual.style.display = "none";
    let lookPokemon = document.getElementById("pokedexKanto");
    lookPokemon.style.display = "block";
}