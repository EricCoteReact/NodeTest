import { add, subtract, multiply } from './code.js';

test('2+2=4', () => {
  let result = add(2, 2);
  expect(result).toBe(4);
});

test('2-2=0', () => {
  let result = subtract(2, 2);
  expect(result).toBe(0);
});

test('2*2=4', () => {
  let result = multiply(2, 2);
  expect(result).toBe(4);
});
