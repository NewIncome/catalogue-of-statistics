/* eslint-disable import/prefer-default-export */

const items = [
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
];

const getItemDetails = id => {
  const found = items.find(item => item.id === id).details;
  console.log('found');
  console.log(found);

  return [
    { detail: found[0].detail1 },
    { detail: found[1].detail2 },
    { detail: found[2].detail3 },
  ];
};

export { items, getItemDetails };
