import React from 'react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import Item from '../../components/Item';

describe('Item component', () => {
  test('is displayed correctly', () => {
    const tree = renderer.create(<Item name="" id="" />);
    expect(tree.toJSON()).toMatchSnapshot();
  });

  test("has a 'name' prop", () => {
    const tree = renderer.create(<Item name="" id="" />).root;
    expect(tree.findByType(Item).props.name).toBe('');
  });

  test("has a 'id' prop", () => {
    const tree = renderer.create(<Item name="" id="" />).root;
    expect(tree.findByType(Item).props.id).toBe('');
  });

  test('has a h2 element', () => {
    const tree = renderer.create(<Item name="name" id="" />).root;
    expect(tree.findByProps({ className: 'item-title' }).children).toEqual(['name']);
  });

  test('has a P element', () => {
    const tree = renderer.create(<Item name="" id="123" />).root;
    expect(tree.findByProps({ className: 'item-dit' }).children).toEqual(['123']);
  });
});
