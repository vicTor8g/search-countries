const filterSelect = document.querySelector('.filter-select');
const mainCountries = document.querySelector('.main-countries');

const applicationLogic = () => {
    let allCountriesURL;
    allCountriesURL = `https://restcountries.com/v3.1/all`;

    filterSelect.addEventListener('click', () => {
        const inputRegionValue = document.querySelector('.region-value-input').value = filterSelect.value;

        if (inputRegionValue == 'all') {
            allCountriesURL = `https://restcountries.com/v3.1/all`;
        } else {
            allCountriesURL = `https://restcountries.com/v3.1/region/${inputRegionValue}`;
        }
    
        getCountriesData(allCountriesURL);
    });

    const getCountriesData = async (allCountriesURL) => {
        const fetchResponse = await fetch(allCountriesURL);
        const responseInJson = await fetchResponse.json();

        createCountryDiv(responseInJson);
    }
    
    const createCountryDiv = (countryData) => {
        let countryElements = '';

        countryData.forEach(data => {
            countryElements += `
                <article class="country">
                    <img src="${data.flags.png}" class="country-img"/>
                    <div class="country-info">
                        <h1 class="country-name">${data.name.common}</h1>
                        <h2 class="country-region"><strong>Region:</strong> ${data.region}</h2>
                        <h2 class="country-population"><strong>Population:</strong> ${data.population}</h2>
                        <h2 class="country-capital"><strong>Capital:</strong> ${data.capital}</h2>
                    </div>
                </article>
            `;
        });

        mainCountries.innerHTML = countryElements;
    }

    getCountriesData(allCountriesURL);
    
    getCountriesData();
    createCountryDiv();
}
applicationLogic();