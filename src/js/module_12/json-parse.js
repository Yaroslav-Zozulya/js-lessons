import '../../sass/main.scss';
const validJSON = '{ "name": "Yaroslav", "age": 30 }';
const invalidJSON = '{ Привет это борода! }';

try {
  console.log(JSON.parse(invalidJSON));
} catch (error) {
  if (error.name === 'SyntaxError') {
    console.log('Ошибка синтаксиса JSoN');
  }
}

console.log('after try...catch');
