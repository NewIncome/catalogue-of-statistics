import React from 'react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import Detail from '../../components/Detail';

describe('Detail component', () => {
  test('is displayed correctly', () => {
    const tree = renderer.create(<Detail detailName="" />);
    expect(tree.toJSON()).toMatchSnapshot();
  });

  test("has a 'detail' prop", () => {
    const tree = renderer.create(<Detail detailName="" />).root;
    expect(tree.findByType(Detail).props.detail).toBe('');
  });

  test("has a 'detailName' prop", () => {
    const tree = renderer.create(<Detail detailName="test" />).root;
    expect(tree.findByType(Detail).props.detailName).toBe('test');
  });

  test('has an h1 element', () => {
    const tree = renderer.create(<Detail detailName="DitName" />).root;
    expect(tree.findByProps({ className: 'detail-name' }).children).toEqual(['DitName']);
  });

  test('has an p element', () => {
    const tree = renderer.create(<Detail detailName="" />).root;
    expect(tree.findByProps({ className: 'detail-p' }).children).toEqual(['-']);
  });
});
