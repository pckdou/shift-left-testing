function calcShipping(w, c, m) {
  var f;
  if (c == 'KR') {
    if (w <= 1) {
      f = 3000;
    } else {
      if (w <= 5) {
        f = 5000;
      } else {
        f = 8000;
      }
    }
  } else {
    if (w <= 1) {
      f = 10000;
    } else {
      if (w <= 5) {
        f = 20000;
      } else {
        f = 35000;
      }
    }
  }
  if (m == true) {
    f = f * 0.9;
  }
  return f;
}

module.exports = { calcShipping };