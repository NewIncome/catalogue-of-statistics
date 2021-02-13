import filterItemsReducer from '../../reducers/filterItems';

const item1 = {
  name: 'item1',
  symbol: 'sym1',
  currency: 'USD',
  stockExchange: 'NYSE',
};
const item2 = {
  name: 'item2',
  symbol: 'sym2',
  currency: 'MXP',
  stockExchange: 'NASDAQ',
};

const action = {
  type: 'FILTER_ITEMS',
  payload: {
    items: [item1, item2],
    filter: "",
  },
};

describe('A Filter Reducer', () => {
  test('can show all the elements', () => {
    const response = filterItemsReducer('', action)
    expect(response).toEqual([item1, item2]);
  });

  test('can filter items by a certain currency', () => {
    action.payload.filter = 'currency,USD';
    const response = filterItemsReducer('', action);
    expect(response).toEqual([item1]);
  });

  test('can filter items by a certain stockExchange', () => {
    action.payload.filter = 'stockExchange,NASDAQ';
    const response = filterItemsReducer('', action);
    expect(response).toEqual([item2]);
  });
});
