import countriesReducer from '../redux/country/country';
import countryDetailsReducer from '../redux/countryDetails/countryDetails';
import mainCountryReducer from '../redux/mainCountry/mainCountry';

describe('countriesReducer', () => {
  it('should return the initial state', () => {
    const expected = { countriesList: [] };

    const result = countriesReducer(undefined, { countriesList: [] });

    expect(result).toEqual(expected);
  });
});

describe('countryDetailsReducer', () => {
  it('should return the initial state', () => {
    const expected = { countryDetails: [] };

    const result = countryDetailsReducer(undefined, { countryDetails: [] });

    expect(result).toEqual(expected);
  });
});

describe('mainCountryReducer', () => {
  it('should return the initial state', () => {
    const expected = { mainCountry: [] };

    const result = mainCountryReducer(undefined, { mainCountry: [] });

    expect(result).toEqual(expected);
  });
});
