const promise = new Promise((resolve, reject) => {
  const canFulfill = Math.random() > 0.5;

  if (canFulfill) {
    resolve('Промис выполнен успешно');
  }

  reject('Ошибка выполнения кода');
});

console.log(promise);
