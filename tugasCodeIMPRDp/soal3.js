function divideAndSort(number) {
    const digits = String(number).split('0');
    const sortedDigits = digits.map(sortNumberDigits);
    return sortedDigits.join('');
  }
  
  function sortNumberDigits(number) {
    const sortedNumber = number.split('').sort((a, b) => a - b);
    return sortedNumber.join('');
  }
  
  // Contoh penggunaan
  const number = 90803120506;
  const separatedAndSorted = divideAndSort(number);
  console.log(separatedAndSorted);
  