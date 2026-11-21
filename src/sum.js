function sum(arr) {
  if (!Array.isArray(arr)) {
    throw new TypeError('배열만 입력할 수 있습니다');
  }
  return arr.reduce((total, n) => total + n, 0);
}
module.exports = { sum };
