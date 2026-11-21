const { capitalize } = require('../src/capitalize');

describe('capitalize', () => {
  test('첫 글자를 대문자로 바꾼다', () => {
    expect(capitalize('hello')).toBe('Hello');
  });
  test('빈 문자열은 그대로 반환한다', () => {
    expect(capitalize('')).toBe('');
  });
});
