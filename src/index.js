
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

module.exports = {
    capitalize,
    reverseString,
    calculator
};