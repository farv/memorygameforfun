import React from 'react'
import Card from './Card'
import { configure, mount } from 'enzyme'

import Adapter from 'enzyme-adapter-react-15'

configure({ adapter: new Adapter() })

test('Check card image down', () => {
  const wrapper = mount(<Card/>)
  expect(wrapper.find('img').length).toBe(1)
})

test('Check card image up', () => {
  const wrapper = mount(<Card isUp={true}/>)
  expect(wrapper.find('img').length).toBe(1)
})

test('Check card click', () => {
  const onClickFunc = jest.fn()
  const wrapper = mount(<Card onClick={onClickFunc}/>)
  wrapper.find('img').simulate('click')
  expect(onClickFunc).toBeCalled()
})