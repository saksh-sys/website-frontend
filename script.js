// Get references to DOM elements for sign-up, sign-in, and container
const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

// Add event listeners to sign-up and sign-in buttons to toggle between forms
signUpButton.addEventListener('click', () => {
    container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
    container.classList.remove("right-panel-active");
});

// Get references to login and sign-up forms
const loginForm = document.getElementById('loginForm');
const signupForm = document.getElementById('signupForm');

// Add event listeners to login and sign-up forms to handle form submissions
if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
        // Prevent the default form submission behavior
        e.preventDefault();
        
        // Perform validation and login action here
        // If login is successful, redirect to the home page
        window.location.href = 'index.html';
    });
}

if (signupForm) {
    signupForm.addEventListener('submit', (e) => {
        // Prevent the default form submission behavior
        e.preventDefault();
        
        // Perform validation and signup action here
        // If signup is successful, redirect to the login page
        window.location.href = 'login.html';
    });
}
