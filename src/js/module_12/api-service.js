const BASE_URL = 'https://pokeapi.co';

function fetchPokemon(pokemonId) {
  return fetch(`${BASE_URL}/api/v2/pokemon/${pokemonId}`).then(response => {
    return response.json();
  });
}

export default { fetchPokemon };
