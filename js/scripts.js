//array of pokemon objects and their key value pairs
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












//set global variables to access within the for loop
let tallestPokemon = pokemonList[6];
let message = "- Wow, that's big!";

//for loop to update the tallest pokemon
for (i = 0; i < pokemonList.length; i++) {
  let pokemonName = pokemonList[i].name;
  let pokemonHeight = pokemonList[i].height;

  //condition to update the tallest pokemon and write it to the DOM
  if (pokemonHeight > tallestPokemon.height) {
    tallestPokemon = pokemonList[i];
    document.write(
      `<p>${tallestPokemon.name} (height ${tallestPokemon.height}) ${message}</p>`
    );
    console.log(tallestPokemon);
  }

  //writes the names and heights of all the pokemon that are not the tallest
  if (pokemonList[i] !== tallestPokemon) {
    document.write(`<p>${pokemonName} (height ${pokemonHeight})</p>`);
    console.log(pokemonList[i]);
  }
}
