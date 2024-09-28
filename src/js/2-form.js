import '../css/styles.css';

const STORAGE_FEEDBACK_FORM_KEY = 'feedback-form-state';
const form = document.querySelector('.feedback-form');

const formData = {
  email: '',
  message: '',
};

fillFormFields();

form.addEventListener('input', handleInput);
form.addEventListener('submit', handleSubmit);

function fillFormFields() {
  const currentData = JSON.parse(
    localStorage.getItem(STORAGE_FEEDBACK_FORM_KEY)
  );
  if (currentData === null) {
    return;
  }
  for (const key in currentData) {
    form.elements[key].value = currentData[key];
    formData[key] = currentData[key];
  }
}

function handleInput(event) {
  const inputValue = event.target.value;
  const inputName = event.target.name;
  formData[inputName] = inputValue;
  localStorage.setItem(STORAGE_FEEDBACK_FORM_KEY, JSON.stringify(formData));
}

function handleSubmit(event) {
  event.preventDefault();
  if (form.elements.email.value === '' || form.elements.message.value === '') {
    return alert('Fill please all fields');
  }
  console.log(formData);
  for (const key in formData) {
    formData[key] = '';
  }
  localStorage.removeItem(STORAGE_FEEDBACK_FORM_KEY);
  event.currentTarget.reset();
}
