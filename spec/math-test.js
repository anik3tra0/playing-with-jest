
const add = require('../math').add;
const substract = require('../math').substract;
const multiply = require('../math').multiply;
const divide = require('../math').divide;

describe('add', () => {
  it('should add two numbers', () => {
    expect(add(1, 2)).toBe(3);
  });
});

describe('substract', () => {
  it('should substract the smaller number from the greater number', () => {
    expect(substract(10,5)).toBe(5);
  });

  it('should log invalid if the second number is bigger than the first', () => {
    expect(substract(5,10)).toMatch('Invalid');
  });
})

describe('multiply', () => {
  it('should mupliply all numbers in array', () => {
    expect(multiply([1,2,3,4,5])).toBe(120);
  });

  it('should not multiply if numbers are less than 5', () => {
    expect(multiply([1,2,3])).toMatch('need');
  });

  it('should only contain numbers', () => {
    expect(multiply([1,4,2,'a','z'])).toMatch('Invalid Dataset');
  });
});

describe('divide', () => {
  it('should divide two numbers and return quotient', () => {
    expect(divide(4, 2, 'quotient')).toBe(2);
  });

  it('should divide two numbers and return remainder', () => {
    expect(divide(4, 2, 'remainder')).toBe(0);
  });
});
