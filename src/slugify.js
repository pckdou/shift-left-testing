function slugify(text) {
  if (typeof text !== 'string') {
    throw new TypeError('문자열만 입력할 수 있습니다');
  }
  return text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

module.exports = { slugify };