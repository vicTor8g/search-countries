const allCountriesURL = `https://restcountries.com/v3.1/all`;

const searchButton = document.querySelector('.search-button');
const mainCountries = document.querySelector('.main-countries');

const applicationLogic = () => {
    const getCountriesData = async () => {
        try {
            const fetchResponse = await fetch(allCountriesURL);
            const responseInJson = await fetchResponse.json();

            createCountryDiv(responseInJson);
            console.log(responseInJson);
        } catch (error) {
            console.log(`Error: ${error}`);
        }
    }
    
    const createCountryDiv = (countryData) => {
        let countryElements = '';

        countryData.forEach(data => {
            countryElements += `
                <article class="country">
                    <img src="${data.flags.png}" class="country-img"/>
                    <div class="country-info">
                        <h1 class="country-name">${data.name.common}</h1>
                        <h2 class="country-region">Americas</h2>
                        <h2 class="country-population">323.123.424</h2>
                        <h2 class="country-capital">${data.capital}</h2>
                    </div>
                </article>
            `;
        });

        mainCountries.innerHTML = countryElements;
    }

    getCountriesData();
    createCountryDiv();
}

searchButton.addEventListener('click', applicationLogic);