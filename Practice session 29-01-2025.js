//Palindrome
function isPalindrome(value) {
    const cleanedValue = value.toString().toLowerCase().replace(/[^a-z0-9]/g, '');
    
    const reversedValue = cleanedValue.split('').reverse().join('');
    
    return cleanedValue === reversedValue;
}

console.log(isPalindrome("racecar"));
console.log(isPalindrome("hello"));
console.log(isPalindrome("A man, a plan, a canal, Panama"));
