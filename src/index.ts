let STARS;

export function verifyNumber (n : number): boolean | string {
  const isRoundNumber = Math.round(n) !== n;
  const isEvenNumber = n % 2 === 0;

  if(isRoundNumber||isEvenNumber ) return false
  return createDiamond(n);
}

  const createDiamond = (n) => {
    STARS = "*";
    let diamond = ""

    for(let i = 0; i < n; i++){
      
      if(i === 0)  diamond = `${diamond}\n ${STARS}\n`
      if(i === 1)  diamond = `${diamond}${STARS.repeat(n)}\n`
      if(i === 2)  diamond = `${diamond} ${STARS}`
    }
    console.log(diamond)
    return diamond;
  }

