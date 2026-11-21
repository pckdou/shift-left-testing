const { clamp } = require('../src/clamp');

describe('clamp', () => {
  test('범위 안이면 그대로', () => {
    expect(clamp(5, 0, 10)).toBe(5);
  });
  test('최솟값보다 작으면 최솟값', () => {
    expect(clamp(-3, 0, 10)).toBe(0);
  });
  test('최댓값보다 크면 최댓값', () => {
    expect(clamp(15, 0, 10)).toBe(10);
  });
  test('min이 max보다 크면 에러', () => {
    expect(() => clamp(5, 10, 0)).toThrow(RangeError);
  });
});
