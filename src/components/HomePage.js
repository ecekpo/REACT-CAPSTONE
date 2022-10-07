import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Country from './Country';
import { fetchMainCountry } from '../redux/mainCountry/mainCountry';
import '../App.css';
import '../index.css';

const HomePage = () => {
  const { mainCountry } = useSelector((state) => state.mainCountry);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMainCountry());
  }, []);

  return (
    <div className="container_countries">
      {mainCountry.map((country) => (
        <div className="main_card" key={country.id}>
          <h2>{country.name.common}</h2>
          <div className="main_flag">
            <img className="main-flag" src={country.flags.svg} alt="Flag" />
          </div>
          <h3 className="main-capital">
            Capital City:
            {country.capital}
          </h3>
          <h3 className="main-area">
            Area In Kilometres:
            {country.area}
          </h3>
          <h3 className="main-population">
            Population In Millions:
            {country.population}
          </h3>
        </div>
      ))}
      <Country />
    </div>
  );
};

export default HomePage;
