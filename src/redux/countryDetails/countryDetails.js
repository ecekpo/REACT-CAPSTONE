import { createAsyncThunk } from '@reduxjs/toolkit';

// actions
const COUNTRY_DETAILS = 'countryDetails/country/country/COUNTRY_DETAILS';

// countries RestApi
const dataApi = 'https://restcountries.com/v3.1/name';

// Initial state
const initialState = {
  countryDetails: [],
};

// action Creators
export const fetchCountryDetails = createAsyncThunk(
  COUNTRY_DETAILS,
  async (name, { dispatch }) => {
    const response = await fetch(`${dataApi}/${name}`);
    const data = await response.json();
    const countries = Object.keys(data).map((key) => {
      const country = data[key];
      return {
        id: key,
        ...country,
      };
    });
    dispatch({
      type: COUNTRY_DETAILS,
      payload: countries,
    });
    return countries;
  },
);

const countryDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case `${COUNTRY_DETAILS}/fulfilled`:
      return {
        ...state,
        countryDetails: action.payload,
      };
    default:
      return state;
  }
};

export default countryDetailsReducer;
