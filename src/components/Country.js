import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { BsArrowRightCircle } from 'react-icons/bs';
import { fetchCountries } from '../redux/countries/countries';

const Country = () => {
  const { countriesList } = useSelector((state) => state.countries);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!countriesList.length) {
      dispatch(fetchCountries());
    }
  }, []);

  return (
    <div>
      {countriesList.map((country) => (
        <div key={country.id}>
          <h2>{country.name.common}</h2>
          <Link to={`/details/${country.name.common}`} state={country.name.common}>
            <button type="button">
              <BsArrowRightCircle />
            </button>
          </Link>
          <img src={country.flags.png} alt="Flag" />

          <h3>{country.population}</h3>
        </div>
      ))}
    </div>
  );
};

export default Country;
