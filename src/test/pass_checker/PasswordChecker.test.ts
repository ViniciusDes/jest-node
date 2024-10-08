import {
  PasswordChecker,
  PasswordErrors,
} from "../../app/pass_checker/PasswordChecker";

describe("Password checker suit", () => {
  let sut: PasswordChecker;

  beforeEach(() => {
    sut = new PasswordChecker();
  });

  it("Password with less than 8 chars is invalid", () => {
    const actual = sut.checkPassword("1234567");

    expect(actual.valid).toBe(false);
    expect(actual.reasons).toContain(PasswordErrors.SHORT);
  });

  it("Password with more than 8 chars is ok", () => {
    const actual = sut.checkPassword("12345678As");

    expect(actual.reasons).not.toContain(PasswordErrors.SHORT);
  });

  it("Password with no upper case letter is invalid", () => {
    const actual = sut.checkPassword("12345678aa");

    expect(actual.reasons).toContain(PasswordErrors.MUST_HAVE_UPPER_CASE);
  });

  it("Password with upper case letter is valid", () => {
    const actual = sut.checkPassword("12345678aaP");

    expect(actual.reasons).not.toContain(PasswordErrors.MUST_HAVE_UPPER_CASE);
  });

  it("Password with no lower case letter is invalid", () => {
    const actual = sut.checkPassword("12345678AVP");

    expect(actual.reasons).toContain(PasswordErrors.MUST_HAVE_LOWER_CASE);
  });

  it("Password with lower case letter is valid", () => {
    const actual = sut.checkPassword("12345678aAVP");

    expect(actual.reasons).not.toContain(PasswordErrors.MUST_HAVE_LOWER_CASE);
  });

  it("Complex password is valid", () => {
    const actual = sut.checkPassword("1234AAcccbB");
    expect(actual.reasons).toHaveLength(0);
    expect(actual.valid).toBe(true);
  });
});
