// ex2.js

const height = 160; // height in cm

const lastTwoDigits = height % 100;
const idealWeight = (lastTwoDigits * 9) / 10;
const maxWeight = lastTwoDigits;
const minWeight = (lastTwoDigits * 8) / 10;

console.log(
  "Ideal weight:", idealWeight + "kg,",
  "Maximum weight:", maxWeight + "kg,",
  "Minimum weight:", minWeight + "kg"
);