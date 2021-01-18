export function verifyNumber (n : number): boolean | string {
  if(Math.round(n) !== n ||n % 2 === 0 ) return false
  
  if(n){
    let star ="***\n";
    console.log(star.repeat(n).substring(0,3))
  }
}

//verifyNumber(4) => false
//verifyNumber(4.01) => false
//verifyNumber(0) => false 
//verifyNumber(3) => "***\n***\n***"

//  *
// ***
//  *

