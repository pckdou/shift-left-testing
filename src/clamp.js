function clamp(value, min, max) {
  if (min > max) {
    throw new RangeError('min은 max보다 클 수 없습니다');
  }
  return Math.min(Math.max(value, min), max);
}
module.exports = { clamp };
