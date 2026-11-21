const { sum } = require('./sum');

function average(arr) {
  if (!Array.isArray(arr)) {
    throw new TypeError('배열만 입력할 수 있습니다');
  }
  if (arr.length === 0) return 0;
  return sum(arr) / arr.length;
}
module.exports = { average };
