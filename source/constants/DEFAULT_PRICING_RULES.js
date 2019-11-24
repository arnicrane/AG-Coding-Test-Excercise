export default [
  // CEO's pricing rule
  (items, startingPrice) => {
    let discountApplies = false;
    let uniqueSet = new Set();
    for (let i = 0 ; i < items.length ; i++) {
      if (items[i] == 'FR1' && uniqueSet.has('FR1')) {
        discountApplies = true;
        break;
      }
      uniqueSet.add(items[i]);
    }
    return discountApplies ? startingPrice - 3.11 : startingPrice;
  },
  // Efficiency:
  // Runtime: Best case, where the first two items of a lengthy array happen to be 'FR1', CONSTANT O(3+2),
  //          Average/worst case, where the for-loop needs to iterate over most/all of the array, LINEAR O(3+n) where n is the number of items,
  // space: CONSTANT O(2) for the two let-variables

  // COO's pricing rule
  (items, startingPrice) => {
    let discountApplies = false, strawberryCount = 0;
    for (let i = 0 ; i < items.length ; i++) {
      if (items[i]=== 'SR1') {
        strawberryCount += 1;
      }
    }
    discountApplies = strawberryCount >= 3;
    return discountApplies ? (startingPrice - (strawberryCount * 0.50)) : startingPrice;
  }
  // Efficiency:
  // Runtime: LINEAR O(n+3) at all times
  // space: CONSTANT O(1) for the 1 boolean variable
];
