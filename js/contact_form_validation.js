const contactForm = document.querySelector('.contact_form');
const email = document.querySelector('.clientEmail');
const error = document.querySelector('.error_message');
const reg = /^[a-z0-9]+@[a-z0-9-]+\.[a-z0-9-.]+$/;
function validate(e) {
  const emailvalue = email.value;
  if (emailvalue.match(reg)) {
    error.style.display='none';
    email.style.border = '1px solid #d0d9d4';
    return true;
  }
  error.style.display = 'block';
  error.innerHTML = 'Error : email should be in lower case';
  email.style.border = '2px solid red';
  e.preventDefault();
  return false;
}
contactForm.addEventListener('submit', validate);