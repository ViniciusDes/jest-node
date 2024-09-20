import { v4 } from "uuid";

export type StringInfo = {
  lowerCase: string;
  upperCase: string;
  characters: string[];
  length: number;
  extraInfo: Object | undefined;
};

export function toTupperCase(arg: string) {
  return arg.toUpperCase();
}

export function toLowerCaseWithId(arg: string) {
  return arg.toUpperCase() + v4();
}

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

export class OtherStringutils {
  callExternalService() {
    console.log("Calling an external service");
  }

  public toUpperCase(arg: string) {
    return arg.toUpperCase();
  }

  public logString(arg: string) {
    console.log(arg);
  }
}
