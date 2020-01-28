const loginPage = document.querySelector('.login');
const loginLink = document.querySelector('.signin-link');

const signUpPage = document.querySelector('.signup');
const signUpLink = document.querySelector('.signup-link');

const swapPage = (e) => {
  e.preventDefault();

  loginPage.classList.toggle('hide-page');
  signUpPage.classList.toggle('hide-page');
}

loginLink.addEventListener('click', swapPage);
signUpLink.addEventListener('click', swapPage);
