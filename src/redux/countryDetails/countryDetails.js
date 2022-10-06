import { createAsyncThunk } from '@reduxjs/toolkit';

// Actions
const COUNTRY_DETAILS = 'countryDetails/country/country/COUNTRY_DETAILS';

// Initial state
const initialState = [];

// action Creators
export const fetchCountryDetails = createAsyncThunk(
  COUNTRY_DETAILS, async () => {
    const response = await fetch('https://restcountries.com/v3.1/all');
    const data = await response.json();
    return data;
  },
);

const countryDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case `${COUNTRY_DETAILS}/fulfilled`:
      return action.payload;
    default:
      return state;
  }
};

export default countryDetailsReducer;
