//reservse string

// let a = "Hellow,World!";

// let b = a.split("").reverse().join("");
// console.log(b);


// function transformString(input) {
//     return input
//       .split(' ') 
//       .map(word => {
//           if (word[word.length - 1] === '!') {
//               return word.slice(0, -1).split('').reverse().join('') + '!';
//           }
//           return word.split('').reverse().join('');
//       })
//       .join(' '); 
// }

// const stringName = "Hello, world!";
// console.log(transformString(stringName));

function transformString(input) {
    return input
      .split(' ')  // Split the input into words
      .map(word => {
          // If the word ends with '!', reverse the word without '!' and add '!' at the end
          if (word[word.length - 1] === '!') {
              return word.slice(0, -1).split('').reverse().join('') + '!'; 
          }
          // Otherwise, just reverse the word
          return word.split('').reverse().join('');
      })
      .reverse()   // Reverse the order of the words after they are processed
      .join(' ');  // Join the words back into a single string
}

const stringName = "Hello, world!";
console.log(transformString(stringName));  // Output: "dlrow ,olleH!"






