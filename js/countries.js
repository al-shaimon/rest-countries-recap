const loadCountries = () => {
  fetch('https://restcountries.com/v3.1/all')
    .then((res) => res.json())
    .then((data) => displayCountries(data));
};

const displayCountries = (countries) => {
  // console.log(countries);
  const countriesHTML = countries.map((country) => getCountryHTML(country));
  // console.log(countriesHTML);
  const container = document.getElementById('countries');
  container.innerHTML = countriesHTML.join(' ');
};

const getCountryHTML = ({ name, flags, capital, area, region }) => {
  return `
    <div class="country">
      <h2>${name.common}</h2>
      <h3>Capital:${capital ? capital[0] : 'no capital found'}</h3>
      <p>Area: ${area}</p>
      <p>Continent: ${region}</p>
      <img src="${flags.png}">
    </div>
  `;
};

// const getCountryHTML = (country) => {
//   // option 1
//   const {name, flags, capital} = country;
//   return `
//     <div class="country">
//       <h2>${name.common}</h2>
//       <h3>Capital:${capital ? capital[0] : 'no capital found'}</h3><br>
//       <img src="${flags.png}">
//     </div>
//   `;
// };

// Original
// const getCountryHTML = country =>{
//     return `
//         <div class="country">
//             <h2>${country.name.common}</h2>
//             <h3>Capital:${country.capital ? country.capital[0] : 'no capital found'}</h3><br> */}
//             <img src="${country.flags.png}">
//         </div>
//     `
// }

loadCountries();
