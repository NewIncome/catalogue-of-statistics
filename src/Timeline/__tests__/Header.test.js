import React from 'react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import Header from '../../components/Header';

describe('Header component', () => {
  test('is displayed correctly', () => {
    const tree = renderer.create(<Header />);
    expect(tree.toJSON()).toMatchSnapshot();
  });

  test("has a 'title' prop", () => {
    const tree = renderer.create(<Header />).root;
    expect(tree.findByType(Header).props.title).toBe('');
  });

  test("has a 'titleInfo' prop", () => {
    const tree = renderer.create(<Header />).root;
    expect(tree.findByType(Header).props.titleInfo).toBe('');
  });

  test('has an image Div', () => {
    const tree = renderer.create(<Header />).root;
    expect(tree.findByProps({ className: 'header-img h-i' }).children).toEqual([]);
  });

  test('has a info Div with 2 text children', () => {
    const tree = renderer.create(<Header title="val1" titleInfo="val2" />).root;
    expect(tree.findByProps({ className: 'header-title' }).children).toEqual(['val1']);
    expect(tree.findByProps({ className: 'header-detail' }).children).toEqual(['val2']);
  });
});
