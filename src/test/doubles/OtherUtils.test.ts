import {
  calculateComplexity,
  OtherStringutils,
  toUpperCaseWithCb,
} from "../../app/doubles/OtherUtils";

describe("OtherUtil test suit", () => {
  it("ToUpperCase - calls callback for invalid argument", () => {
    const actual = toUpperCaseWithCb("abc", () => {});

    expect(actual).toBe("ABC");
  });

  describe("OtherStringUtils test with spies", () => {
    let sut: OtherStringutils;

    beforeEach(() => {
      sut = new OtherStringutils();
    });

    test("Use a spy to track calls", () => {
      const toUpperCaseSpy = jest.spyOn(sut, "toUpperCase");

      sut.toUpperCase("asa");
      expect(toUpperCaseSpy).toHaveBeenCalledWith("asa");
    });

    test("Use a spy to track to another module", () => {
      const logSpy = jest.spyOn(console, "log");

      sut.logString("testing");
      expect(logSpy).toHaveBeenCalledWith("testing");
    });

    test("Use a spy to replace a implementation of a method", () => {
      const logSpy = jest
        .spyOn(sut, "callExternalService")
        .mockImplementation(() => {
          console.log(
            "Calling mocked implementation - replacing the original implementation"
          );
        });
      sut.callExternalService();
    });
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
