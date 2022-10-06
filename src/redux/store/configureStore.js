import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import countryDetailsReducer from '../countryDetails/countryDetails';

const store = configureStore({
  reducer: countryDetailsReducer,
  middleware: [thunk],
});

export default store;
