// Leap Year Checker
function isLeapYear(year) {
    if (year % 400 === 0) {
        return true;
    } else if (year % 100 === 0) {
        return false;
    } else if (year % 4 === 0) {
        return true;
    } else {
        return false;
    }
}

// Example usage:
console.log(isLeapYear(2020)); // true
console.log(isLeapYear(1900)); // false
console.log(isLeapYear(2000)); // true


// Recursion
// 1. Fibonacci Sequence
function fibonacci(n) {
    if (n === 0) return 0;
    if (n === 1) return 1;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

// Example usage:
console.log(fibonacci(6)); // 8
console.log(fibonacci(10)); // 55


// Palindrome Checker
function isPalindrome(str) {
    // Clean the string: remove non-alphanumeric and lowercase
    str = str.replace(/[^a-z0-9]/gi, '').toLowerCase();

    function check(start, end) {
        if (start >= end) return true;
        if (str[start] !== str[end]) return false;
        return check(start + 1, end - 1);
    }

    return check(0, str.length - 1);
}

// Example usage:
console.log(isPalindrome("Racecar")); // true
console.log(isPalindrome("A man, a plan, a canal, Panama")); // true
console.log(isPalindrome("Hello")); // false