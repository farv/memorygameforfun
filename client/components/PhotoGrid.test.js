import React from 'react'
import { PhotoGrid } from './PhotoGrid';
import { configure, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-15';

configure({ adapter: new Adapter() });

test('Check game board', () => {
  const wrapper = mount(<PhotoGrid cards={[...Array(16).keys()]}/>)
  expect(wrapper.find('Card').length).toBe(16);
});