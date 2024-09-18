import {
  calculateComplexity,
  toUpperCaseWithCb,
} from "../../app/doubles/OtherUtils";

describe("OtherUtil test suit", () => {
  it("ToUpperCase - calls callback for invalid argument", () => {
    const actual = toUpperCaseWithCb("abc", () => {});

    expect(actual).toBe("ABC");
  });

  describe("Tracking callbacks with jest", () => {
    const callBackMock = jest.fn();

    afterEach(() => {
      jest.clearAllMocks();
    });

    it("calls callback for invalid argument - track calls", () => {
      const actual = toUpperCaseWithCb("", callBackMock);
      expect(actual).toBeUndefined();
      expect(callBackMock).toHaveBeenCalledWith("Invalid argument");
      expect(callBackMock).toHaveBeenCalledTimes(1);
    });

    it("calls callback for valid argument - track calls", () => {
      const actual = toUpperCaseWithCb("abc", callBackMock);
      expect(actual).toBe("ABC");
      expect(callBackMock).toHaveBeenCalledWith(`Called function with abc`);
      expect(callBackMock).toHaveBeenCalledTimes(1);
    });
  });

  it("Calculates complexity", () => {
    const someInfo = {
      length: 5,
      extraInfo: {
        field1: "someinfo",
        field2: "someinfo",
      },
    };

    const actual = calculateComplexity(someInfo as any);
    expect(actual).toBe(10);
  });
});
