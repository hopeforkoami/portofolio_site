const contactForm = document.querySelector('.contact_form');
const email = document.querySelector('.clientEmail');
const error = document.querySelector('.error_message');
const reg = /^[a-z0-9]+@[a-z0-9-]+\.[a-z0-9-.]+$/;
function validate(e) {
  const emailvalue = email.value;
  if (emailvalue.match(reg)) {
    return true;
  }
  error.style.display = 'block';
  error.innerHTML = 'email should only contain low-case caracters';
  email.style.border = '2px solid red';
  e.preventDefault();
  return false;
}
contactForm.addEventListener('submit', validate);