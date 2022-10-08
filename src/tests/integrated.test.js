import { fetchCountriesFromApi } from '../mocks/api';

beforeEach(() => {
  fetch.resetMocks();
});

it('should display country name', async () => {
  fetch.mockResponse(JSON.stringify([{
    name: {
      common: 'Kenya',
    },
  }]));

  const name = await fetchCountriesFromApi('Nigeria');

  expect(name).toEqual([{ name: { common: 'Nigeria' } }]);
});
