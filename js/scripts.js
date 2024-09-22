//array of pokemon objects and their key value pairs
let pokemonRepository = (function() {
    let pokemonList = [
      { name: "Abomasnow", height: 2.2, types: ["ice", "grass"] },
  
      { name: "Abra", height: 0.9, types: ["psychic"] },
  
      { name: "Absol", height: 1.2, types: ["dark"] },
  
      { name: "Accelgor", height: 0.8, types: ["bug"] },
  
      { name: "Aerodactyl", height: 1.8, types: ["rock", "flying"] },
  
      { name: "Aggron", height: 2.1, types: ["steel", "rock"] },
  
      { name: "Aipom", height: 0.8, types: ["normal"] },
  ];

  function add( pokemon ) {
    return pokemonList.push( pokemon );
  }

  function getAll() {
    return pokemonList;
  }

  return {
    add: add,
    getAll: getAll
  }
})();

pokemonRepository.getAll().forEach( pokemon => {
  let pokemonName = pokemon.name;
  let pokemonHeight = pokemon.height; 
  let pokemonBlock = document.querySelector( '.pokemon-list' );
  let listItem = document.querySelector( '.list-item' );
  let button = document.createElement('button');

  button.classList.add( 'pokemon-btn' );

  listItem.append( button );
  pokemonBlock.append( listItem );
  buttonContent = button.append( `${pokemonName} (${pokemonHeight})` );
})




