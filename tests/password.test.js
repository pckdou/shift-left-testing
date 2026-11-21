const { checkPasswordStrength } = require('../src/password');

describe('checkPasswordStrength', () => {
  test('짧고 단순하면 weak', () => {
    expect(checkPasswordStrength('abc')).toBe('weak');
  });

  test('문자열이 아니면 weak', () => {
    expect(checkPasswordStrength(undefined)).toBe('weak');
  });

  test('길이+소문자+숫자면 medium', () => {
    expect(checkPasswordStrength('abcdefg1')).toBe('medium');
  });

  test('모든 조건을 만족하면 strong', () => {
    expect(checkPasswordStrength('Abcdef1!')).toBe('strong');
  });
});