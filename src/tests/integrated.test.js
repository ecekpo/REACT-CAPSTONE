import { fetchCountriesFromApi } from '../mocks/api';

beforeEach(() => {
  fetch.resetMocks();
});

it('should display country name', async () => {
  fetch.mockResponse(JSON.stringify([{
    name: {
      common: 'nigeria',
    },
  }]));

  const name = await fetchCountriesFromApi('nigeria');

  expect(name).toEqual([{ name: { common: 'nigeria' } }]);
});
