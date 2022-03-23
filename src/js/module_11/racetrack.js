let horses = ['Secretariat', 'Eclipse', 'West Australian', 'Flying Fox', 'Seabiscuit'];

let raceCounter = 0;

const refs = {
  startBtn: document.querySelector('.js-start-race'),
  winner: document.querySelector('.js-winner'),
  progress: document.querySelector('.js-progress'),
  resultTable: document.querySelector('.js-result-table > tbody'),
};
function getRandomTime(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

refs.startBtn.addEventListener('click', onStart);

function onStart() {
  raceCounter += 1;
  const promises = horses.map(run);

  updateWinnerField('');
  updateProgressField('🚴‍♂️ Заезд начался, ставки не принимаются');
  determineWinner(promises);
  waitForAll(promises);
}

function run(horse) {
  return new Promise(resolve => {
    const time = getRandomTime(2000, 3500);

    setTimeout(() => {
      resolve({ horse, time });
    }, time);
  });
}

function updateProgressField(message) {
  refs.progress.textContent = message;
}

function updateWinnerField(message) {
  refs.winner.textContent = message;
}

function determineWinner(horsesP) {
  Promise.race(horsesP).then(({ horse, time }) => {
    refs.winner.textContent = `💪 Победил ${horse}, финишировал за ${time} времени`;
    updateResultTable({ horse, time, raceCounter });
  });
}

function waitForAll(horsesP) {
  Promise.all(horsesP).then(() => {
    refs.progress.textContent = '❌ Заезд окончен, принимаются ставки';
  });
}

function updateResultTable({ horse, time }) {
  const tr = `<tr><td>${raceCounter}</td><td>${horse}</td><td>${time}</td></tr>`;
  refs.resultTable.insertAdjacentHTML('beforeend', tr);
}
