function calculatePercentageChange(original, newAmount) {
  const difference = (newAmount - original);
  const percentageDifference = (difference/ original) * 100;
  if(difference = 0){return 0};
  return Math.round(percentageDifference);
}
console.log(calculatePercentageChange(50,40))
module.exports = { calculatePercentageChange };
