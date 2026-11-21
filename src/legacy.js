const BASE_FEE = {
  KR: [3000, 5000, 8000],
  OTHER: [10000, 20000, 35000],
};
const MEMBER_DISCOUNT = 0.9;

function weightTier(w) {
  if (w <= 1) return 0;
  if (w <= 5) return 1;
  return 2;
}

function calcShipping(weight, country, isMember) {
  const table = country === 'KR' ? BASE_FEE.KR : BASE_FEE.OTHER;
  const fee = table[weightTier(weight)];
  return isMember === true ? fee * MEMBER_DISCOUNT : fee;
}

module.exports = { calcShipping };
