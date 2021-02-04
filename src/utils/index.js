/* eslint-disable import/prefer-default-export, import/no-mutable-exports */

let items = [
  {
    name: 'item1',
    id: 1,
    details: [
      { detail1: 'it1-dt1' },
      { detail2: 'it1-dt2' },
      { detail3: 'it1-dt3' },
    ],
  },
  {
    name: 'item2',
    id: 2,
    details: [
      { detail1: 'it2-dt1' },
      { detail2: 'it2-dt2' },
      { detail3: 'it2-dt3' },
    ],
  },
  {
    name: 'item3',
    id: 3,
    details: [
      { detail1: 'it3-dt1' },
      { detail2: 'it3-dt2' },
      { detail3: 'it3-dt3' },
    ],
  },
  {
    name: 'item4',
    id: 4,
    details: [
      { detail1: 'it4-dt1' },
      { detail2: 'it4-dt2' },
      { detail3: 'it4-dt3' },
    ],
  },
  {
    name: 'item5',
    id: 5,
    details: [
      { detail1: 'it5-dt1' },
      { detail2: 'it5-dt2' },
      { detail3: 'it5-dt3' },
    ],
  },
  {
    name: 'item6',
    id: 6,
    details: [
      { detail1: 'it6-dt1' },
      { detail2: 'it6-dt2' },
      { detail3: 'it6-dt3' },
    ],
  },
  {
    name: 'item7',
    id: 7,
    details: [
      { detail1: 'it7-dt1' },
      { detail2: 'it7-dt2' },
      { detail3: 'it7-dt3' },
    ],
  },
];

const getItemDetails = symbol => {
  console.log('symbol');
  console.log(symbol);
  console.log(items);
  const found = items.find(item => item.symbol === symbol);
  console.log('found');
  console.log(found);

  return [found];
};

const getAPIjson = search => fetch(`https://financialmodelingprep.com/api/v3/search?query=${search}&limit=25&apikey=${process.env.REACT_APP_API_KEY}`);

const updateItems = val => {
  items = val;
  console.log('Update items');
  console.log(val);
  console.log(items);
};

export {
  items,
  getItemDetails,
  getAPIjson,
  updateItems,
};
