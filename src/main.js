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

const card = document.getElementById("lookPoke");

//Arreglo para llamar a la data de pokémon
const dataPokedex = allPoke(pokeData.pokemon);
const orderPokeAz = orderDataAz(dataPokedex);
const orderPokeZa = orderDataZa(dataPokedex);
const orderPokeNumDes = orderDataNumDes(dataPokedex);

//Para mostrar imagen del tipo en la tarjeta
const typeImgCard = (dataInfo) => {
    let imgEachPokeType = '';
    dataInfo.forEach((typesPokemon) => {
        imgEachPokeType += `<img src="./images/Type/${typesPokemon}.png" class="pokeCardType" alt="types"/>`;
    });
    return imgEachPokeType;
};
//Muestra tarjetas de pokémon en pantalla
function lookPokedex(dataInfo) {
    let cardDesign = "";
    for (let i = 0; i < dataInfo.length; i++) {
        cardDesign += `
        <div class="elemCard">
        <div id='pokemon${dataInfo[i].id}' class="card${dataInfo[i].type}">
           <div class='pokeProperty'>
               <img class="imgPokemon" src="${dataInfo[i].img}"/>
               <h2>${dataInfo[i].name}</h2>
               <h3># ${dataInfo[i].num}</h3>
               <h3>${typeImgCard(dataInfo[i].type)}</h3>
           </div>
       </div>
       </div>`;
    }
    card.innerHTML = cardDesign;
    lookModal(dataInfo);
}
lookPokedex(dataPokedex);

