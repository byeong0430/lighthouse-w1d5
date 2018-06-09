let assert = require('chai').assert;
let luhnAlgo = require('../lib/luhn-algorithm');

// Functions
let addNums = luhnAlgo.addNums;
let multiplyNums = luhnAlgo.multiplyNums;
let addDigits = luhnAlgo.addDigits;
let check = luhnAlgo.check;
let checkValidNumber = luhnAlgo.checkValidNumber;

describe('addNums', function(){
  it('should return the sum of the two parameters if both parameters are numbers', function(){
    let result = addNums(1, 2);
    assert.equal(3, result);
  });
  it('should return undefined if any one of the parameters are not a number', function(){
    let result = addNums('a', 2);
    assert.equal(undefined, result);
  });
  it('should return undefined if less than 2 variables were passed', function(){
    let result1 = addNums(1);
    let result2 = addNums();
    assert.equal(undefined, result1);
    assert.equal(undefined, result2);
  });
  it('shoud return undefined if only 1 variable (not a number) was passed', function(){
    let result = addNums('a');
    assert.equal(undefined, result);
  });
});

describe('multiplyNums', function(){
  it('should return the multiplication of the two parameters if both parameters are numbers', function(){
    let result = multiplyNums(3, 3);
    assert.equal(9, result);
  });
  it('should return undefined if any one of the parameters are not a number', function(){
    let result = multiplyNums('a', 2);
    assert.equal(undefined, result);
  });
  it('should return undefined if less than 2 variables were passed', function(){
    let result1 = multiplyNums(1);
    let result2 = multiplyNums();
    assert.equal(undefined, result1);
    assert.equal(undefined, result2);
  });
  it('shoud return undefined if only 1 variable (not a number) was passed', function(){
    let result = multiplyNums('a');
    assert.equal(undefined, result);
  });
});

describe('addDigits', function(){
  it('should return the sum of all digits in a parameter at least 2-digits long i.e.) 23 should yield 2 + 3 = 5', function(){
    let result = addDigits(34);
    assert.equal(7, result);
  });
  it('should return identical results whether you pass a number or its corresponding string number', function(){
    let result1 = addDigits(12);
    let result2 = addDigits('12');
    assert.equal(result1, result2);
  });
  it('should return the result identicial to the input parameter if it is 1-digit long', function(){
    let result = addDigits(3);
    assert.equal(3, result);
  });
});

describe('checkValidNumber', function(){
  it('returns false if you enter an array or object', function(){
    let result = checkValidNumber(['7992739871', '21809723']);
    assert.isFalse(result);
  })
  it('returns false if you entered an empty string', function(){
    let result = checkValidNumber('');
    assert.isFalse(result);
  })
  it('returns false if you entered an alphanumeric value', function(){
    let result = checkValidNumber('1iu24323a2');
    assert.isFalse(result);
  })
});

describe('check',function(){
  it('returns true if a number is valid', function(){
    let result = check('79927398713', addNums, multiplyNums, addDigits)
    assert.isTrue(result);
  });
  it('returns false if a number is invalid', function(){
    let result = check('7992739871', addNums, multiplyNums, addDigits)
    assert.isFalse(result);
  });
});
