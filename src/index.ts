let stars;
let diamonds;
let spaces;

const createDiamond = (n: number) => {
  let j: number;
  let z = 1;
  return Array(n)
    .fill(0)
    .reduce((acc) => {
      if (z > n) {
        j = j - 2;
      } else {
        j = z;
      }
      z += 2;
      spaces = " ".repeat((n - j) / 2);
      stars = "*".repeat(j) + "\n";
      diamonds = `${acc}${spaces}${stars}`;
      return diamonds;
    }, "\n");
};

export function verifyNumber(n: number): string | boolean {
  const isRoundNumber = Math.round(n) !== n;
  const isEvenNumber = n % 2 === 0;

  if (isRoundNumber || isEvenNumber) return false;
  console.log(createDiamond(n));
  return createDiamond(n);
}

verifyNumber(7);
