const signupForm = document.getElementById('signupForm');
//error elements
const userNameError = document.getElementById('usernameError');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');

// handle form submit
signupForm.addEventListener('submit', (e) => {
//prevent the default submit behavior
e.preventDefault();

   //get form field elements values
const userName = document.getElementById('username').value;
const email = document.getElementById('email').value;
const password = document.getElementById('password').value;

//handles validation
let valid = true;

//clear previous error message
[userNameError, emailError, passwordError].forEach(item => {
    item.textContent =" ";
})

//validate username
//username must be up to three characters
if (userName.length < 3) {
    valid = false;
    userName.textContent = 'username must have at least three charcters';
    userNameError.style.display = 'block';
}

// validate email
const emailPattern = /^(\w[2,50])@{a-z}[2, 20]\.{a-z}[2,8]/gi;
// example_.123@email.com
if (email != emailPattern) {
    valid = false;
    emailError.textContent = 'Please enter a valid email';
    emailError.style.display = 'block';
}

//validate password
if (password.length < 6) {
    valid = false;
    emailError.textContent = 'Password must be upto 6 character long and must contain one Uppercase, a number and a special character';
    emailError.style.display = 'block';
}
})