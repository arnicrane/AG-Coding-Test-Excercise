import Basket from "../source/Basket";
import Supermarket from "../source/Supermarket.js";

describe("Basket capabilities", () => {
  describe("add()", () => {
    it("returns an error message if an invalid item/product code was provided", () => {
      const basket = new Basket();
      const validItems = Object.keys(basket.supermarket.validProducts);
      expect(basket.add('WRONG_CODE')).toEqual(
        `Failed to add the item. Ensure you provide a valid productCode (of type string), i.e. any of the following: ${validItems}`
      );
    });

    it("adds valid items to the basket's items list", () => {
      const basket = new Basket();
      const newItem = 'CF1';
      expect(basket.items).toEqual([]);

      basket.add(newItem);
      expect(basket.items).toEqual([newItem]);

      basket.add(newItem);
      expect(basket.items).toEqual([newItem, newItem]);
    });
  });

  describe("total()", () => {
    it("applies the correct discount if the items qualify the CEO's ruleset condition", async () => {
      const basket = new Basket();
      basket.add('FR1');
      basket.add('FR1');
      const discountedTeaPrice = basket.supermarket.validProducts.FR1.price;
      expect(basket.total()).toEqual(discountedTeaPrice);
    });

    it("applies the correct discount if the items qualify the COO's ruleset condition", async () => {
      const basket = new Basket();
      basket.add('SR1');
      basket.add('SR1');
      basket.add('SR1');
      const discountedSRPrice = 3 * basket.supermarket.validProducts.SR1.price - 3 * 0.50;
      expect(basket.total()).toEqual(discountedSRPrice);
    });

    it("applies no discount if the items don't qualify any ruleset condition", async () => {
      const basket = new Basket();
      basket.add('SR1');
      basket.add('SR1');
      const fullPrice = 2 * basket.supermarket.validProducts.SR1.price;
      expect(basket.total()).toEqual(fullPrice);
    });
  });
});
