
let totalSum = 0;
let oddCount = 0;
let evenCount = 0;


function checkOddEven(num) {
    if (num % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}


function checkDivisibility(num) {
    if (num % 3 === 0 && num % 5 === 0) {
        return "divisible by both 3 and 5";
    } else if (num % 3 === 0) {
        return "divisible by 3";
    } else if (num % 5 === 0) {
        return "divisible by 5";
    } else {
        return "not divisible by 3 or 5";
    }
}


for (let i = 5; i <= 15; i++) {
    
    totalSum = totalSum + i;

    
    let parity = checkOddEven(i);
    let divisibility = checkDivisibility(i);

    
    if (parity === "Even") {
        evenCount = evenCount + 1;
    } else {
        oddCount = oddCount + 1;
    }

    
      console.log("Number " + i + " is " + parity + " and " + divisibility);
}


console.log("--- Summary ---");
console.log("Total Sum: " + totalSum);
console.log("Odd Numbers Count: " + oddCount);
console.log("Even Numbers Count: " + evenCount);