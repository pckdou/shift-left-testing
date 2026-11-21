const { average } = require('../src/average');

describe('average', () => {
  test('평균을 구한다', () => {
    expect(average([2, 4, 6])).toBe(4);
  });
  test('빈 배열은 0', () => {
    expect(average([])).toBe(0);
  });
});
