import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { BsArrowRightCircle } from 'react-icons/bs';
import { fetchCountries } from '../redux/country/country';
import '../App.css';
import '../index.css';

const Country = () => {
  const { countriesList } = useSelector((state) => state.countries);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!countriesList.length) {
      dispatch(fetchCountries());
    }
  }, []);
  console.log(countriesList);

  return (
    <div className="container_Country">
      {countriesList.map((country) => (
        <div className="card_Country" key={country.id}>
          <h2>{country.name.common}</h2>
          <Link to={`/details/${country.name.common}`} state={country.name.common}>
            <button type="button">
              <BsArrowRightCircle />
            </button>
          </Link>
          <div className="card_Flag">
            <img src={country.flags.png} alt="Flag" />
          </div>
          <div className="card_Population">
            <h3>{country.population}</h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Country;
