const mainModal = document.querySelector('.main-modal');
const searchInput = document.querySelector('.search-input');
const modalContent = document.querySelector('.modal-content');
const searchButton = document.querySelector('.search-button');

const modalSettings = () => {
    searchButton.addEventListener('click', (event) => {
        event.preventDefault();
        
        setTimeout(() => {mainModal.style.display = `block`;}, 3000);

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
                        <div class="country-modal-title">
                            <h1 class="country-modal-name">${responseInJson[0].name.common}</h1>
                            <h1 class="country-modal-official">Official Name: <strong>${responseInJson[0].name.official}</strong></h1>
                            <div class="country-modal-territory">
                                <h2 class="modal-territory-capital">Capital: <strong>${responseInJson[0].capital}</strong></h2>
                                <h2 class="modal-territory-region">Region: <strong>${responseInJson[0].region}</strong></h2>
                                <h2 class="modal-territory-subregion">Sub Region: <strong>${responseInJson[0].subregion}</strong></h2>
                            </div>
                            <div class="country-modal-population">
                                <h2 class="modal-population-denomyn">Demonym of ${responseInJson[0].name.common}: <strong>${responseInJson[0].demonyms.eng.m}</strong></h2>
                            </div>
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