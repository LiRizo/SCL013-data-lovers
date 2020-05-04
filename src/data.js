// Creamos un nuevo array para traer los registros de la data pokémon

export const allPokeData = (dataInfo) => {
    const newPokeArray = [];
    for (let i = 0; i < dataInfo.length; i += 1) {
        newPokeArray.push({
            id: dataInfo[i].id,
            num: dataInfo[i].num,
            name: dataInfo[i].name,
            img: dataInfo[i].img,
            type: dataInfo[i].type,
            height: dataInfo[i].height,
            weight: dataInfo[i].weight,
            candy: dataInfo[i].candy,
            candy_count: dataInfo[i].candy_count,
            egg: dataInfo[i].egg,
            spawn_chance: dataInfo[i].spawn_chance,
            avg_spawns: dataInfo[i].avg_spawns,
            spawn_time: dataInfo[i].spawn_time,
            multipliers: dataInfo[i].multipliers,
            weaknesses: dataInfo[i].weaknesses,
            prev_evolution: dataInfo[i].prev_evolution,
            next_evolution: dataInfo[i].next_evolution,
        });
    }
    return newPokeArray;
};

//Ordena pokemon por alfabeto A-Z
export const orderDataAz = (dataInfo) => {
    const newPokeArray = [];
    for (let i = 0; i < dataInfo.length; i++) {
        newPokeArray.push(dataInfo[i]);
    }
    newPokeArray.sort((a, b) => {
        if (a.name > b.name) {
            return 1;
        }
        if (a.name < b.name) {
            return -1;
        }
        return 0;
    });
    return newPokeArray;
};

//Ordenar alfabéticamente desde Z-A
export const orderDataZa = (dataInfo) => {
    const newPokeArray = [];
    for (let i = 0; i < dataInfo.length; i += 1) {
        newPokeArray.push(dataInfo[i]);
    }
    newPokeArray.sort((a, b) => {
        if (a.name > b.name) {
            return -1;
        }
        if (a.name < b.name) {
            return 1;
        }
        return 0;
    });
    return newPokeArray;
};