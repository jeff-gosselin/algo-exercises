function sameFrequency(num1,num2) {
  if (num1 === num2) { return true }
  if (num1.toString().length !== num2.toString().length) {
      return false
  }

  let sNum1 = num1.toString();
  let sNum2 = num2.toString();

  for (const i of sNum1) {
    if (sNum2.includes(i)) {
      null
    } else {
      return false
    }
  }
  return true
}

sameFrequency(987654321, 123456789)
