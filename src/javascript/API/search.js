const mainModal = document.querySelector('.main-modal');
const searchInput = document.querySelector('.search-input');
const modalContent = document.querySelector('.modal-content');
const searchButton = document.querySelector('.search-button');

const modalSettings = () => {
    searchButton.addEventListener('click', (event) => {
        event.preventDefault();
        mainModal.style.display = `block`;

        const searchCountryData = async () => {
            const inputValue = searchInput.value;
            const nameCountriesURL = `https://restcountries.com/v3.1/name/${inputValue}`;

            const fetchResponse = await fetch(nameCountriesURL);
            const responseInJson = await fetchResponse.json();

            const getCountryInfo = () => {
                let countryInfo = '';
                countryInfo += `
                    <div class="country-modal-info">
                        <img class="country-modal-image" src="${responseInJson[0].flags.svg}" />
                        <div class="country-modal-text">
                            <h1 class="country-modal-name">${responseInJson[0].name.common}</h1>
                        </div>
                    </div>
                `;

                modalContent.innerHTML = countryInfo;
            }
            getCountryInfo();
        }

        searchCountryData();
    });

    window.onclick = (event) => {
        if (event.target == mainModal) {
            mainModal.style.display = `none`;
        }
    }
}
modalSettings();