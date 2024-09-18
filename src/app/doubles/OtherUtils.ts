export type StringInfo = {
  lowerCase: string;
  upperCase: string;
  characters: string[];
  length: number;
  extraInfo: Object | undefined;
};

export function calculateComplexity(stringInfo: StringInfo) {
  return Object.keys(stringInfo.extraInfo).length * stringInfo.length;
}

export function toUpperCaseWithCb(arg: string, callback: Function) {
  if (!arg) {
    callback("Invalid argument");
    return;
  }

  callback(`Called function with ${arg}`);
  return arg.toUpperCase();
}
