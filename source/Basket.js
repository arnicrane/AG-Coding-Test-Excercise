import Supermarket from "./Supermarket";
import DEFAULT_PRICING_RULES from "./constants/DEFAULT_PRICING_RULES";

export default class Basket {
  constructor(pricingRuleFunctions, supermarket = undefined) {
    this.pricingRules = pricingRuleFunctions || DEFAULT_PRICING_RULES;
    this.items = [];
    this.totalPriceWithoutDiscount = 0.00;
    this.supermarket = supermarket || new Supermarket();
  }
  // Efficiency:
  // Runtime: CONSTANT O(4), space: LINEAR O(n+m) where n are the number of added ruleFunctions and m is the size of the supermarket object

  add(item) {
    const GUARD_CLAUSE_ERROR_MESSAGE = "Failed to add the item. Ensure you provide a valid productCode (of type string), i.e. any of the following: ";
    if (!this.supermarket.validProduct(item)) {
      return GUARD_CLAUSE_ERROR_MESSAGE + Object.keys(this.supermarket.validProducts);
    }
    this.items = [...this.items, ...[item]];
    this.totalPriceWithoutDiscount += this.supermarket.validProducts[item].price;
  }
  // Runtime: Either CONSTANT O(3) in case of a valid product item or O(3+k) where k are the number of keys in the supermarket's
  // validProducts hashmap object that get iterated over and coearced into the final error string,
  // space: LINEAR O(n) where n are the number of added items (which is 1 but could grow if bulk operations get supported)

  total() {
    const applyPricingRules = (price, pricingRule) => {
      let updatedPrice = pricingRule(this.items, price); // invoking the pricingRule function
      return updatedPrice; // Explicit naming of this operation's return value to make things obvious
    };
    const finalDiscountedPrice = this.pricingRules.reduce(applyPricingRules, this.totalPriceWithoutDiscount)
    return finalDiscountedPrice; // Explicit naming of this operation's return value to make things obvious
  }
  // Efficiency:
  // Runtime: LINEAR O(n) where n is the number of pricingRules, space: CONSTANT O(2) for each one of the optional price variables
};
