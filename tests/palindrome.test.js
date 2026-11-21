const { isPalindrome } = require('../src/palindrome');

describe('isPalindrome', () => {
  test('회문이면 true', () => {
    expect(isPalindrome('level')).toBe(true);
  });
  test('회문이 아니면 false', () => {
    expect(isPalindrome('hello')).toBe(false);
  });
});
