import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCountryDetails } from '../redux/countryDetails/countryDetails';
import Countries from './CountryDetails';

const HomePage = () => {
  const countries = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    if (countries.length === 0) {
      dispatch(fetchCountryDetails());
    }
  }, [countries, dispatch]);

  return (
    <div>
      <Countries />
    </div>
  );
};

export default HomePage;
