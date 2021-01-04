import { shuffle } from "./shuffle";

const cards = Array.from({ length: 50 }).map((_, i) => i + 1);

describe("shuffle", () => {
  it("should have the same card size", () => {
    const result = shuffle(cards);

    expect(result.length).toBe(cards.length);
  });

  it("should have the same card", () => {
    const result = shuffle(cards);

    expect(result.sort((a, b) => a - b)).toMatchObject(cards);
  });

  it("should have card in different orders", () => {
    const result = shuffle(cards);

    expect(result).not.toMatchObject(cards);
  });

  it("should have card in different orders when shuffle multiple time", () => {
    let currentStack = cards;
    Array.from({ length: 10 }).forEach(() => {
      const result = shuffle(currentStack);

      expect(result).not.toMatchObject(currentStack);

      currentStack = result;
    });
  });
});
