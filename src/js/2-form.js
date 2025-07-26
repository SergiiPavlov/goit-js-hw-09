const STORAGE_KEY = 'feedback-form-state';
const form = document.querySelector('.feedback-form');

let formData = {
  email: '',
  message: '',
};

function populateFormFields() {
  try {
    const savedData = localStorage.getItem(STORAGE_KEY);
    if (savedData) {
      formData = JSON.parse(savedData);
      form.elements.email.value = formData.email || '';
      form.elements.message.value = formData.message || '';
    }
  } catch (error) {
    console.error('Error parsing saved form data:', error);
  }
}

populateFormFields();

form.addEventListener('input', event => {
  const { name, value } = event.target;
  formData[name] = value.trim();
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
});

form.addEventListener('submit', event => {
  event.preventDefault();

  if (!formData.email || !formData.message) {
    alert('Fill please all fields');
    return;
  }

  console.log(formData);

  localStorage.removeItem(STORAGE_KEY);

  form.reset();

  formData = { email: '', message: '' };
});