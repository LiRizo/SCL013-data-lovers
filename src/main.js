import pokeData from './data/pokemon/pokemon.js';
import { allPoke, orderDataAz, orderDataZa, orderDataNumDes, filterPokemonType, searchPokemon, weaknessFilter } from './data.js';

//Búsqueda interna (header) 

const formulario = document.getElementById("formulario");
formulario.addEventListener('keydown', function() {
    if (event.which === 15 || event.keycode === 15 || event.key === "Enter") {
        event.preventDefault();
        const busqueda = formulario.value.toLowerCase();
        const namePokemon = busqueda.toLowerCase();
        let pickPokemon = searchPokemon(dataPokedex, namePokemon);
        lookPokedex(pickPokemon);
    }
});
//lookPokedex(dataPokedex);

/*const formulario = document.querySelector('#formulario');
const lupa = document.querySelector('#lupa');

const filterBySearch = () => {
    const text = formulario.value.toLowerCase();
    for (let pokemonName of dataPokedex) {
        let pokeName = pokemonName.name.toLowerCase();
        if (pokeName.indexOf(text) !== -1) {
            lookPokedex(dataPokedex)
        }
    }
}

formulario.addEventListener('keyup', filterBySearch)
lupa.addEventListener('keyup', filterBySearch)*/

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
const menuPokedex = document.querySelector("#orderMenu");
menuPokedex.addEventListener("change", () => {
    let resultOrder = menuPokedex.value;
    if (resultOrder === "az") {
        lookPokedex(orderPokeAz);
    }
    if (resultOrder === "za") {
        lookPokedex(orderPokeZa);
    }
    if (resultOrder === "9-0") {
        lookPokedex(orderPokeNumDes);
    }
    if (resultOrder == "0-9") {
        lookPokedex(dataPokedex);
    } else if (resultOrder === "All") {
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

const selectorPokeType = document.querySelector("#pokemonTypes");
selectorPokeType.addEventListener("change", () => {
    let pokemonFilterType = selectorPokeType.value;
    if (pokemonFilterType === "allType") {
        lookPokedex(dataPokedex);
    } else {
        let resultType = filterPokemonType(dataPokedex, pokemonFilterType);
        lookPokedex(resultType);
    }
});

/*const pokeTypeSteel = document.getElementById("steel");
pokeTypeSteel.addEventListener('click', () => {
    let pokemonType = pokeTypeSteel.value;
    if (pokemonType === "typePokemonAll") {
        lookPokedex(dataPokedex);
    } else {
        let resultSteel = filterPokeTypeSteel(dataPokedex, pokemonType);
        lookPokedex(resultSteel);
    }
});


const pokeTypeWater = document.getElementById("water");
pokeTypeWater.addEventListener('click', () => {
    let pokemonType = pokeTypeWater.value;
    if (pokemonType === "water") {
        let resultWater = filterPokeTypeWater(dataPokedex, pokemonType);
        lookPokedex(resultWater);
    }
});*/

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