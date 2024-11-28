function calculateNumber (type, a, b) {
  const roundedNum1 = Math.round(a);
  const roundedNum2 = Math.round(b);

  if (type === 'SUM') {
    return roundedNum1 + roundedNum2;
  } else if (type === 'SUBTRACT') {
    return roundedNum1 - roundedNum2;
  } else if (type === 'DIVIDE') {
    if (roundedNum2 === 0) {
      return 'Error';
    }
    return roundedNum1 / roundedNum2;
  } else {
    return 'Invalid operation';
  }
}

module.exports = calculateNumber;
