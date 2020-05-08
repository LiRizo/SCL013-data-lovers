import pokeData from './data/pokemon/pokemon.js';
import { allPoke, orderDataAz, orderDataZa } from './data.js';

//const cardPokedex = document.getElementById("lookNumberPokedex");
const card = document.getElementById("lookPoke");
//const card1 = document.getElementById("numberPoke");
//Búsqueda interna (header) 
//const formulario = document.querySelector('#formulario');
//const lupa = document.querySelector('#lupa');

//const buscar = () => {
//console.log(formulario.value);
//const texto = formulario.value
//}
//Búsqueda interna (header) 
const form = document.querySelector('#form');
const lupa = document.querySelector('#lupa');
const result = document.querySelector('#root');

const search = () => {
    result.innerHTML = '';
    const text = form.value.toLowerCase();
    for (let pokeInfo of allPoke) {
        let name = pokeInfo.name.toLowerCase();
        if (name.indexOf(text) !== -1) {
            result.innerHTML += lookPokedex; //traer el array
        }
    }
    if (result.innerHTML === '') {
        result.innerHTML += `
        <div class="elemCard">Pokémon no encontrado</div>`
    }
}
lupa.addEventListener('click', search)
form.addEventListener('keyup', search)


/*imprimir pokeMarco no funciona ya que se debe hacer todo de un lado o si no no pesca :S
//div
const fondo = document.createElement("div");
const marco = document.createElement("img");

fondo.classList.add = "img-box";
marco.classList.add = "img-box-image";
marco.src =  '<img id="marco1" src="./images/PokebolaMarco.png"/>';

document.getElementById("origin").innerHTML = fondo.appendChild(marco);*/


/*Imprimir imagen gif inicial
document.getElementById("origin").innerHTML = '<img id="gif" src="./images/pokemon-iniciales.gif"/>';*/
//crearElement('div', 'origin', 'gifPoke');
//crearElement('IMG', "gif", "origin", '', '', "./images/pokemon-iniciales.gif");

//Arreglo para llamar a la data de pokémon
const dataPokedex = allPoke(pokeData.pokemon);
const orderPokeAz = orderDataAz(allPoke);
const orderPokeZa = orderDataZa(allPoke);

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

//Para ordenar alfabéticamente (a-z / z-a)
//const menuPokedex = document.querySelector(".ordenarPokemon");
//selectElement.addEventListener("change", (e) => {
const resultado = '$ { e.target.value }';
//console.log(resultado);
if (resultado === "A-Z") {
    lookPokedex(orderPokeAz);
}
if (resultado === "Z-A") {
    lookPokedex(orderPokeZa);
} else if (resultado === "All") {
    //       viewAllPokemon(allPokeData);
}
//    return menuPokedex;
//});

//Boton del menu (Novato)
document.getElementById("queEsPokemon").addEventListener("click", queEsPokemon);

function queEsPokemon() {
    let originActual = document.getElementById("origin");
    originActual.style.display = "none";
    let lookPokedex = document.getElementById("queEsUnPokemon");
    lookPokedex.style.display = "block";
}
document.getElementById("queEsPokedex").addEventListener("click", queEsPokedex);

function queEsPokedex() {
    let originActual = document.getElementById("origin");
    originActual.style.display = "none";
    let lookType = document.getElementById("queEsUnPokedex");
    lookType.style.display = "block";
}

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
//Novato
document.getElementById("buttonNovato").addEventListener("click", buttonNovato);

function buttonNovato() {
    let originActual = document.getElementById("origin");
    originActual.style.display = "none";
    let lookNovato = document.getElementById("novato");
    lookNovato.style.display = "block";
}
document.getElementById("buttonEntrenador").addEventListener("click", buttonEntrenador);

function buttonEntrenador() {
    let originActual = document.getElementById("origin");
    originActual.style.display = "none";
    let lookEntrenador = document.getElementById("entrenador");
    lookEntrenador.style.display = "block";
}
document.getElementById("typePokeBtn").addEventListener("click", typePokeBtn);

function typePokeBtn() {
    let entrenadorActual = document.getElementById("entrenador");
    entrenadorActual.style.display = "none";
    let lookTypePokemon = document.getElementById("typePokemon");
    lookTypePokemon.style.display = "block";
}
document.getElementById("allPokeBtn").addEventListener("click", allPokeBtn);

function allPokeBtn() {
    let entrenadorActual = document.getElementById("entrenador");
    entrenadorActual.style.display = "none";
    let lookPokemon = document.getElementById("pokedexKanto");
    lookPokemon.style.display = "block";
}