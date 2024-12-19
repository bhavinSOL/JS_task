function data(){

    const vale = document.getElementById('val').value;
    const selected = document.getElementById('division').value
    const vale2=document.getElementById('val2').value

    switch(selected){
        case "1":
            checkNumber(vale)
            break;
        case "2":
            sumOfNaturalNumbers(vale)
            break;
        case "3":
            factorial(vale)
            break;
        case "4":
            findFactors(vale)
            break;
        case "5":
            isPrime(vale)
            break;
        case "6":
            generateFibonacci(vale)
            break;
        case "7":
            isPalindrome(vale)
            break;
        case "8":
            sumOfDigits(vale)
            break;
        case "9":
            isArmstrong(vale)
            break;
        case "10":  
            isLeapYear(vale)
            break;
        case "11":  
            gcd(vale,vale2)
            break;
        case "12":  
            lcm(vale,vale2)
            break;
        case "13":  
            gcdValue(vale,vale2)
            break;
    }

    // Check if a number is even or odd and positive, negative, or zero
function checkNumber(num) {
    let new_data=""
    console.log(num % 2 === 0 ? new_data="Even" : new_data="odd");
    if (num > 0){ 
        
        document.getElementById('Result').innerText =` Positive and  ${new_data}`
        
    }
    else if (num < 0){ 
        
        document.getElementById('Result').innerText =`Nagative and ${new_data} `
    }
    else {
         
         document.getElementById('Result').innerText =`Zero and ${new_data} `
    }
}


// Calculate the sum of the first N natural numbers
function sumOfNaturalNumbers(N) {
    let a= (N * (N + 1)) / 2;
    document.getElementById('Result').innerText =`${a}`
}

// Calculate the factorial of a given number
function factorial(num) {
    let a;
    if (num === 0 || num === 1) { 
        a= 1}
    else{
        a= num * factorial(num - 1);}
    document.getElementById('Result').innerText =`${a}`
}

// Find factors of a given number
function findFactors(num) {
    const factors = [];
    for (let i = 1; i <= num; i++) {
        if (num % i === 0) factors.push(i);
    }
    let a= factors;
    document.getElementById('Result').innerText =`${a}`
}

// Check if a number is prime
function isPrime(num) {
    if (num <= 1) {
        let a= false;}
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0){a= false;}
        else {a= true;}
    }
    document.getElementById('Result').innerText =`${a}`
}

// Generate the Fibonacci sequence up to N terms
function generateFibonacci(N) {
    const sequence = [0, 1];
    for (let i = 2; i < N; i++) {
        sequence.push(sequence[i - 1] + sequence[i - 2]);
    }
    
    document.getElementById('Result').innerText =`${sequence.slice(0, N)}`
}

// Check if a string is a palindrome
function isPalindrome(str) {
    const reversed = str.split('').reverse().join('');
    // console.log(str === reversed);
    document.getElementById('Result').innerText =`${str === reversed}`
}

// Find the sum of digits of a number
function sumOfDigits(num) {
    const sum = num.toString().split('').reduce((sum, digit) => sum + parseInt(digit), 0);
    // console.log(sum);
    document.getElementById('Result').innerText =`${sum}`
}

// Check if a number is an Armstrong number
function isArmstrong(num) {
    const digits = num.toString().split('');
    const sum = digits.reduce((acc, digit) => acc + Math.pow(parseInt(digit), digits.length), 0);
    // console.log(sum === num);
    document.getElementById('Result').innerText =`${sum === num}`
}

// Check if a year is a leap year
function isLeapYear(year) {
    // console.log((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0));
    document.getElementById('Result').innerText =`${(year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)}`
}

// Find the greatest common divisor (GCD) of two numbers
function gcd(a, b) {
    while (b !== 0) {
        const temp = b;
        b = a % b;
        a = temp;
    }
    document.getElementById('Result').innerText =`${a}`
}

// Find the least common multiple (LCM) of two numbers
function lcm(a, b) {
    console.log((a * b) / gcdValue(a, b));
    document.getElementById('Result').innerText =`${(a * b) / gcdValue(a, b)}`
}

// Helper function for GCD used by LCM
function gcdValue(a, b) {
    while (b !== 0) {
        const temp = b;
        b = a % b;
        a = temp;
    }
    document.getElementById('Result').innerText =`${a}`
    
}

// Check if two strings are anagrams
function areAnagrams(str1, str2) {
    const normalize = str => str.toLowerCase().split('').sort().join('');
    console.log(normalize(str1) === normalize(str2));
}
}

document.addEventListener("DOMContentLoaded", () => {
    // Function to handle dropdown selection
    function handleSelect() {
        const selectedValue = document.getElementById('division').value;
        const extraInput = document.getElementById('extraInput');
        
        if (selectedValue === "11" || selectedValue === "12" ||selectedValue === "13") {
            // Show additional input for LCM or GCD
            extraInput.innerHTML = `
                <label for="val2">Enter second value:
                    <input type="text" id="val2" placeholder="Enter second value">
                </label>`;
        } else {
            // Clear additional input for other options
            extraInput.innerHTML = '';
        }
    }
    window.handleSelect = handleSelect;
    window.data = data;
});
