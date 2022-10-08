export const fetchmainCountry = (text, id) => ({
  type: 'FETCH_MAIN_COUNTRY',
  text,
  id,
});

export const fetchCountry = (id) => ({
  type: 'FETCH_COUNTRY',
  id,
});

export const fetchCountries = () => ({
  type: 'FETCH_COUNTRIES',
});
