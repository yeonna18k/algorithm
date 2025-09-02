/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function(ratings) {
    const totChilds = ratings.length;
  if (totChilds === 0) {
    return 0;
  }

  const cndy = new Array(totChilds).fill(1);
  let tots = 0;

  for (let i = 1; i < totChilds; i++) {
    if (ratings[i] > ratings[i - 1]) {
      cndy[i] = cndy[i - 1] + 1;
    }
  }

  for (let i = totChilds - 2; i >= 0; i--) {
    if (ratings[i] > ratings[i + 1]) {
      cndy[i] = Math.max(cndy[i], cndy[i + 1] + 1);
    }
  }

  for (const c of cndy) {
    tots += c;
  }

  return tots;
};