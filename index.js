const rentSplitter = require("./rentSplitter");

const buildNeatDisplayString = (arrayOfThreeNumbers) => {
  return `Master: $ ${arrayOfThreeNumbers[0]}
Bedroom 1: $ ${arrayOfThreeNumbers[1]}
Bedroom 2: $ ${arrayOfThreeNumbers[2]}`;
};

console.log(buildNeatDisplayString(rentSplitter(2800)));
