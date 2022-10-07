import { createAsyncThunk } from '@reduxjs/toolkit';

//  actions
const FETCH_COUNTRIES = 'countriesData/cuntry/country/FETCH_COUNTRIES';

// countries RestApi
const api = 'https://restcountries.com/v3.1/all';

// initial state
const initialState = {
  countriesList: [],
};

// actions creators
export const fetchCountries = createAsyncThunk(
  FETCH_COUNTRIES,
  async (args, { dispatch }) => {
    const response = await fetch(api);
    const data = await response.json();
    const countries = Object.keys(data).map((key) => {
      const country = data[key];
      return {
        id: key,
        ...country,
      };
    });
    dispatch({
      type: FETCH_COUNTRIES,
      payload: countries,
    });
    return countries;
  },
);

const countriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COUNTRIES:
      return {
        ...state,
        countriesList: action.payload,
      };

    default:
      return state;
  }
};

export default countriesReducer;
