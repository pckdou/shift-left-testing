const { slugify } = require('../src/slugify');

describe('slugify', () => {
  test('공백을 하이픈으로 바꾸고 소문자로 변환', () => {
    expect(slugify('Hello World')).toBe('hello-world');
  });

  test('특수문자를 제거하고 연속 하이픈을 합친다', () => {
    expect(slugify('  Hello,   World!!  ')).toBe('hello-world');
  });

  test('앞뒤 하이픈을 제거한다', () => {
    expect(slugify('---abc---')).toBe('abc');
  });

  test('문자열이 아니면 TypeError', () => {
    expect(() => slugify(123)).toThrow(TypeError);
  });
});