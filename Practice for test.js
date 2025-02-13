//Fibonacci series

  // function fibonacciSeries1(n) {
  //   if (n<=0) return[];
  //   if (n===1) return[0];
  //   const series1 = [0,1]
  //   for( let i =2; i<n; i++) {
  //       series1.push(series1[i-1]+series1[i-2])
  //   }
  //   return series1
  // }
  // const numTerms1=20
  // console.log("The fibonacci series for the number",numTerms1,"is",fibonacciSeries1(numTerms1))



//Toogle case for entire sentence

  // function toggleCase1(str1){
  //   return str1.split('').map(char1 => {
  //       if (char1===char1.toUpperCase()) {
  //           return char1.toUpperCase()
  //       } else {
  //           return char1.toLowerCase()
  //       }
  //   }).join('')
  // }
  
  // const input1 = "The quick Brown FoX"
  // console.log(toggleCase1(input1));

  
//Makes all the words start with a capital letter

// function toTitleCase(str) {
//     return str
//       .split(' ')                   
//       .map(word => {
//         return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
//       })
//       .join(' ');                  
//   }
//   const input = "Welcome home buddy, hope you are fine";
//   const output = toTitleCase(input);
//   console.log(output);

//   function toTitleCase1(str1) {
//     let words = str1.split(' ');
//     for (let i = 0; i < words.length; i++) {
//         words[i] = words[i][0].toUpperCase() + words[i].slice(1).toLowerCase(); 
//     }
//     return words.join(' '); 
// }
// const input1 = "Welcome home buddy, hope you are fine";
// const output = toTitleCase(input);
// console.log(output);



//string transformation reverse the strig values in a sentence without changing the position of the word in 
// the sentence and also make sure to keep India as it is

// function transformString(input) {
//     return input
//       .split(' ') 
//       .map(word => {
//         if (word === "Indian", word === "We") {
//           return word;
//         }
//         return word.split('')     
//                    .reverse()     
//                    .join('')      
                   
//       })
//       .join(' '); 
//   }
//   const stringName = "We love Indian Food";
//   console.log(transformString(stringName));


//   //Armstrong number
// sum of induvidual digits when they are raised to the power of the number of di

  // function isArmstrong(num) {
  //   const digits = num.toString().split('');
  //   const power = digits.length; 
  //   let sum = 0;
  
  //   for (let digit of digits) {
  //     sum += Math.pow(Number(digit), power);
  //   }
  
  //   return sum === num;
  // }
  
  // const number = 153; // 1^3+5^3+3^3=153
  // if (isArmstrong(number)) {
  //   console.log("The given number", number, "is an Armstrong number.")
  // } else {
  //   console.log("The given number", number, "is not an Armstrong number.")
  // }
  

// //Find the digit count and then add the digits

// function analyzeNumber(num) {
//   const numStr = num.toString();
  
//   const digitCount = numStr.length;
  
//   const sumOfDigits = numStr
//     .split('') 
//     .reduce((sum, digit) => sum + Number(digit), 0);
  
//   return { digitCount, sumOfDigits };
// }

// const number = 14567;
// const result = analyzeNumber(number);
// console.log("Digit Count:" result.digitCount);    
// console.log("Sum of Digits:"result.sumOfDigits); 


// //Find if the number is odd or even

// function isEven(num) {
//   return num % 2 === 0;
// }

// const number = 42;
// if (isEven(number)) {
//   console.log(`${number} is even`);
// } else {
//   console.log(`${number} is odd`);
// }

  

// //Find the number of capital, small, vowel, consonant, and special charecter in a string.

// function analyzeString(str) {
//   let capitalCount = 0;
//   let smallCount = 0;
//   let vowelCount = 0;
//   let consonantCount = 0;
//   let specialCount = 0;
  
//   const vowels = "aeiouAEIOU";
  
//   for (let char of str) {
//     if (char >= 'A' && char <= 'Z') {
//       capitalCount++;
//       if (vowels.includes(char)) {
//         vowelCount++;
//       } else {
//         consonantCount++;
//       }
//     }
//     else if (char >= 'a' && char <= 'z') {
//       smallCount++;
//       if (vowels.includes(char)) {
//         vowelCount++;
//       } else {
//         consonantCount++;
//       }
//     }
//     else {
//       specialCount++;
//     }
//   }
  
//   return {
//     Capital: capitalCount,
//     Small: smallCount,
//     Vowel: vowelCount,
//     Consonant: consonantCount,
//     SpecialCharacters: specialCount
//   };
// }

// const input = "Today is Sunday and we are went for a trip.";

// const result = analyzeString(input);
// console.log(result);


// // //Duplicate values in a string

// // function findDuplicates(str) {
// //     const frequency = {};
// //     const duplicates = [];
    
// //     for (let char of str) {
// //       frequency[char] = (frequency[char] || 0) + 1;
// //     }
    
// //     for (let char in frequency) {
// //       if (frequency[char] > 1) {
// //         duplicates.push(char);
// //       }
// //     }
    
// //     return duplicates;
// //   }
  
// //   const input = "apple";
// //   const duplicateChars = findDuplicates(input);
// //   console.log(duplicateChars);
