let Stars;
let Diamonds;

export function verifyNumber (n : number): boolean | string {
  const isRoundNumber = Math.round(n) !== n;
  const isEvenNumber = n % 2 === 0;

  if(isRoundNumber||isEvenNumber ) return false
  return createDiamond(n);
}

  const createDiamond = (n) => {
    Stars = "*";
    Diamonds = ""

    for(let i = 0; i < n; i++){
      
      if(i === 0)  Diamonds = `${Diamonds}\n ${Stars}\n`
      if(i === 1)  Diamonds = `${Diamonds}${Stars.repeat(n)}\n`
      if(i === 2)  Diamonds = `${Diamonds} ${Stars}`
    }
    console.log(Diamonds)
    return Diamonds;
  }

