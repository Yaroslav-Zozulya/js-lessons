import getRefs from './get-refs';

import '../../sass/main.scss';
import API from './api-service';
const refs = getRefs();

refs.searchForm.addEventListener('submit', onSearch);

function onSearch(e) {
  e.preventDefault();

  const pokemonId = refs.searchInput.value;

  API.fetchPokemon(pokemonId)
    .then(renderPokemonCard)
    .catch(onFetchError)
    .finally(() => refs.searchForm.reset());
}

function renderPokemonCard({ abilities, sprites, name, weight, height }) {
  const ability = abilities
    .map(ability => ` <li class="list-group-item">${ability.ability.name}</li>`)
    .join(' ');

  const markup = `<div class="card">
        <div class="card-img-top"><img src="${sprites.front_default}" alt="" /></div>
        <div class="card-body">
          <h2 class="card-title">Имя: ${name}</h2>
          <p class="card-text">Вес:${weight}кг</p>
          <p class="card-text">Рост:${height}м</p>
          <p class="card-text">Умения</p>
          <ul class="list-group">
             ${ability}
          </ul>
        </div>
      </div>`;

  refs.pokemonCard.innerHTML = markup;
}

function onFetchError(error) {
  console.log(error);
  alert(`Всё в говне ${error}`);
}

/* FETCH API */

const URL = 'https://newsapi.org/v2/everything?q=putin';
const options = {
  headers: {
    'X-Api-Key': '2c0c2ef4d79449a7b94dbbfe07d82cd9',
  },
};

fetch('https://newsapi.org/v2/everything?q=putin&apiKey=2c0c2ef4d79449a7b94dbbfe07d82cd9', {
  headers: {
    'X-Api-Key': '2c0c2ef4d79449a7b94dbbfe07d82cd9',
  },
})
  .then(response => response.json())
  .then(response => console.log(response));

fetch(URL, options)
  .then(response => response.json())
  .then(console.log);
