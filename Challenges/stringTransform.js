function transformString(str) {
  const length = str.length;

  if (length % 15 === 0) {
      // Length divisible by both 3 and 5 (i.e., 15)
      const reversedStr = str.split('').reverse().join('');
      // Then replace each character with its ASCII code
      return reversedStr.split('').map(char => char.charCodeAt(0)).join(' ');
  } else if (length % 5 === 0) {
      // Length divisible by 5
      return str.split('').map(char => char.charCodeAt(0)).join(' ');
  } else if (length % 3 === 0) {
      // Length divisible by 3
      return str.split('').reverse().join('');
  }

  // Return the string as is if none of the conditions are met
  return str;
}

// Given Examples to test:
console.log(transformString("Hamburger")); // Output: "regrubmaH"
console.log(transformString("Pizza")); // Output: "80 105 122 122 97"
console.log(transformString("Chocolate Chip Cookie")); // Output: "eikooCpihCetalocohC"
console.log(transformString("Regular")); // Output: "Regular"
