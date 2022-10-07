import { configureStore } from '@reduxjs/toolkit';
import countriesReducer from '../country/country';
import countryDetailsReducer from '../countryDetails/countryDetails';
import mainCountryReducer from '../mainCountry/mainCountry';

const store = configureStore({
  reducer: {
    countries: countriesReducer,
    countryDetail: countryDetailsReducer,
    mainCountry: mainCountryReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    immutableCheck: { warnAfter: 300 },
    serializableCheck: { warnAfter: 300 },
  }),
});

export default store;
