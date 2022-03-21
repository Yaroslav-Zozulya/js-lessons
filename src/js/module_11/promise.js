/* Promise синтаксис */

const promise = new Promise((resolve, reject) => {
  const canFulfill = Math.random() > 0.5;

  setTimeout(() => {
    if (canFulfill) {
      resolve('Промис выполнен успешно');
    }

    reject('Ошибка выполнения кода');
  }, 2000);
});

promise.then(
  result => {
    console.log(result);
  },
  error => {
    console.log(error);
  },
);

console.log(promise);

/*
 * Цепочки промисов (chaining)
 * Promise.prototype.catch(error)
 * Promise.prototype.finally()
 */

promise
  .then(result => {
    console.log(result);
    return 5;
  })

  .then(x => {
    console.log(x);
    return 10;
  })

  .then(y => {
    console.log(y);
  })
  .catch(error => {
    console.log(error);
  })
  .finally(() => {
    console.log('Я буду выполнен в любом случае');
  });

/*
 * Промисификация "Синхронных" функций
 */

const makeOrder = dish => {
  const DELAY = 1000;
  return new Promise((resolve, reject) => {
    const passed = Math.random() > 0.5;

    setTimeout(() => {
      if (passed) {
        resolve('Вот ваше блюдо.');
      }
      reject('Извините, закончились продукты');
    }, DELAY);
  });
};

makeOrder('Пирожок').then(onMakeOrderSuccess).catch(onMakeOrderError);

function onMakeOrderSuccess(result) {
  console.log(onMakeOrderSuccess);
  console.log(result);
}

function onMakeOrderError(error) {
  console.log(onMakeOrderError);
  console.log(error);
}

const fetchPokemonById = id => {
  return fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then(r => r.json());
};

function onFetchSuccess(pokemon) {
  console.log(pokemon.forms[0]);
}

function onFetchError(error) {
  console.log(error);
}

fetchPokemonById(1).then(onFetchSuccess).catch(onFetchError);
fetchPokemonById(3).then(onFetchSuccess).catch(onFetchError);
fetchPokemonById(2).then(onFetchSuccess).catch(onFetchError);
