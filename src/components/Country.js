import React, { useEffect } from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { BsArrowRightCircle } from 'react-icons/bs';
import { fetchCountries } from '../redux/country/country';
import '../App.css';
import '../index.css';
import colorSequency from '../script';

const Country = ({ search }) => {
  const { countriesList } = useSelector((state) => state.countries);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!countriesList.length) {
      dispatch(fetchCountries());
    }
  }, [countriesList, dispatch]);

  const filteredCountries = countriesList
    .filter((country) => country.name.common.toLowerCase().includes(search));

  const sequence = colorSequency(countriesList.length);
  return (
    <div className="container_Country">
      {filteredCountries.map((country, index) => (
        <Link to={`/details/${country.name.common}`} state={country.name.common} key={Math.random()}>
          <div className={`card_Country ${sequence.includes(index + 1) ? 'partern2-helper' : 'partern1-helper'}`} key={Math.random()}>
            <h2>{country.name.common}</h2>
            <button type="button" className="arrow-btn">
              <BsArrowRightCircle className="arrow-svg" />
            </button>

            <div className="card_Flag">
              <img src={country.flags.png} alt="Flag" />
            </div>
            <div className="card_Population">
              <h3>
                Population
                <span className="card-pop">{country.population}</span>
              </h3>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};
Country.propTypes = {
  search: PropTypes.string,
};
Country.defaultProps = {
  search: null,
};

export default Country;
