import Supermarket from "../source/Supermarket.js";

describe("Supermarket capabilities", () => {
  const testProductSet = {
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

  describe("validProducts()", () => {
    it("defaults the set of validProducts to the testset from the README if no custom product set was provided on instantiation", () => {
      const supermarket = new Supermarket();
      expect(supermarket.validProducts).toEqual(testProductSet);
    });

    it("returns the custom set of products that the #supermarket instance has been instantiated with", () => {
      const customProductSet = {
        'BR1': {
          name: 'Bananas',
          price: 2.00
        },
        'MK1': {
          name: 'Milk',
          price: 1.23
        }
      };
      const supermarket = new Supermarket(customProductSet);
      expect(supermarket.validProducts).toEqual(customProductSet);
    });
  });

  describe("validProduct()", () => {
    it("confirms the validity of a known product code", () => {
      const supermarket = new Supermarket();
      expect(supermarket.validProduct('CF1')).toBe(true);
    });

    it("reports the invalidity of an unknown product code", () => {
      const supermarket = new Supermarket();
      expect(supermarket.validProduct('UnknownCode1')).toBe(false);
    });

    it("guards against & reports the invalidity of a misformatted product code", () => {
      const supermarket = new Supermarket();
      expect(supermarket.validProduct(1234)).toBe(false);
    });
  });

  describe("addOrUpdateProduct()", () => {
    it("adds a new product to the supermarket instance's set of validProducts", () => {
      const supermarket = new Supermarket();
      const customProductSet = {
        ...testProductSet,
        ...{
          'OR1': {
            name: 'Oranges',
            price: 2.99
          }
        }
      };
      supermarket.addOrUpdateProduct('OR1', 'Oranges', 2.99)
      expect(supermarket.validProducts).toEqual(customProductSet);
    });

    it("updates an existing product from the supermarket instance's set of validProducts", () => {
      const supermarket = new Supermarket();
      supermarket.addOrUpdateProduct('SR1', 'Strawberries', 6.00)
      expect(supermarket.validProducts.SR1.price).toEqual(6.00);
    });

    it("returns an error message if an invalid input argument was provided", () => {
      const supermarket = new Supermarket();
      expect(supermarket.addOrUpdateProduct(123, 'Strawberries', 6.00)).toEqual(
        "Failed to add/update the product. Ensure you provide a productCode (of type string), a name (of type string) and a price (of type number)"
      );
    });

    it("returns an error message if less than 3 input arguments were provided", () => {
      const supermarket = new Supermarket();
      expect(supermarket.addOrUpdateProduct('SR1', 'Strawberries')).toEqual(
        "Failed to add/update the product. Ensure you provide a productCode (of type string), a name (of type string) and a price (of type number)"
      );
    });
  });
});
