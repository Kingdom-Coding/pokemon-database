//array of pokemon objects and their key value pairs
let pokemonRepository = function() {
  let pokemonList = [
  { name: "Bulbasaur", height: 2.04, types: [ 'grass', 'poison'], number: '#0001'},

  { name: "Ivysaur", height: 3.03, types: ['grass', 'poison'], number: '#0002' },

  { name: "Venusaur", height: 6.07, types: ['grass', 'poison'], number: '#0003' },

  { name: "Charmander", height: 2.00, types: ['fire'], number: '#0004' },

  { name: "Charmeleon", height: 3.07, types: ['fire'], number: '#0005' },

  { name: 'Charizard', height: 5.07, types: ['fire', 'flying'], number: '#0006'},

  { name: 'Squirtle', height: 1.08, types: ['water'], number: '#0007'},
  
  { name: 'Wartortle', height: 3.03, types: ['water'], number: '#0008'}

];

  function getAll() {
    return pokemonList;
  }

  function add( pokemon ) {
    pokemonList.push( pokemon );
  }

  return {
    getAll: getAll,
    add: add
  }
}();



pokemonRepository.getAll().forEach( pokemon ) {
  let pokemonName = pokemon.name;
  let pokemonHeight = pokemon.height;

  (pokemonHeight > 2.15) ? `$`
}










