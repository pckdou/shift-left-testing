const { sum } = require('../src/sum');

describe('sum', () => {
  test('배열의 합을 구한다', () => {
    expect(sum([1, 2, 3])).toBe(6);
  });
  test('빈 배열은 0', () => {
    expect(sum([])).toBe(0);
  });
  test('음수도 계산한다', () => {
    expect(sum([-1, 1, -5])).toBe(-5);
  });
  test('배열이 아니면 에러', () => {
    expect(() => sum('abc')).toThrow(TypeError);
  });
});
