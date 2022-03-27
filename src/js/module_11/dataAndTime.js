import '../../sass/main.scss';

const date1 = Date.now();

setTimeout(() => {
  const date2 = Date.now();
  console.log(date2 - date1);
}, 1000);

// 1 Января 1970 00:00 - начальное время отсчёта (Юникс время)
