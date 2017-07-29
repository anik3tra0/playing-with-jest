function add(a, b) {
  return a + b;
}

function substract(a,b) {
  if (b > a) {
    return "Invalid";
  }
  return a - b;
}

function multiply(numbers) {
  const types = numbers.map((num) => typeof(num) === 'number');

  if (types.includes(false)) {
    return 'Invalid Dataset, Need array of numbers';
  }

  if (numbers.length < 5) {
    const remainder = substract(5, numbers.length);
    return `You need more ${remainder} number(s) in the array`;
  }

  return numbers.reduce(function(a,b){return a*b;});
}

function divide(a,b,ops) {
  if (ops == 'quotient') {
    return a / b;
  }

  if (ops == 'remainder') {
    return a % b;
  }
}

module.exports = {add, substract, multiply, divide};
