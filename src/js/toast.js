import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const ERROR_COLOR = '#ef4040';
const SUCCESS_COLOR = '#59A10D';
const TOAST_TIMEOUT = 3000;
const TOAST_POSITION = 'topRight';

export function showToast(type, message, iconUrl) {
  const options = {
    message,
    timeout: TOAST_TIMEOUT,
    iconUrl,
    iconColor: 'white',
    messageColor: 'white',
    position: TOAST_POSITION,
    close: false,
  };

  if (type === 'success') {
    iziToast.success({ ...options, backgroundColor: SUCCESS_COLOR });
  } else if (type === 'error') {
    iziToast.error({ ...options, backgroundColor: ERROR_COLOR });
  }
}
