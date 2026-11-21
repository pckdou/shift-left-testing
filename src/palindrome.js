function isPalindrome(s) {
  return s === s.split('').reverse().join('');
}
module.exports = { isPalindrome };
