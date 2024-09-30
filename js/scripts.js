//array of pokemon objects and their key value pairs
let pokemonRepository = (function() { 
  let pokemonList = [
  { name: "Abomasnow", height: 2.2, types: ["ice", "grass"] },

  { name: "Abra", height: 0.9, types: ["psychic"] },

  { name: "Absol", height: 1.2, types: ["dark"] },

  { name: "Accelgor", height: 0.8, types: ["bug"] },

  { name: "Aerodactyl", height: 1.8, types: ["rock", "flying"] },

  { name: "Aggron", height: 2.1, types: ["steel", "rock"] },

  { name: "Aipom", height: 0.8, types: ["normal"] }];

  
  function getAll() {
    return pokemonList;
  }

  function add( pokemon ) {
    return pokemonList.push( pokemon );
  }

  function showDetails( pokemon ) {
    return console.log( pokemon );
  }

  function customEventListener( element, event ) {
    return element.addEventListener( 'click', event ); 
  }

  function addListItem( pokemon ) {
    //get / create elements
    let mainElement = document.querySelector( 'main' );
    let ul = document.createElement( 'ul' );
    let li = document.createElement( 'li' );
    let btn = document.createElement( 'button' );
    

    let newPokemon = `${ pokemon.name } (${ pokemon.height }) ${ pokemon.types }`;
    btn.classList.add( 'pokemon-btn' );
    btn.innerText = newPokemon;

    mainElement.append( ul );
    ul.append( li );
    li.append( btn );

    customEventListener( btn, () => showDetails( newPokemon ));

    return newPokemon;
  }

  
   return {
    getAll: getAll,
    add: add,
    addListItem: addListItem
  }
})();



pokemonRepository.getAll().forEach( function( pokemon ) {
  pokemonRepository.addListItem( pokemon );
})

console.log( pokemonRepository.getAll() );

