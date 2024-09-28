import '../css/styles.css';
import { showToast } from './toast';

const form = document.querySelector('.form');

const FULFILLED = 'fulfilled';

form.addEventListener('submit', handleSubmit);

function handleSubmit(e) {
  e.preventDefault();

  const delayInput = form.querySelector('input[name="delay"]');
  const stateInput = form.querySelector('input[name="state"]:checked');

  if (!delayInput.value || !stateInput) {
    return;
  }

  const delay = parseInt(delayInput.value, 10);
  const state = stateInput.value;

  makePromise({ delay, shouldResolve: state === FULFILLED })
    .then(({ message, iconUrl }) => showToast('success', message, iconUrl))
    .catch(({ message, iconUrl }) => showToast('error', message, iconUrl));

  form.reset();
}

function makePromise({ delay, shouldResolve = true }) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const result = {
        message: `${
          shouldResolve ? 'Fulfilled' : 'Rejected'
        } promise in ${delay}ms`,
        iconUrl: new URL(
          shouldResolve ? '../img/ok-icon.svg' : '../img/fail-icon.svg',
          import.meta.url
        ).href,
      };
      shouldResolve ? resolve(result) : reject(result);
    }, delay);
  });
}
