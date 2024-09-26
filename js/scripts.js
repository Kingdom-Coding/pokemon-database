//array of pokemon objects and their key value pairs
let pokemonRepository = (function() {
    let pokemonList = [
      { name: "Abomasnow", height: 2.2, types: [ "ice", "grass" ] },
  
      { name: "Abra", height: 0.9, types: [ "psychic" ] },
  
      { name: "Absol", height: 1.2, types: [ "dark" ] },
  
      { name: "Accelgor", height: 0.8, types: [ "bug" ] },
  
      { name: "Aerodactyl", height: 1.8, types: [ "rock", "flying" ] },
  
      { name: "Aggron", height: 2.1, types: [ "steel", "rock" ] },
  
      { name: "Aipom", height: 0.8, types: [ "normal" ] },
  ];

  function add( pokemon ) {
    return pokemonList.push( pokemon );
  }

  function getAll() {
    return pokemonList;
  }

  function showDetails( pokemon ) {
      console.log( pokemon );
    }

  function customEventListener( variable, object ) {
    return variable.addEventListener( 'click', object );
  }

  function addListItem( { name, height, types } ) {
    //local variables
    let pokemonBlock = document.querySelector( '.pokemon-list' );
    let listItem = document.createElement( 'li' );
    let button = document.createElement( 'button' );
    let newPokemon = `${ name } (${ height }) ${ types }`;
    button.append( newPokemon );
    
    //appending the button to the listItem and listItem to the pokemonBlock
    button.classList.add( 'pokemon-btn' );
    listItem.append( button );
    pokemonBlock.append( listItem );
    

    //eventListener to display detailedInfo when button is clicked
    customEventListener( button, showDetails( newPokemon ));
    return newPokemon; 
  }

  

  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    showDetails: showDetails,
  }
})();


pokemonRepository.add({ name: 'pikachu', height: 0.5, types: [ 'lightning' ] });
pokemonRepository.addListItem({ name: 'squirtle', height: 0.5, types: 'water' });

pokemonRepository.getAll().forEach(function( pokemon ) {
  pokemonRepository.addListItem( pokemon );
})





