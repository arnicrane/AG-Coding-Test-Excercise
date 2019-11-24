import Basket from "../source/Basket";

describe("Minimum Viable Product", () => {
    it("implements the correct price ruleset to the supermarket's 1st product basket", async () => {
      const basket = new Basket();
      basket.add('FR1');
      basket.add('SR1');
      basket.add('FR1');
      basket.add('CF1');
      expect(basket.total()).toEqual(19.34);
    });

    it("implements the correct price ruleset to the supermarket's 2nd product basket", async () => {
      const basket = new Basket();
      basket.add('FR1');
      basket.add('FR1');
      expect(basket.total()).toEqual(3.11);
    });

    it("implements the correct price ruleset to the supermarket's 3rd product basket", async () => {
      const basket = new Basket();
      basket.add('SR1');
      basket.add('SR1');
      basket.add('FR1');
      basket.add('SR1');
      expect(basket.total()).toEqual(16.61);
    });
});
