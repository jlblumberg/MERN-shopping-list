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

  it('displays the items in a list', () => {
    expect(wrapper.find('#shopping-list').exists()).toBe(true);
    expect(wrapper.find('#shopping-list-item').exists()).toBe(true);
  });

  it('has a button for deleting items', () => {
    expect(wrapper.find('#remove-item').first().html()).toContain('remove-btn');
  });

});
