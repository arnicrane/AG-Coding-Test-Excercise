import DEFAULT_PRODUCT_SET from "./constants/DEFAULT_PRODUCT_SET";

export default class Supermarket {
  constructor(products = undefined) {
    this.validProducts = products || DEFAULT_PRODUCT_SET;
  }
  // Efficiency:
  // Runtime: CONSTANT O(1), space: LINEAR O(n) where n are the number of added products

  validProduct(productCode) {
    // predicate method returns true/false if the productCode is/isn't part of the validProducts' codes
    return (typeof productCode === "string") && !!this.validProducts[productCode];
  };
  // Efficiency:
  // Runtime: CONSTANT O(1), space: CONSTANT O(0)

  addOrUpdateProduct(productCode, name, price) {
    const GUARD_CLAUSE_ERROR_MESSAGE = "Failed to add/update the product. Ensure you provide a productCode (of type string), a name (of type string) and a price (of type number)";
    if (!(typeof productCode === "string" && typeof name === "string" && typeof price === "number")) {
      // guard against edge cases (arg missing or of wrong type)
      return GUARD_CLAUSE_ERROR_MESSAGE;
    } else {
      this.validProducts[productCode] = {
        name: name,
        price: price
      };
    }
    // Thanks to the chosen product data structure (hashmap), adding & updating happens to be done identically
    // Efficiency:
    // Runtime: CONSTANT O(3), space: LINEAR O(n+1) where n are the number of added products & 1 is the guard message, in the case of an
    // add-operation and CONSTANT O(1) in the case of an update
  };
};
