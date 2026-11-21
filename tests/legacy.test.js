// Characterization test: 리팩토링 전 "현재 동작"을 고정한다.
const { calcShipping } = require('../src/legacy');

describe('calcShipping (legacy characterization)', () => {
  test.each([
    [0.5, 'KR', false, 3000],
    [1, 'KR', false, 3000],
    [3, 'KR', false, 5000],
    [5, 'KR', false, 5000],
    [10, 'KR', false, 8000],
    [0.5, 'US', false, 10000],
    [3, 'US', false, 20000],
    [10, 'US', false, 35000],
    [3, 'KR', true, 4500],
    [10, 'US', true, 31500],
  ])('무게 %p, 국가 %p, 회원 %p => %p', (w, c, m, expected) => {
    expect(calcShipping(w, c, m)).toBeCloseTo(expected, 5);
  });
});