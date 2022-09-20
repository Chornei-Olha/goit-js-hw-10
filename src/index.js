import './css/styles.css';

import { fetchCountries } from './js/fetchCountries';
// import renderCountryList from './js/renderCountry';
// import renderCountryInfo from './js/renderCountry';
// import alertWrongName from './js/renderCountry';
// import alertTooManyMatches from './js/renderCountry';

import debounce from 'lodash.debounce';
import Notiflix from 'notiflix';

const DEBOUNCE_DELAY = 300;

const searchBox = document.querySelector('#search-box');
const countryList = document.querySelector('.country-list');
const countryInfo = document.querySelector('.country-info');

searchBox.addEventListener('input', debounce(onSearchCountry, DEBOUNCE_DELAY));

function onSearchCountry(e) {
  e.preventDefault();
  const name = searchBox.value.trim();
  if (name === '') {
    return (countryList.innerHTML = ''), (countryInfo.innerHTML = '');
  }

  fetchCountries(name)
    .then(countries => {
      countryList.innerHTML = '';
      countryInfo.innerHTML = '';
      if (countries.length === 1) {
        countryList.insertAdjacentHTML(
          'beforeend',
          renderCountryList(countries)
        );
        countryInfo.insertAdjacentHTML(
          'beforeend',
          renderCountryInfo(countries)
        );
      } else if (countries.length > 10) {
        alertTooManyMatches();
      } else {
        countryList.insertAdjacentHTML(
          'beforeend',
          renderCountryList(countries)
        );
      }
    })
    .catch(alertWrongName);
}

function renderCountryList(countries) {
  const markup = countries
    .map(({ name, flags }) => {
      return `
                <li class="country-list__item">
                    <img class="country-list__flag" src="${flags.svg}" alt="Flag of ${name.official}" width = 100px>
                    <h2 class="country-list__name">${name.official}</h2>
                </li>
                `;
    })
    .join('');
  return markup;
}

function renderCountryInfo(countries) {
  const markup = countries
    .map(({ capital, population, languages }) => {
      return `
              <ul class="country-info__list">
                  <li class="country-info__item"><p><b>Capital: </b>${capital}</p></li>
                  <li class="country-info__item"><p><b>Population: </b>${population}</p></li>
                  <li class="country-info__item"><p><b>Languages: </b>${Object.values(
                    languages
                  )}</p></li>
              </ul>
              `;
    })
    .join('');
  return markup;
}

function alertTooManyMatches() {
  Notiflix.Notify.info(
    'Too many matches found. Please enter a more specific name.'
  );
}

function alertWrongName() {
  Notiflix.Notify.failure('Oops, there is no country with that name');
}
