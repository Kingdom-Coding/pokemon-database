//array of pokemon objects and their key value pairs
/* let pokemonRepository = (function() { */
  let pokemonList = [
  { name: "Abomasnow", height: 2.2, types: ["ice", "grass"] },

  { name: "Abra", height: 0.9, types: ["psychic"] },

  { name: "Absol", height: 1.2, types: ["dark"] },

  { name: "Accelgor", height: 0.8, types: ["bug"] },

  { name: "Aerodactyl", height: 1.8, types: ["rock", "flying"] },

  { name: "Aggron", height: 2.1, types: ["steel", "rock"] },

  { name: "Aipom", height: 0.8, types: ["normal"] }];
  
/*   return {
    getAll: function getAll() {
      return pokemonList;
    },
    add: function add({ pokemon, height }) {
      pokemonList.push( pokemon, height );
    }
  }
})();

pokemonRepository.add();
console.log( pokemonRepository.getAll() ); */

//set global variables to access within the for loop
/* let message = " - Wow, that's big!";

//for loop to update the tallest pokemon
for (i = 0; i < pokemonList.length; i++) {
  let pokemonName = pokemonList[i].name;
  let pokemonHeight = pokemonList[i].height;

  //conditional that writes the tallest pokemon and the message
  if (pokemonList[i].height > 2.15) {
    document.write( `<p>${pokemonName} (height: ${pokemonHeight}) ${message}</p>` );
    console.log( pokemonList );
  //writes the rest of the pokemon
  } else {
    document.write( `<p>${pokemonName} (height: ${pokemonHeight})</p>` );
  }
} */

pokemonList.forEach(function( pokemon ) {
   (pokemon.height > 2.15) ? document.write( `<p>${pokemon.name} (height: ${pokemon.height}) 'Wow, that's big!</p>`) : document.write( `<p>${pokemon.name} ${pokemon.height}</p>` );
   console.log( pokemon );
});

