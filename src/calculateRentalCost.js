/**
 * @param {number} days
 *
 * @return {number}
 */

const day = 40;
let total = 0;

function calculateRentalCost(days) {
  total = day * days;

  if (days >= 7) {
    total -= 50;
  } else if (days >= 3) {
    total -= 20;
  }

  return total;
}

module.exports = calculateRentalCost;
