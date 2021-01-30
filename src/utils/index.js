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
  {
    name: 'item3',
    id: 4,
    details: [
      { detail1: 'it4-dt1' },
      { detail2: 'it4-dt2' },
      { detail3: 'it4-dt3' },
    ],
  },
  {
    name: 'item3',
    id: 5,
    details: [
      { detail1: 'it5-dt1' },
      { detail2: 'it5-dt2' },
      { detail3: 'it5-dt3' },
    ],
  },
  {
    name: 'item3',
    id: 6,
    details: [
      { detail1: 'it6-dt1' },
      { detail2: 'it6-dt2' },
      { detail3: 'it6-dt3' },
    ],
  },
  {
    name: 'item3',
    id: 7,
    details: [
      { detail1: 'it7-dt1' },
      { detail2: 'it7-dt2' },
      { detail3: 'it7-dt3' },
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
