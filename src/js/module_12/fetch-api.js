import '../../sass/main.scss';

const pokemonCard = document.querySelector('.js-pokemon-card');
const searchForm = document.querySelector('.js-search-form');
const searchBtn = document.querySelector('.js-search-text');

searchForm.addEventListener('submit', onSearch);

function onSearch() {
  event.preventDefault();

  const pokemonId = searchBtn.value;

  fetchPokemon(pokemonId)
    .then(renderPokemonCard)
    .catch(error => console.log(error));

  searchForm.reset();
}

function fetchPokemon(pokemonId) {
  return fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`).then(response => {
    return response.json();
  });
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

  pokemonCard.innerHTML = markup;
}
