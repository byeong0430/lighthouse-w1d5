// Sum two variables
const addNums = (a, b) => {
  if (!isNaN(Number(a)) && !isNaN(Number(b))){
    return a + b;
  }
};
// Multiply a number by another number
const multiplyNums = (a, b) => {
  if (!isNaN(Number(a)) && !isNaN(Number(b))){
    return a * b;
  }
};
// Sum each digit of a string number. i.e.) '12' => 1 + 2 = 3
const addDigits = number => {
  // Stringify the input number
  let strNum = number.toString();
  let sum = 0;
  strNum.split('').forEach(strNumber => {
    sum += Number(strNumber);
  });
  return sum;
};

function check(number, adding, multiplying, sumDigits){
  // Use .toString() to make sure what you split is always string
  // Split the string number by '' to convert it to an array
  let numArr = number.toString().split('');
  // Extract odd-index even-index array (including 0) items separately
  let evenArray = [];
  let oddArray = []; // Include index 0

  numArr.forEach(function(value, index){
    if (index % 2 === 0){
      evenArray.push(Number(value));
    }else{
      // odd-index array! Multiply each array item by 2
      // and sum each digit of a string number. i.e.) '12' => 1 + 2 = 3
      let sumDigitNumber = sumDigits([value, 2].reduce(multiplying));
      oddArray.push(sumDigitNumber);
    }
  }); 

  // Join both arrays
  evenArray.push.apply(evenArray, oddArray);
  // Sum all the array items
  let sum = evenArray.reduce(adding);

  return sum % 10 === 0;
}

const checkValidNumber = (number) => {
  switch (true){
    case (typeof number === 'object'):
      console.log('The input should not be an array or object!');
      break;
    case (number.length === 0):
      console.log('Your input number is empty!');
      break;
    case (isNaN(Number(number))):
      console.log('Your input is not a number!');
      break;
    default:
      return true;
  }
  return false;
};

let number1 = '79927398713';
let number2 = '7992739871';

if (checkValidNumber(number2)){
  console.log(check(number2, addNums, multiplyNums, addDigits));
}

if (checkValidNumber(number1)){
  console.log(check(number2, addNums, multiplyNums, addDigits));
}

module.exports = {
  addNums: addNums,
  multiplyNums: multiplyNums,
  addDigits: addDigits,
  check: check,
  checkValidNumber: checkValidNumber
};