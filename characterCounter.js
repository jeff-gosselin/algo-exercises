const characterCounter = (str) => {
  let lowStr = str.toLowerCase();
  let obj = {};

  for (let i = 0; i < str.length; i++) {
    if (lowStr.charAt(i) !== " ") {
      let letter = lowStr.charAt(i);
      if (letter in obj) { obj[letter] += 1 }
      else { obj[letter] = 1 }
    }
  }
  return obj
}

characterCounter("Sally sells shells by the seashore")
