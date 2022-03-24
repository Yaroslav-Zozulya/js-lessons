import '../../sass/main.scss';

const NOTIFICATION_DELAY = 3000;

const refs = {
  notification: document.querySelector('.js-alert'),
};

refs.notification.addEventListener('click', onNotificationClick);

showNotification();

function onNotificationClick() {
  hideNotification();
}

function showNotification() {
  refs.notification.classList.add('is-visible');

  setTimeout(() => {
    if (refs.notification.classList.contains('is-visible')) {
      hideNotification();
    }
  }, NOTIFICATION_DELAY);
}

function hideNotification() {
  refs.notification.classList.remove('is-visible');
  console.log('close notification');
}
