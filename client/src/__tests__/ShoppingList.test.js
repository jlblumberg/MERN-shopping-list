import React from 'react';
import { shallow } from 'enzyme';
import ShoppingList from '../components/ShoppingList';

describe('ShoppingList', () => {
  const wrapper = shallow(<ShoppingList/>);

  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('has a button for adding items', () => {
    expect(wrapper.find('#add-item').html()).toContain('Add item');
  });

});