const mainModal = document.querySelector('.main-modal');
const searchButton = document.querySelector('.search-button');

const modalSettings = () => {
    searchButton.addEventListener('click', (event) => {
        event.preventDefault();
    
        mainModal.style.display = `block`;
    });

    window.onclick = (event) => {
        if (event.target == mainModal) {
            mainModal.style.display = `none`;
        }
    }
}
modalSettings();