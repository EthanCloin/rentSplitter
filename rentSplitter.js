const rentSplitter = (rentCharge) => {
  // type check
  if (isNaN(rentCharge)) {
    console.log(`rent value is ${typeof rentCharge}, not number`);
    return null;
  }
  // amount each roommate receives off rent due to one paying the diff
  const discountValue = 50;
  const roommateCount = 3;

  // amount due per person if no discount were applied
  const roundedEvenSplit = Math.round(100 * (rentCharge / roommateCount)) / 100;

  // roommate paying extra
  const valuePlusExtra = roundedEvenSplit + discountValue * (roommateCount - 1);
  // every other roommate
  const valueWithDiscount = roundedEvenSplit - discountValue;

  // dynamically sized array based on roommateCount
  const costArray = [];
  costArray.push(valuePlusExtra);
  for (let i = 0; i < roommateCount - 1; i++) {
    costArray.push(valueWithDiscount);
  }

  return costArray;
};

module.exports = rentSplitter;

console.log(rentSplitter(1850));
