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
            result.innerHTML += `
            <div class= "elemCard">${allPokeInfo}</div>` //traer el array
        }
    }
    if (result.innerHTML === '') {
        result.innerHTML += `
        <div class="elemCard">Pokémon no encontrado</div>`
    }
}
lupa.addEventListener('click', search)
//form.addEventListener('keyup', search)
//lupa.addEventListener('click', buscar)
//imprimir pokeMarco
//div


//Imprimir imagen gif inicial
document.getElementById("origin").innerHTML = '<img id="gif" src="./images/pokemon-iniciales.gif"/>';
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
               <h2>${dataInfo[i].name}</h2>
               <h3>${dataInfo[i].num}</h3>
               <img class="imgPokemon" src="${dataInfo[i].img}"/>
               <h3>${dataInfo[i].type[0]}</h3>
           </div>
       </div>
       </div>`;
    }
    card.innerHTML = cardDesign;
}
lookPokedex(dataPokedex);
//Boton del menu (pokédex)
document.getElementById("all").addEventListener("click", all);
function all() {
    let originActual = document.getElementById("origin");
    originActual.style.display = "none";
    let lookPokedex = document.getElementById("pokedexKanto");
    lookPokedex.style.display = "block";
}
//Para ordenar alfabéticamente (a-z / z-a)
//const menuPokedex = document.querySelector(".ordenarPokemon");
//selectElement.addEventListener("change", (e) => {
const resultado = '$ { e.target.value }';
//console.log(resultado);
if (resultado === "A-Z") {
    viewAllPokemon(orderPokeAz);
}
if (resultado === "Z-A") {
    viewAllPokemon(orderPokeZa);
} else if (resultado === "All") {
    //       viewAllPokemon(allPokeData);
}
//    return menuPokedex;
//});