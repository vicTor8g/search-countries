const mainModal = document.querySelector('.main-modal');
const searchInput = document.querySelector('.search-input');
const modalContent = document.querySelector('.modal-content');
const searchButton = document.querySelector('.search-button');

const modalSettings = () => {
    searchButton.addEventListener('click', (event) => {
        event.preventDefault();

        const searchCountryData = async () => {
            const inputValue = searchInput.value;

            if (!inputValue) {
                setTimeout(() => {
                    searchInput.classList.add('error');
                    searchButton.classList.add('error');
                }, 100);

                setInterval(() => {
                    searchInput.classList.remove('error');
                    searchButton.classList.remove('error');
                }, 3000)
            } else {
                setTimeout(() => {mainModal.style.display = `block`;}, 2500);

                const nameCountriesURL = `https://restcountries.com/v3.1/name/${inputValue}`;

                const fetchResponse = await fetch(nameCountriesURL);
                const responseInJson = await fetchResponse.json();
    
                const getCountryInfo = () => {
                    let countryInfo = '';
                    countryInfo += `
                        <h1 class="country-modal-name">${responseInJson[0].name.official}</h1>
                        <div class="country-modal-info">
                            <div class="country-modal-div-image">
                                <img class="country-modal-image" src="${responseInJson[0].flags.svg}" />
                            </div>
                            <div class="country-modal-title">
                                <h1 class="country-modal-official">Common Name: <strong>${responseInJson[0].name.common}</strong></h1>
                                <div class="country-modal-territory">
                                    <h2 class="modal-territory-region">Region: <strong>${responseInJson[0].region}</strong></h2>
                                    <h2 class="modal-territory-capital">Capital: <strong>${responseInJson[0].capital}</strong></h2>
                                    <h2 class="modal-territory-subregion">Sub Region: <strong>${responseInJson[0].subregion}</strong></h2>
                                </div>
                                <div class="country-modal-population">
                                    <h2 class="modal-population-value">Population Total: <strong>${responseInJson[0].population}</strong></h2>
                                    <h2 class="modal-population-denomyn">Demonym of ${responseInJson[0].name.common}: <strong>${responseInJson[0].demonyms.eng.m}</strong></h2>
                                </div>
                                <div class="country-modal-bordes">
                                    <h2 class="modal-borders-name">Borders: <strong class="borders-value">${responseInJson[0].borders.map(item => item).join(', ')}</strong></h2>
                                </div>
                            </div>
                        </div>
                    `;
    
                    modalContent.innerHTML = countryInfo;
                }
                getCountryInfo();
            }
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