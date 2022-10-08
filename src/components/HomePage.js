import React, { useEffect, useState } from 'react';
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [param, setSearch] = useState('');
  const handleSearch = (e) => {
    const query = e.target.value.trim();
    setSearch(query);
  };

  return (
    <>
      <form>
        <input type="text" onChange={handleSearch} value={param} placeholder="search country" />
      </form>
      <div className="container_countries">
        {mainCountry.map((country) => (
          <div className="main_card" key={country.id}>
            <h2>{country.name.common}</h2>
            <div className="main-card-container">
              <div className="main_flag">
                <img className="main-flag" src={country.flags.svg} alt="Flag" />
              </div>
              <div className="main_card_text">
                <h3 className="main-capital">
                  Capital City:
                  {country.capital}
                </h3>
                <h3 className="main-area">
                  Area:
                  {' '}
                  {country.area}
                  {' '}
                  Km
                </h3>
                <h3 className="main-population">
                  Population:
                  {country.population}
                </h3>
              </div>
            </div>
          </div>
        ))}
        <Country search={param.toLowerCase()} />
      </div>

    </>
  );
};

export default HomePage;
