import React from 'react';
import { shallow } from 'enzyme';
import AppNavbar from '../components/AppNavbar';

describe('AppNavbar', () => {
  const wrapper = shallow(<AppNavbar/>);

  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('has a navbar with a github link', () => {
    expect(wrapper.find('#navbar').exists()).toEqual(true);
    expect(wrapper.find('#github-link').prop('href')).toEqual('https://github.com/jlblumberg/MERN-shopping-list');
  });

});