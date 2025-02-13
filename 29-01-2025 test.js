//prime number or not
function primnum(a) {
    if (a <= 1) return false;
    if (a <= 3) return true;
    
    if (a % 2 === 0 || a % 3 === 0) return false;
    
    for (let i = 5; i * i <= a; i += 6) {
        if (a % i === 0 || a % (i + 2) === 0) return false;
    }
    
    return true;
}

console.log(primnum(8));

//even number or odd number
function evenorodd(b) {
    if (b % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}
console.log(evenorodd(12))

//reverse of a string
let str = "GOOD DAY";
let horreversestring = "";

for (let i = str.length - 1; i >= 0; i--) {
    console.log(str[i]);
}


for (let i = str.length - 1; i >= 0; i--) {
    horreversestring += str[i];
}


console.log(horreversestring);


