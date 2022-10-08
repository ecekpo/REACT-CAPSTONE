import { fetchmainCountry, fetchCountry, fetchCountries } from '../mocks/actions';

describe('actions', () => {
  it('should have a type of FETCH_MAIN_COUNTRY', () => {
    const text = 'Nigeria';
    const id = 1;
    const expectedAction = {
      type: 'FETCH_MAIN_COUNTRY',
      text: 'Nigeria',
      id: 1,
    };

    const result = fetchmainCountry(text, id);

    expect(result).toEqual(expectedAction);
  });
});

describe('actions', () => {
  it('should have a type of FETCH_COUNTRY', () => {
    const id = 1;
    const expectedAction = {
      type: 'FETCH_COUNTRY',
      id: 1,
    };

    const result = fetchCountry(id);

    expect(result).toEqual(expectedAction);
  });
});

describe('actions', () => {
  it('should have a type of FETCH_COUNTRIES', () => {
    const expectedAction = {
      type: 'FETCH_COUNTRIES',
    };

    const result = fetchCountries();

    expect(result).toEqual(expectedAction);
  });
});
