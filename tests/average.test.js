const { average } = require('../src/average');

describe('average', () => {
  test('평균을 구한다', () => {
    expect(average([2, 4, 6])).toBe(4);
  });
  test('빈 배열은 0', () => {
    expect(average([])).toBe(0);
  });
  test('소수 평균도 계산한다', () => {
    expect(average([1, 2])).toBe(1.5);
  });
  test('배열이 아니면 에러', () => {
    expect(() => average(null)).toThrow(TypeError);
  });
});
