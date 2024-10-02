//array of pokemon objects and their key value pairs
let pokemonRepository = (function() { 
  let pokemonList = [];
  let pokemonUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150&offset=150';

  //get all pokemon from the pokemonList array
  function getAll() { 
    return pokemonList;
  }

  //add pokemon to the pokemonList array
  function add( pokemon ) { 
    return pokemonList.push( pokemon );
  }

  //console.log the pokemon's details
  function showDetails( pokemon ) { 
    return loadDetails( pokemon ).then(function() {
      console.log( pokemon ); 
    })
  }

  //customEventListener
  function customEventListener( element, event ) {  
    return element.addEventListener( 'click', event ); 
  }

  //creates structured elements to display the pokemon from pokemonList in a grid of buttons
  function addListItem( pokemon ) {
    let mainElement = document.querySelector( 'main' );//get / create elements
    let ul = document.createElement( 'ul' );
    let li = document.createElement( 'li' );
    let btn = document.createElement( 'button' );
    
    let newPokemon = pokemon.name;
    btn.classList.add( 'pokemon-btn' );
    btn.innerText = newPokemon;
    mainElement.append( ul ); //append elements
    ul.append( li );
    li.append( btn );
    customEventListener( btn, () => showDetails( pokemon ));//eventListener for displaying the pokemon details
    return newPokemon;//returns the string of the newPokemon & it's details added
  }

  //shows the loading message
  function showLoadingMessage( message ) {
    let mainElement = document.querySelector( 'main' );
    let p = document.createElement( 'p' );

    p.classList.add( 'loading-message' );
    p.innerHTML = message;

    mainElement.append( p );
  }
  //hides the loading message
  function hideLoadingMessage() {
    let loadingMessage = document.querySelector( '.loading-message' );

    loadingMessage.style.display = 'none';
  }

  //loads a list of 150 pokemon from the api and their 2 properties of name and their details
  function loadList() {
    showLoadingMessage( 'please wait' );
    return fetch(pokemonUrl).then( function( response ) {
      hideLoadingMessage();
      return response.json();
      }).then( function( json ) {
        
        json.results.forEach( function( item ) {
          let pokemon = {
            name: item.name,
            detailsUrl: item.url
          };
          add( pokemon );
        });
      });
    };

    //loads the details of the pokemon from the selected pokemon
    function loadDetails( item ) {
    let url = item.detailsUrl;
    return fetch( url ).then( function( response ) {
      hideLoadingMessage();
      return response.json();
    }).then( function( details ) {
      item.imageUrl = details.sprites.front_default,
      item.height = details.height,
      item.types = details.types
    }).catch(function ( e ) {
      console.error( e );
    })
    };

    //returns all the methods so they're available outside of the IIEF
    return { 
    getAll: getAll,
    add: add,
    addListItem: addListItem,
    loadList: loadList,
    loadDetails: loadDetails
  }
})();

//loads 150 pokemon & their data from the api
pokemonRepository.loadList().then( function() {
  //foreach loop to display the pokemon in the DOM and their data
  pokemonRepository.getAll().forEach( function( pokemon ) {
  pokemonRepository.loadDetails( pokemon ).then( function() {
    pokemonRepository.addListItem( pokemon );
  }).catch(function( e ) {
    console.error( e );
  });
  });
});

//logs all the pokemon from the pokemonList in the console
console.log( pokemonRepository.getAll() );
