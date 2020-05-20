import { allPoke, orderDataAz, orderDataZa, orderDataNumDes, filterPokemonType, searchPokemon, weaknessFilter} from "../src/data.js";
const arrayAll = [
  {
    num: "001",
    name: "Bulbasaur",
    type: "Grass",
    height: "0.71 m",
    weight: "6.9 kg",
    candy: "Bulbasaur Candy",
    candy_count: 25,
    egg: "2 km",
    weaknesses: "Fire"
  }, {
    num: "002",
    name: "Ivysaur",
    type: "Grass",
    height: "0.99 m",
    weight: "13.0 kg",
    candy: "Bulbasaur Candy",
    candy_count: 100,
    egg: "Not in Eggs",
    weaknesses: "Fire"
  }, {
    num: "003",
    name: "Venusaur",
    type: "Grass",
    height: "2.01 m",
    weight: "100.0 kg",
    candy: "Bulbasaur Candy",
    egg: "Not in Eggs",
    weaknesses: "Fire"
  },
];
const arrayViewAll = [
  {
    num: "001",
    name: "Bulbasaur",
    type: "Grass",
    height: "0.71 m",
    weight: "6.9 kg",
    candy: "Bulbasaur Candy",
    candy_count: 25,
    egg: "2 km",
    weaknesses: "Fire"
  }, {
    num: "002",
    name: "Ivysaur",
    type: "Grass",
    height: "0.99 m",
    weight: "13.0 kg",
    candy: "Bulbasaur Candy",
    candy_count: 100,
    egg: "Not in Eggs",
    weaknesses:"Fire"
  }, {
    num: "003",
    name: "Venusaur",
    type: "Grass",
    height: "2.01 m",
    weight: "100.0 kg",
    candy: "Bulbasaur Candy",
    egg: "Not in Eggs",
    weaknesses: "Fire"
  },
];
const arrayDescendant =[
  {
    num: "003",
    name: "Venusaur",
    type: "Grass",
    height: "2.01 m",
    weight: "100.0 kg",
    candy: "Bulbasaur Candy",
    egg: "Not in Eggs",
    weaknesses: "Fire"
  },{
    num: "002",
    name: "Ivysaur",
    type: "Grass",
    height: "0.99 m",
    weight: "13.0 kg",
    candy: "Bulbasaur Candy",
    candy_count: 100,
    egg: "Not in Eggs",
    weaknesses: "Fire"
  },{
    num: "001",
    name: "Bulbasaur",
    type: "Grass",
    height: "0.71 m",
    weight: "6.9 kg",
    candy: "Bulbasaur Candy",
    candy_count: 25,
    egg: "2 km",
    weaknesses: "Fire"
  },
];
const arrayOriginal = [
  { name: "Bulbasaur" },
  { name: "Ivysaur" },
  { name: "Venusaur" },
  { name: "Charmander" },
];
const arrayAz = [
  { name: "Bulbasaur" },
  { name: "Charmander" },
  { name: "Ivysaur" },
  { name: "Venusaur" },
];
const arrayZa = [
  { name: "Venusaur" },
  { name: "Ivysaur" },
  { name: "Charmander" },
  { name: "Bulbasaur" },
];
describe("allPoke", () => {
  test("is a function", () => {
    expect(typeof allPoke).toBe("function");
  });
  test("Mostrar toda la Data`", () => {
    expect(allPoke(arrayAll)).toEqual(arrayViewAll);
  });
});
describe("orderDataAz", () => {
  test("is a function", () => {
    expect(typeof orderDataAz).toBe("function");
  });
  test("Oredenar los nombres del A-Z", () => {
    expect(orderDataAz(arrayOriginal)).toStrictEqual(arrayAz);
  });
});
describe("orderDataZa", () => {
  test("is a function", () => {
    expect(typeof orderDataZa).toBe("function");
  });
  test("Ordenar los nombres del Z-A", () => {
    expect(orderDataZa(arrayOriginal)).toStrictEqual(arrayZa);
  });
});
describe("orderDataNumDes", () => {
  test("is a function", () => {
    expect(typeof orderDataNumDes).toBe("function");
  });
  test("Ordenar los números de poke descendente", () => {
    expect(orderDataNumDes(arrayAll)).toStrictEqual(arrayDescendant);
  });
});
describe("weaknessFilter", () => {
  test("is a function", () => {
    expect(typeof weaknessFilter).toBe("function");
  });
    test("Filter for weakneess", () => {
    expect(weaknessFilter(arrayAll, "Fire")).toEqual([{"num":"003","name": "Venusaur", "type": "Grass", "height": "2.01 m", "weight": "100.0 kg", "candy": "Bulbasaur Candy", "egg": "Not in Eggs", "weaknesses": "Fire"}]);
  });
});
describe("searchPokemon", () => {
  test("is a function", () => {
      expect(typeof searchPokemon).toBe("function");
    });
      test("Buscar por Pokemon", () => {
      expect(searchPokemon(arrayAll, "Venusaur")).toEqual([{"num":"003","name": "Venusaur", "type": "Grass", "height": "2.01 m", "weight": "100.0 kg", "candy": "Bulbasaur Candy", "egg": "Not in Eggs", "weaknesses": "Fire"}]);
    });
});
describe("filterPokemonType", () => {
  test("is a function", () => {
    expect(typeof filterPokemonType).toBe("function");
  });
    test("Filter for type", () => {
    expect(filterPokemonType(arrayAll, "Grass")).toEqual([{"num":"001", "name": "Bulbasaur", "type": "Grass", "height": "0.71 m", "weight": "6.9 kg", "candy": "Bulbasaur Candy", "candy_count": 25, "egg": "2 km", "weaknesses": "Fire"}]);
  });
});
