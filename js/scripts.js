const hidden = document.querySelector(".hidden");
const lines = document.querySelectorAll("span");
document.querySelector(".menu").addEventListener("click", clickHandler)
function clickHandler() {
  hidden.classList.toggle("expose");
  document.querySelector("span:nth-child(1)").classList.toggle("change")
  document.querySelector("span:nth-child(2)").classList.toggle("change")
  document.querySelector("span:nth-child(3)").classList.toggle("change")
}

// (function() {
//   let form = document.querySelector('#contact-form');
//   let emailInput = document.querySelector('#contact-email');
//   let phoneInput = document.querySelector('#contact-phone');
//   let messageInput = document.querySelector('#contact-message');

//   function showErrorMessage(input, message) {
//     let container = input.parentElement;

//     let error = container.querySelector('.error-message');
//     if (error) {
//       container.removeChild(error);
//     }

//     if (message) {
//       let error = document.createElement('div');
//       error.classList.add('error-message');
//       error.innerText = message;
//       container.appendChild(error);
//       return 0;
//     }
//     return 1;
//   }

//   function validateEmail() {
//     let value = emailInput.value;

//     if (!value) {
//       showErrorMessage(emailInput, 'E-mail is a required field.');
//       return false;
//     }

//     if (value.indexOf('@') === -1) {
//       showErrorMessage(emailInput, 'You must enter a valid e-mail address.')
//       return false;
//     }

//     showErrorMessage(emailInput, null);
//     return true;
//   }

//   function validatePhone() {
//     let number = phoneInput.value;

//     if (!number) {
//       showErrorMessage(phoneInput, 'Phone # is a required field.');
//       return false;
//     }

//     let format = /^\(?([0-9]{3})\)?[-]?([0-9]{3})[-]?([0-9]{4})$/;

//     if (!number.match(format)) {
//       showErrorMessage(phoneInput, 'Phone # must use XXX-XXX-XXXX format.')
//       return false;
//     }
//     showErrorMessage(phoneInput, null);
//     return true;
//   }

//   function validateMessage() {
//     let message = messageInput.value;

//     if (!message) {
//       showErrorMessage(messageInput, 'Message is a required field.')
//       return false;
//     }

//     showErrorMessage(messageInput, null);
//     return true;
//   }

//   function validateForm() {
//     let isValidEmail = validateEmail();
//     let isValidPhone = validatePhone();
//     let isValidMessage = validateMessage();
//     return isValidEmail && isValidPhone && isValidMessage;
//   }

//   form.addEventListener('submit', (e) => {
//     e.preventDefault(); //Do not submit to server
//     if (validateForm()) {
//       alert('Thanks!');
//     }
//   });

//   emailInput.addEventListener('input', validateEmail);
//   phoneInput.addEventListener('input', validatePhone);
//   messageInput.addEventListener('input', validateMessage);
// })();
