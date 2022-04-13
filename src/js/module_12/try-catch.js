import '../../sass/main.scss';

console.log('In Try');
setTimeout(() => {
  try {
    console.log(test);
  } catch (error) {
    console.dir(error.stack);
  }
}, 2000);

console.log('after try');
