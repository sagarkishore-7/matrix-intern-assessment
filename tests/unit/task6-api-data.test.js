import { fetchData } from '../../src/tasks/task6-api-data/ApiDataScreen';

test('fetches and displays API data', async () => {
  const data = await fetchData();
  expect(data).toEqual([{ id: 1, name: 'John' }]);
});