import '../../sass/main.scss';

/*
 * Метод setTimeout
 */

// const logMessage = () => {
//   console.log('Лог при вызове callback функции через 3 секунды');
// };

// console.log('Лог до вызова setTimeout');

// setTimeout(
//   x => {
//     console.log(x);
//     console.log('Внутри callback для setTimeout');
//   },
//   2000,
//   'test args',
// );

// for (let index = 0; index < 10000; index++) {
//   console.log(index);
// }

/*
 * Очистка setTimeout c clearTimeout(timeoutId)
 */

const logger = time => {
  console.log(`Лог через ${time}ms, потому что не отменили таймаут`);
};

const timerId = setTimeout(logger, 2000, 2000);

console.log(timerId);

const shouldCancelTimer = Math.random() > 0.3;
console.log(shouldCancelTimer);

if (shouldCancelTimer) {
  clearTimeout(timerId);
}
