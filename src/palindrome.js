function normalize(s) {
  return s.toLowerCase().replace(/[^a-z0-9]/g, '');
}

function isPalindrome(s) {
  if (typeof s !== 'string') return false;
  const cleaned = normalize(s);
  return cleaned === cleaned.split('').reverse().join('');
}
module.exports = { isPalindrome };
