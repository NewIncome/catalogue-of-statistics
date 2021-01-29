const items = [
  {
    name: 'item1',
    details: [
      { detail1: 'it1-dt1' },
      { detail2: 'it1-dt2' },
      { detail3: 'it1-dt3' },
    ],
  },
  {
    name: 'item2',
    details: [
      { detail2: 'it2-dt2' },
      { detail3: 'it2-dt3' },
      { detail1: 'it2-dt1' },
    ],
  },
  {
    name: 'item3',
    details: [
      { detail2: 'it3-dt2' },
      { detail3: 'it3-dt3' },
      { detail1: 'it3-dt1' },
    ],
  },
];

const renderItems = routerProps => {
  console.log('routerProps');
  console.log(routerProps);
};

export default { items, renderItems };
