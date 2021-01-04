import { findCognitiveFunction } from "./findCognitiveFunction";

describe("findCognitiveFunction", () => {
  it("ISTJ", () => {
    const mbti = "ISTJ";

    const result = findCognitiveFunction(mbti);

    const expectedResult = {
      dominant: "Si",
      auxiliary: "Te",
      tertiary: "Fi",
      inferior: "Ne",
    };

    expect(result).toMatchObject(expectedResult);
  });

  it("ENFP", () => {
    const mbti = "ENFP";

    const result = findCognitiveFunction(mbti);

    const expectedResult = {
      dominant: "Ne",
      auxiliary: "Fi",
      tertiary: "Te",
      inferior: "Si",
    };

    expect(result).toMatchObject(expectedResult);
  });
});
