const elementHTML = document.querySelector('html');
const darkModeButton = document.querySelector('.header-button');

darkModeButton.addEventListener('click', () => {elementHTML.classList.toggle('dark-mode');});