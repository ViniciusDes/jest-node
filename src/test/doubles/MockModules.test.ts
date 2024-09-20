const mockedResult = 10;

jest.mock("../../app/doubles/OtherUtils", () => ({
  ...jest.requireActual("../../app/doubles/OtherUtils"),
  calculateComplexity: () => mockedResult,
}));

jest.mock("uuid", () => ({
  v4: () => 1234,
}));

import * as OtherUtils from "../../app/doubles/OtherUtils";

describe("Test mocked module", () => {
  test("calculate complexity", () => {
    const result = OtherUtils.calculateComplexity({} as any);
    console.log(result);
    expect(result).toBe(mockedResult);
  });

  test("keep other functions", () => {
    const result = OtherUtils.toTupperCase("abc");
    expect(result).toBe("ABC");
  });

  test("string with id", () => {
    const result = OtherUtils.toLowerCaseWithId("ABC");
    console.log(result);
    expect(result).toBe("abc1234");
  });
});
