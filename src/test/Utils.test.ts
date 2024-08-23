import { getStringInfo, toUpperCase } from "../app/Utils";

describe("Utils test suite", () => {
  it("Should return uppercase", () => {
    const result = toUpperCase("abc");
    expect(result).toBe("ABC");
  });

  describe("ToUpperCase examples", () => {
    it.each([
      {
        input: "abc",
        expected: "ABC",
      },
      {
        input: "My-String",
        expected: "MY-STRING",
      },
      {
        input: "def",
        expected: "DEF",
      },
    ])("$input toUpperCase should be $expected", ({ input, expected }) => {
      const actual = toUpperCase(input);
      expect(actual).toBe(expected);
    });
  });

  describe("getStringInfo for arg My-String shoud", () => {
    test("return right length", () => {
      const actual = getStringInfo("My-String");
      expect(actual.characters.length).toBe(9);
      expect(actual.characters).toHaveLength(9);
    });

    test("return right lower case", () => {
      const actual = getStringInfo("My-String");

      expect(actual.lowerCase).toBe("my-string");
    });

    test("return right upper case", () => {
      const actual = getStringInfo("My-String");

      expect(actual.upperCase).toBe("MY-STRING");
    });

    test("return right characters", () => {
      const actual = getStringInfo("My-String");

      expect(actual.characters).toContain("M");
      expect(actual.characters).toEqual([
        "M",
        "y",
        "-",
        "S",
        "t",
        "r",
        "i",
        "n",
        "g",
      ]);

      expect(actual.characters).toEqual(
        expect.arrayContaining(["S", "t", "r", "i", "n", "g", "M", "y", "-"])
      );
    });

    test("return defined extra info", () => {
      const actual = getStringInfo("My-String");

      expect(actual.extraInfo).toEqual({});

      expect(actual.extraInfo).not.toBe(undefined);
      expect(actual.extraInfo).not.toBeUndefined();
      expect(actual.extraInfo).toBeDefined();
      expect(actual.extraInfo).toBeTruthy();
    });
  });
});
