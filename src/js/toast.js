import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const ERROR_COLOR = '#ef4040';
const SUCCESS_COLOR = '#59A10D';
const TOAST_TIMEOUT = 3000;
const TOAST_POSITION = 'topRight';

export function showToast(type, message, iconPath) {
  const color = type === 'success' ? SUCCESS_COLOR : ERROR_COLOR;
  iziToast.show({
    message,
    timeout: TOAST_TIMEOUT,
    iconColor: 'white',
    messageColor: 'white',
    position: TOAST_POSITION,
    close: false,
    iconUrl: new URL(iconPath, import.meta.url).href,
    backgroundColor: color,
  });
}
