import '../../sass/main.scss';

function getFruit(name) {
  const fruits = {
    strawberry: '🍍',
    apple: '🍎',
    banana: '🍌',
  };

  return new Promise(resolve => setTimeout(() => resolve(fruits[name]), 500));
}

async function makeSmoothie() {
  //   console.time('makeSmoothie');
  const strawberry = getFruit('strawberry');
  const banana = getFruit('banana');

  const fruits = await Promise.all([strawberry, banana]);

  console.log(fruits);

  //   console.timeEnd('makeSmoothie');
}

makeSmoothie();
