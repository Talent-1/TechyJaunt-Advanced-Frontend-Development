const signupForm = document.getElementById('signupForm');
// Error elements
const firstNameError = document.getElementById('firstNameError'); // Corrected ID
const lastNameError = document.getElementById('lastNameError');  // Added ID
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');

// Handle form submit
signupForm.addEventListener('submit', (e) => {
  // Prevent the default submit behavior
  e.preventDefault();

  // Get form field elements values
  const firstName = document.getElementById('firstname').value;
  const lastName = document.getElementById('lastname').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // Handle validation
  let valid = true;

  // Clear previous error messages
  firstNameError.textContent = "";
  lastNameError.textContent = "";  // Clear last name error
  emailError.textContent = "";
  passwordError.textContent = "";

  // Validate first name
  if (firstName.length < 3) {
    valid = false;
    firstNameError.textContent = 'First name must have at least three characters';
    firstNameError.style.display = 'block';
  }

  // Validate last name (optional)
  // You can add validation for last name if needed

  // Validate email
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-z]{2,}$/i;
  if (!email.match(emailPattern)) {
    valid = false;
    emailError.textContent = 'Please enter a valid email';
    emailError.style.display = 'block';
  }

  // Validate password
const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@ #$%^&*()_+{}\[\]:;<>,.?~\\/-]).{6,}$/;
if (!password.match(passwordPattern)) {
    valid = false;
    passwordError.textContent = 'Password must be at least 6 characters long and contain one uppercase letter, one number, and one special character.' ;
    passwordError.style.display = 'block';   
}
if (valid) {
    alert('Submitted Successfully!');
    signupForm.onsubmit();
}
})