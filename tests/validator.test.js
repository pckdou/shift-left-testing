const { isValidEmail } = require('../src/validator');

describe('isValidEmail', () => {
  test('올바른 이메일이면 true', () => {
    expect(isValidEmail('test@example.com')).toBe(true);
  });

  test('@가 없으면 false', () => {
    expect(isValidEmail('testexample.com')).toBe(false);
  });

  test('도메인에 점이 없으면 false', () => {
    expect(isValidEmail('test@example')).toBe(false);
  });

  test('공백이 있으면 false', () => {
    expect(isValidEmail('te st@example.com')).toBe(false);
  });

  test('문자열이 아니면 false', () => {
    expect(isValidEmail(null)).toBe(false);
    expect(isValidEmail(123)).toBe(false);
  });
});