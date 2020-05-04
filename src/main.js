import pokeData from './data/pokemon/pokemon.js';
import { allPokeData, orderDataAz, orderDataZa } from './data.js';

const card = document.getElementById("viewCardCreate");

//Búsqueda interna (header) 
const form = document.querySelector('#form');
const lupa = document.querySelector('#lupa');
const result = document.querySelector('#root');

const search = () => {
    result.innerHTML = '';

    const text = form.value.toLowerCase();

    for (let pokeInfo of allPokeInfo) {
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
form.addEventListener('keyup', search)

//Imprimir imagen gif inicial

//document.write('<img src=http://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS_czZXhW51UFwTg6ZOk0xclfMXKFpYNtV-J-LEPOe5V-RXrQky&usqp=CAU/>')

//Arreglo para llamar a la data de pokémon
const allPokeInfo = allPokeData(pokeData.pokemon);
const orderPokeAz = orderDataAz(allPokeData);
const orderPokeZa = orderDataZa(allPokeData);

//Muestra tarjetas de pokémon en pantalla
function viewAllData(dataInfo) {
    let cardDesign = "";
    for (let i = 0; i < dataInfo.length; i++) {
        cardDesign += `
        <div class="elemCard">
        <div id='pokemon${dataInfo[i].id}' class="card${dataInfo[i].type[0]}">
           <div class='PokeItems'> 
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

viewAllData(allPokeInfo);

//Para ordenar alfabéticamente (a-z / z-a)
//const menuPokedex = document.querySelector(".ordenarPokemon");
//selectElement.addEventListener("change", (e) => {
const resultado = '$ { e.target.value }';
//console.log(resultado);
if (resultado === "A-Z") {
    viewAllData(orderPokeAz);
}
if (resultado === "Z-A") {
    viewAllData(orderPokeZa);
} else if (resultado === "All") {
    //       viewAllPokemon(allPokeData);
}
//    return menuPokedex;
//});