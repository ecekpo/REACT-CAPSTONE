import { createAsyncThunk } from '@reduxjs/toolkit';

// actions
const MAIN_COUNTRY = 'countriesData/country/country/MAIN_COUNTRY';

// countries RestApi
const countryApi = 'https://restcountries.com/v3.1/name/nigeria';

// initial state
const initialState = {
  mainCountry: [],
};

// action creators
export const fetchMainCountry = createAsyncThunk(
  MAIN_COUNTRY,
  async (args, { dispatch }) => {
    const response = await fetch(countryApi);
    const data = await response.json();
    const countries = Object.keys(data).map((key) => {
      const country = data[key];
      return {
        id: key,
        ...country,
      };
    });
    dispatch({
      type: MAIN_COUNTRY,
      payload: countries,
    });
    return countries;
  },
);

const mainCountryReducer = (state = initialState, action) => {
  switch (action.type) {
    case MAIN_COUNTRY:
      return {
        ...state,
        mainCountry: action.payload,
      };
    default:
      return state;
  }
};

export default mainCountryReducer;
