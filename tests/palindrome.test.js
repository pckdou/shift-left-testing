const { isPalindrome } = require('../src/palindrome');

describe('isPalindrome', () => {
  test('회문이면 true', () => {
    expect(isPalindrome('level')).toBe(true);
  });
  test('회문이 아니면 false', () => {
    expect(isPalindrome('hello')).toBe(false);
  });
  test('대소문자, 공백, 특수문자는 무시한다', () => {
    expect(isPalindrome('A man, a plan, a canal: Panama')).toBe(true);
  });
  test('문자열이 아니면 false', () => {
    expect(isPalindrome(123)).toBe(false);
  });
});
