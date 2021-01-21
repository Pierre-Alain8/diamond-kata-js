import { verifyNumber } from ".";

describe("verify", function() {
  it("should not accept 0", () => {
    const n = 0; 
    expect(verifyNumber(n)).toEqual(false)
  });

  it("should not accept evenNumber ", () => {
    const n = 2; 
    expect(verifyNumber(n)).toEqual(false)
  });

  it("should accept integer ", () => {
    const n = 4.01; 
    expect(verifyNumber(n)).toEqual(false)
  });

  it("should return string ", () => {
    const n = 3; 
    expect(typeof verifyNumber(n)).toBe("string")
  });
  

  it("should return multiple * ", () => {
    const n = 3; 
    const diamond = verifyNumber(n);
    console.log(diamond);
    expect(diamond).toMatch(` *\n***\n *`)
  });

});
