const { add, subtract, multiply, divide } = require('../src/calculator');

describe('calculator', () => {
  test('add: 두 수를 더한다', () => {
    expect(add(2, 3)).toBe(5);
  });

  test('subtract: 두 수를 뺀다', () => {
    expect(subtract(5, 3)).toBe(2);
  });

  test('multiply: 두 수를 곱한다', () => {
    expect(multiply(4, 3)).toBe(12);
  });

  test('divide: 두 수를 나눈다', () => {
    expect(divide(10, 2)).toBe(5);
  });

  test('divide: 0으로 나누면 에러', () => {
    expect(() => divide(10, 0)).toThrow('0으로 나눌 수 없습니다');
  });
});