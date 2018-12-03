import { createStore } from 'redux'
import cards from './cards';

test('Check turn up a card', () => {
  const fakeState = [{id: 0, img: 9, pair: 1, isUp: false},{id: 1, img: 9, pair: 0, isUp: false}]
  const fakeAction = {type: 'TURN_CARD_UP', id: 0}
  const newState = cards(fakeState,fakeAction)
  expect(newState[0].isUp).toBe(true);
});

test('Check action dummy', () => {
  const fakeState = [{id: 0, img: 9, pair: 1, isUp: false},{id: 1, img: 9, pair: 0, isUp: false}]
  const newState = cards(fakeState, {type:'DUMMY'})
  expect(newState).toEqual(fakeState);
});

test('Check pair 2 cards', () => {
  const fakeState = [{id: 0, img: 9, pair: 1, isUp: false},{id: 1, img: 9, pair: 0, isUp: false}]
  let newState = cards(fakeState,{type: 'TURN_CARD_UP', id: 0})
  newState = cards(newState,{type: 'TURN_CARD_UP', id: 1})
  expect(newState[0].isPaired).toBe(true);
});