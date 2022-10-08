import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { fetchCountryDetails } from '../redux/countryDetails/countryDetails';
import '../App';
import '../index.css';

const CountryDetails = () => {
  const { countryDetails } = useSelector((state) => state.countryDetail);
  const dispatch = useDispatch();
  const { state } = useLocation();

  useEffect(() => {
    dispatch(fetchCountryDetails(state));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="container_CountryDetails">
      {countryDetails.map((country) => (
        <div className="card_CountryDetails" key={country.id}>
          <div className="details_top">
            <h2>{country.name.common}</h2>
            <img className="flag" src={country.flags.svg} alt="Flag" />
          </div>
          <h3 className="capital">
            Capital City:
            {country.capital}
          </h3>
          <h3 className="area">
            Area In Kilometres:
            {country.area}
          </h3>
          <h3 className="population">
            Population In Millions:
            {country.population}
          </h3>
        </div>
      ))}
    </div>
  );
};

export default CountryDetails;
