import { add, subtract, multiply } from './code.js';

test('2+2=4', () => {
  let result = add(2, 2);
  expect(result).toBe(4);
});
