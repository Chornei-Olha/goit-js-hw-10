// export default function renderCountryList(countries) {
//   const markup = countries
//     .map(({ name, flags }) => {
//       return `
//                 <li class="country-list__item">
//                     <img class="country-list__flag" src="${flags.svg}" alt="Flag of ${name.official}" width = 30px>
//                     <h2 class="country-list__name">${name.official}</h2>
//                 </li>
//                 `;
//     })
//     .join('');
//   return markup;
// }

// export default function renderCountryInfo(countries) {
//   const markup = countries
//     .map(({ capital, population, languages }) => {
//       return `
//               <ul class="country-info__list">
//                   <li class="country-info__item"><p><b>Capital: </b>${capital}</p></li>
//                   <li class="country-info__item"><p><b>Population: </b>${population}</p></li>
//                   <li class="country-info__item"><p><b>Languages: </b>${languages}</p></li>
//               </ul>
//               `;
//     })
//     .join('');
//   return markup;
// }

// export default function alertTooManyMatches() {
//     Notiflix.Notify.info(
//       'Too many matches found. Please enter a more specific name.');
//   }

// export default function alertWrongName() {
//   Notiflix.Notify.failure('Oops, there is no country with that name');
// }
