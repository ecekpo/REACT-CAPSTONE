import React from 'react';
import { useSelector } from 'react-redux';

const Countries = () => {
  const countries = useSelector((state) => state);

  return (
    <div>
      { countries.map((country) => (
        <div key={country.id}>
          <h2>{country.name.common}</h2>
          <img src={country.flags.svg} alt="Flag" />
          <h3>{country.capital}</h3>
          <h3>{country.area}</h3>
          <h3>country.population</h3>
          <h3>{country.continents}</h3>
          <h3>{country.region}</h3>
          <h3>{country.subregion}</h3>
          <h3>{country.timezones}</h3>
          <h3>country.name.official</h3>
          <h3>{country.startOfWeek}</h3>
          <h3>{country.googleMaps}</h3>
          <h3>country.borders</h3>
          <h3>country.languages.area</h3>
        </div>
      ))}
    </div>
  );
};

export default Countries;
