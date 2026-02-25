
function capitalize(str) {
    if (str.length === 0) {
        return "";
    }
    return str.charAt(0).toUpperCase() + str.slice(1);
}
function reverseString(str) {
    return str.split("").reverse().join("");
}
function calculator(a, b, operator) {
    if (typeof a !== "number" || typeof b !== "number") {
        return "Error: Not a number";
    }
    switch (operator) {
        case "+":
            return a + b;
        case "-":
            return a - b;
        case "*":
            return a * b;
        case "/":
            if (b === 0) {
                return "Error: Division by zero";
            }
            return a / b;
        default:
            return "Error: Invalid operator";
    }
}   

function caesarCipher(str, shift) {
    return str.split("").map((element) => 
    {
        if (element >= "a" && element <= "z") {
            return String.fromCharCode((element.charCodeAt(0) - 97 + shift) % 26 + 97);
        } else if (element >= "A" && element <= "Z") {
            return String.fromCharCode((element.charCodeAt(0) - 65 + shift) % 26 + 65);
        } else {
            return element;
        }
    }).join("");
 
}
function analyzeArray(arr) {
    if (!Array.isArray(arr)) {
        return "Error: Not an array";
    }
    if (arr.includes(undefined) || arr.includes(null) || !arr.every(element => typeof element === "number")) {
        return "Error: Not a valid array";
    }
    if (arr.length === 0) {
        return {
            average: null,
            min: null,
            max: null,
            length: 0
        };
    }
    const sum = arr.reduce((acc, val) => acc + val, 0);
    const average = sum / arr.length;
    const min = Math.min(...arr);
    const max = Math.max(...arr);
    return {
        average,
        min,
        max,
        length: arr.length
    };
}

module.exports = {
    capitalize,
    reverseString,
    calculator,
    caesarCipher,
    analyzeArray
};