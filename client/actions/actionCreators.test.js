import { turnCardUp } from './actionCreators';

test('Check turn up action', () => {
  const fakeAction = {type: 'TURN_CARD_UP', id: 0}
  expect(turnCardUp(0)).toEqual(fakeAction);
});