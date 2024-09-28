import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

export function showError(message) {
  iziToast.show({
    title: 'Error',
    message: message,
    backgroundColor: '#ef4040',
    titleColor: 'white',
    messageColor: 'white',
    iconColor: 'white',
    iconUrl: './img/error-icon.svg',
    class: 'custom-toast',
    position: 'topRight',
    timeout: 5000,
  });
}