//Para ordenar alfabéticamente (a-z / z-a)
const menuPokedex = document.querySelector("#orderMenu");
menuPokedex.addEventListener("change", (dataInfo) => {
    const resultOrder = `${dataInfo.target.value}`;
    if (resultOrder === "az") {
        lookPokedex(orderPokeAz);
    }
    if (resultOrder === "za") {
        lookPokedex(orderPokeZa);
    }
    if (resultOrder === "151-0") {
        lookPokedex(orderPokeNumDes);
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

//Filtrar por tipo general y por tipo individual

const selectorPokeType = document.querySelector("#pokemonTypes");
selectorPokeType.addEventListener("change", () => {
    let pokemonFilterType = selectorPokeType.value;
    //console.log("1", pokemonFilterType);
    if (pokemonFilterType === "allType") {
        lookPokedex(dataPokedex);
    } else {
        let resultType = filterPokemonType(dataPokedex, pokemonFilterType);
        lookPokedex(resultType);
    }
});

const cardType = document.getElementById("lookPokeType");

//Para mostrar imagen del tipo en la tarjeta
const typeImg = (dataInfo) => {
    let imgEachPokeType = '';
    dataInfo.forEach((typesPokemon) => {
        imgEachPokeType += `<img src="./images/Type/${typesPokemon}.png" class="pokeCardType" alt="weaknesses"/>`;
    });
    return imgEachPokeType;
};

function lookPokedexType(dataInfo) {
    let cardDesignType = "";
    for (let i = 0; i < dataInfo.length; i++) {
        cardDesignType += `
        <div class="elemCard">
        <div id='pokemon${dataInfo[i].id}' class="card${dataInfo[i].type[0]}">
           <div class='pokeProperty'>
               <img class="imgPokemon" src="${dataInfo[i].img}"/>
               <h2>${dataInfo[i].name}</h2>
               <h3># ${dataInfo[i].num}</h3>
               <h3>${typeImg(dataInfo[i].type)}</h3>
           </div>
       </div>
       </div>`;
    }
    cardType.innerHTML = cardDesignType;
}
lookPokedexType(dataPokedex);

const pokeTypeWater = document.getElementById("water");
pokeTypeWater.addEventListener('click', () => {
    let resultType = filterPokemonType(dataPokedex, "Water");
    lookPokedexType(resultType);
});

const pokeTypeBug = document.getElementById("bug");
pokeTypeBug.addEventListener('click', () => {
    let resultType = filterPokemonType(dataPokedex, "Bug");
    lookPokedexType(resultType);
});

const pokeTypeDragon = document.getElementById("dragon");
pokeTypeDragon.addEventListener('click', () => {
    let resultType = filterPokemonType(dataPokedex, "Dragon");
    lookPokedexType(resultType);
});

const pokeTypeElectric = document.getElementById("electric");
pokeTypeElectric.addEventListener('click', () => {
    let resultType = filterPokemonType(dataPokedex, "Electric");
    lookPokedexType(resultType);
});

const pokeTypeGhost = document.getElementById("ghost");
pokeTypeGhost.addEventListener('click', () => {
    let resultType = filterPokemonType(dataPokedex, "Ghost");
    lookPokedexType(resultType);
});

const pokeTypeFire = document.getElementById("fire");
pokeTypeFire.addEventListener('click', () => {
    let resultType = filterPokemonType(dataPokedex, "Fire");
    lookPokedexType(resultType);
});

const pokeTypeIce = document.getElementById("ice");
pokeTypeIce.addEventListener('click', () => {
    let resultType = filterPokemonType(dataPokedex, "Ice");
    lookPokedexType(resultType);
});

const pokeTypeFighting = document.getElementById("fighting");
pokeTypeFighting.addEventListener('click', () => {
    let resultType = filterPokemonType(dataPokedex, "Fighting");
    lookPokedexType(resultType);
});

const pokeTypeNormal = document.getElementById("normal");
pokeTypeNormal.addEventListener('click', () => {
    let resultType = filterPokemonType(dataPokedex, "Normal");
    lookPokedexType(resultType);
});

const pokeTypeGrass = document.getElementById("grass");
pokeTypeGrass.addEventListener('click', () => {
    let resultType = filterPokemonType(dataPokedex, "Grass");
    lookPokedexType(resultType);
});

const pokeTypePsychic = document.getElementById("psychic");
pokeTypePsychic.addEventListener('click', () => {
    let resultType = filterPokemonType(dataPokedex, "Psychic");
    lookPokedexType(resultType);
});

const pokeTypeRock = document.getElementById("rock");
pokeTypeRock.addEventListener('click', () => {
    let resultType = filterPokemonType(dataPokedex, "Rock");
    lookPokedexType(resultType);
});

const pokeTypeGround = document.getElementById("ground");
pokeTypeGround.addEventListener('click', () => {
    let resultType = filterPokemonType(dataPokedex, "Ground");
    lookPokedexType(resultType);
});

const pokeTypePoison = document.getElementById("poison");
pokeTypePoison.addEventListener('click', () => {
    let resultType = filterPokemonType(dataPokedex, "Poison");
    lookPokedexType(resultType);
});

const pokeTypeFlying = document.getElementById("flying");
pokeTypeFlying.addEventListener('click', () => {
    let resultType = filterPokemonType(dataPokedex, "Flying");
    lookPokedexType(resultType);
});

//Modal ultra genial
//Imagenes de los tipos de debilidades
const weaknesses = (dataInfo) => {
    let imgEachPokemon = '';
    dataInfo.forEach((weaknessesPokemon) => {
        imgEachPokemon += `<img src="./images/Type/${weaknessesPokemon}.png" class="weakType" alt="weaknesses"/>`;
    });
    return imgEachPokemon;
};

/*const imgEvolPoke = (dataInfo) => {
    let imgEachEvolPoke = '';
    dataInfo.forEach((evolutionPokemon) => {
        imgEachEvolPoke += `<img src="./images/Type/${weaknessesPokemon}.png" class="weakType" alt="weaknesses"/>`;
    });
    return imgEachPokemon;
};*/

/*//Imagenes de los caramelos
  const candy = (dataInfo) => {
    let imgEachCandyPokemon = '';
    dataInfo.forEach((candyPokemon) => {
        imgEachCandyPokemon += `<img src="./images/Candy/${candyPokemon}.png" alt="candy"/>`;
    });
    //return imgEachCandyPokemon;
    let resultCandy = filterPokemonCandy(dataPokedex, imgEachCandyPokemon);
    lookPokedex(resultCandy);
  };*/

function lookModal(dataInfo) {
    let modal = document.getElementById("myModal"); //Modal general html
    let modalContainer = document.getElementById("modalContent"); //Modal cuadrito blanco html
    let imgBtn = document.getElementsByClassName("elemCard"); //imagen que actua como boton. Ingresada en el js
    modal.style.display = "none"; //Para esconder el modal general al cargar la página

    for (let i = 0; i < imgBtn.length; i++) { //recorremos el for de las imagenes que creamos
        let card1 = imgBtn[i]; //guardamos cada imagen en una variable con posición i

        card1.addEventListener('click', () => { //agregamos el evento a la imagen
            //console.log("ok");
            modal.style.display = "block"; //al hacer click traemos el modal general
            modalContainer.style.display = "block";
            modalContainer.innerHTML += `
            <div class="frame">
                <div class="x">
                    <span class="close">&times;</span>
                </div>
                <div  class="modalCharacters">
                    <div class"cardAndInfo">
                        <div class="cardElem2">
                            <h3> # ${dataInfo[i].num}</h3>
                            <img src="${dataInfo[i].img}"/>
                            <h2>${dataInfo[i].name}</h2>
                        </div>
                        <div class="characterInformation">
                            <p>Peso: ${dataInfo[i].weight}</p>
                            <p>Altura: ${dataInfo[i].height}</p>
                            <p>Huevo: ${dataInfo[i].egg}</p>
                        </div>
                    </div>
                    <div class="characterInformation2">
                        <h3>Tipo: ${dataInfo[i].type[0]} ${typeImg(dataInfo[i].type)}</h3>
                        <p>Débil contra: ${weaknesses(dataInfo[i].weaknesses)}</p>
                        <h3>Evolución / Caramelos:</h3>
                        <p>Pre-Evolución: # ${dataInfo[i].prev_evolution ? dataInfo[i].prev_evolution[0].num : ''}  ${dataInfo[i].prev_evolution ? dataInfo[i].prev_evolution[0].name : 'No tiene'}</p>
                        <p>Tipo Caramelo: ${dataInfo[i].candy}</p>
                        <p>Caramelo para Evolucionar: ${dataInfo[i].candy_count}</p>
                        <p>Evolución: # ${dataInfo[i].next_evolution ? dataInfo[i].next_evolution[0].num : ''}  ${dataInfo[i].next_evolution ? dataInfo[i].next_evolution[0].name : 'No tiene'}</p>
                    </div>
                </div>
            </div>`;

            let span = document.getElementsByClassName("close")[0]; // al momento de cerrar, hace este evento/
            span.addEventListener('click', () => { //evento del click en la x
                modal.style.display = "none"; //Escondemos el modal general
                modalContainer.innerHTML = ""; //Limpiamos el modal con la informacion (cuadrito blanco)
            });
        });

        window.onclick = function(event) { //evento para que al hacer click fuera del modal se cierre
            if (event.target == modal) {
                modal.style.display = "none";
                modalContainer.innerHTML = "";
            }
        }
    }
}
//lookModal(dataPokedex);

//boton logo
document.getElementById("LogoP").addEventListener("click", () => {
    document.getElementById("origin").style.display = "block";
    document.getElementById("novatoInfo").style.display = "none";
    document.getElementById("UnPokemonEs").style.display = "none";
    document.getElementById("UnaPokedexEs").style.display = "none";
    document.getElementById("UnTipoDePokemonEs").style.display = "none";
    document.getElementById("entrenador").style.display = "none";
    document.getElementById("pokedexKanto").style.display = "none";
    document.getElementById("pokedexKanto").style.display = "none";
    document.getElementById("typePokemon").style.display = "none";
    document.getElementById("rootType").style.display = "none";
});

document.getElementById("buttonNovato").addEventListener("click", buttonNovato);

function buttonNovato() {
    let originActual = document.getElementById("origin");
    originActual.style.display = "none";
    let lookNovato = document.getElementById("novatoInfo");
    lookNovato.style.display = "block";
    let lookUnPokemonEs = document.getElementById("UnPokemonEs");
    lookUnPokemonEs.style.display = "block";
    let lookUnaPokedexEs = document.getElementById("UnaPokedexEs");
    lookUnaPokedexEs.style.display = "block";
    let lookUnTipoDePokemonEs = document.getElementById("UnTipoDePokemonEs");
    lookUnTipoDePokemonEs.style.display = "block";
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
    let lookrootType = document.getElementById("rootType");
    lookrootType.style.display = "block";
}
//Muestra sección Pokédex Kanto
document.getElementById("allPokeBtn").addEventListener("click", allPokeBtn);

function allPokeBtn() {
    let entrenadorActual = document.getElementById("entrenador");
    entrenadorActual.style.display = "none";
    let lookPokemon = document.getElementById("pokedexKanto");
    lookPokemon.style.display = "block";
}
