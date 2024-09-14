//array of pokemon objects and their key value pairs
let pokemonRepository = (function() {
  let pokemonList = [];

  return {
    getAll: (function(){
      return pokemonList;
    }),
    add: (function( pokemon ){
      pokemonList.push( pokemon );
    }) 
  }
})();

pokemonRepository.add( 'pikachu' );

pokemonRepository.getAll().forEach( pokemon  => {
  document.write(`<p>${ pokemon }</p>`);
});

console.log( pokemonRepository.getAll());