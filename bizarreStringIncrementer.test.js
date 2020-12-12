import { bizarreStringIncrementer } from "./bizarreStringIncrementer.js";
import chai from "chai";

describe("bizarreStringIncrementer", () => {
  let expect = chai.expect;
  it("bizarreStringIncrementer adds the number 1 if string does not end in a number", () => {
    expect(bizarreStringIncrementer("foo")).equal("foo1");
  });

  it("bizarreStringIncrementer increments by 1 the number if the string ends with a number", () => {
    expect(bizarreStringIncrementer("foo23")).equal("foo24");
  });

  it("bizarreStringIncrementer considers leading zeros when incrementing", () => {
    expect(bizarreStringIncrementer("foo0041")).equal("foo0042");
  });

  it("bizarreStringIncrementer increments by one even when number of digits increase", () => {
    expect(bizarreStringIncrementer("foo9")).equal("foo10");
  });

  it("bizarreStringIncrementer fills leading zeros", () => {
    expect(bizarreStringIncrementer("foo099")).equal("foo100");
  });

  it("bizarreStringIncrementer looks at only the last digits", () => {
    expect(bizarreStringIncrementer("f99oo")).equal("f99oo1");
    expect(bizarreStringIncrementer("f99oo23")).equal("f99oo24");
    expect(bizarreStringIncrementer("f99oo099")).equal("f99oo100");
  });

  it("should always pad the only the leading zeroes", () => {
    expect(bizarreStringIncrementer("f99oo0099")).equal("f99oo0100");
  });
});
