export enum PasswordErrors {
  SHORT = "Password is too short",
  MUST_HAVE_UPPER_CASE = "Upper case letter is required",
  MUST_HAVE_LOWER_CASE = "Lower case letter is required",
}

export interface CheckResult {
  valid: boolean;
  reasons: PasswordErrors[];
}

export class PasswordChecker {
  checkPassword(password: string): CheckResult {
    const reasons: PasswordErrors[] = [];
    if (password.length < 8) {
      reasons.push(PasswordErrors.SHORT);
    }

    if (password == password.toLocaleLowerCase()) {
      reasons.push(PasswordErrors.MUST_HAVE_UPPER_CASE);
    }

    if (password == password.toUpperCase()) {
      reasons.push(PasswordErrors.MUST_HAVE_LOWER_CASE);
    }
    return {
      valid: Boolean(!reasons.length),
      reasons: reasons,
    };
  }
}
