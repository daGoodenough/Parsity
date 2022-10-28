function convertWeight(number, unit) {
  if(
    (typeof number !== 'number')  || (
      (unit !== 'kilogram') ||
       (unit !== 'pound')
       )
       ){
        throw Error('Invalid Input')
  }
  
  let convertedWeight;

  if(unit === 'kilogram') {
    convertedWeight = number * 2.2;
  } else {
    convertedWeight = number / 2.2;
  }

  return Math.roundTo(convertedWeight, 3);
}

Math.roundTo = (number, places) => {
  function roundUp(decimalArray, places) {
    //accepts the decimal values of a number represented as an array, rounds up at the designated place. Returns as a string
    let sliced = decimalArray.slice(0, places);
    let roundedUp = Number(sliced.join('')) + 1;
    return roundedUp.toString();
  }
  
  let splitNumber = number.toString().split('.');
  let integer = splitNumber[0];
  let decimals = splitNumber[1].toString().split(''); //separates the decimal places from the whole number value. Returns an array of numbers representing the decimal values

  let roundedDecimalArray, roundedDecimalString, roundedNumber;
  if (decimals.length <= places){
    return number;
  } else if (decimals[places] > 5){
    roundedDecimalString = roundUp(decimals, places);
    roundedNumber = (integer + "." + roundedDecimalString);
    
  } else {
    roundedDecimalArray = decimals.slice(0, places)
    roundedDecimalString = roundedDecimalArray.join('');
    roundedNumber = Number(integer + "." + roundedDecimalString);
  }

  return roundedNumber
}



function calcAge(birthYear) {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  
  let age1 = currentYear - birthYear;
  let age2 = currentYear - birthYear - 1;

  return {
    birthdayHappened: age1,
    birthdayDidntHappen: age2
  }
}

function isPrime(num) {
  if(!Number.isInteger(num) || num <= 1) {
    return false;
  }

  let divisor = num - 1;
  let prime = true;
  while(divisor > 1) {
    if(num % divisor === 0){
      prime = false;
    }
    divisor -= 1;
  }
  return prime;
}

console.log(isPrime(18))