import { example } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';

console.log(example, data);

const formulario = document.querySelector('#formulario');
const lupa = document.querySelector('#lupa');

const buscar = () => {
    console.log(formulario.value);
    const texto = formulario.value
}

lupa.addEventListener('click', buscar)