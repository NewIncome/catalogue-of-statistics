import React from 'react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import ParameterFilter from '../../components/ParameterFilter';

const op = {
  currency: ['c-Op1'],
  stockExchange: ['c-Op1'],
};

describe('ParameterFilter component', () => {
  const tree = renderer.create(<ParameterFilter filter="" options={op} onChange={() => {}} />);

  test('is displayed correctly', () => {
    expect(tree.toJSON()).toMatchSnapshot();
  });

  test("has a 'filter' prop", () => {
    expect(tree.root.findByType(ParameterFilter).props.filter).toBe('');
  });

  test("has an 'options' prop", () => {
    expect(tree.root.findByType(ParameterFilter).props.options).toBe(op);
  });
});
