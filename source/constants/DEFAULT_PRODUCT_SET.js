export default {
  'FR1': {
    name: 'Fruit tea',
    price: 3.11
  },
  'SR1': {
    name: 'Strawberries',
    price: 5.00
  },
  'CF1': {
    name: 'Coffee',
    price: 11.23
  }
};
// Efficiency & Choice of data structure:
// I chose to organise the product set in this "hashmap" data structure because it makes adding new products and finding/updating
// existing products an O(1) constant-time operation rather than a linear one as it would be the case if I had implemented it with
// an array (although adding to an array may also be an O(1) operation in runtime if a contiguous memory location happens to be available
// after the last array item's memory location, if not, the entire array needs to be recreated leading to O(n)).
