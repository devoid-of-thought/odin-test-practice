import {capitalize, reverseString,calculator,caesarCipher, analyzeArray} from './index';

test("Empty string should return empty string", () => {
    expect(capitalize("")).toBe("");
});
test("First letter should be capitalized", () => {
    expect(capitalize("hello world!")).toBe("Hello world!");
});
test("String should be reversed", () => {
    expect(reverseString("hello world!")).toBe("!dlrow olleh");
});

test("Reversed string should be empty for empty input", () => {
    expect(reverseString("")).toBe("");
});

test("Calculate 1+1", () => {
    expect(calculator(1, 1, "+")).toBe(2);
});
test("Calculate 5-2", () => {
    expect(calculator(5, 2, "-")).toBe(3);
});
test("Calculate 3*4", () => {
    expect(calculator(3, 4, "*")).toBe(12);
});
test("Calculate 10/2", () => {
    expect(calculator(10, 2, "/")).toBe(5);
}); 

test("Calculate division by zero", () => {
    expect(calculator(10, 0, "/")).toBe("Error: Division by zero");
});
test("Calculate with invalid operator", () => {
    expect(calculator(10, 5, "%")).toBe("Error: Invalid operator");
});

test("Calculate with non-numeric input", () => {
    expect(calculator("a", "b", "+")).toBe("Error: Not a number");
});

test("Cipher for empty should return empty",()=>{
    expect(caesarCipher("",5)).toBe("");
});
test("Cipher for a letter should return its shifted value",()=>{
    expect(caesarCipher("a",6)).toBe("g");
});
test("Cipher for xyz should return abc", ()=>{
    expect(caesarCipher("xyz",3)).toBe("abc");
});
test("Cipher for HeLLo should return KhOOr", ()=>{
    expect(caesarCipher("HeLLO",3)).toBe("KhOOR");
});
test("Cipher for Hello, World! should return Khoor, Zruog!", ()=>{
    expect(caesarCipher("Hello, World!",3)).toBe("Khoor, Zruog!");
});

test("Analyze array with positive numbers", () => {
    expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
        average: 4,
        min: 1,
        max: 8,
        length: 6
    });
});
test("Analyze array with negative numbers", () => {
    expect(analyzeArray([-1, -8, -3, -4, -2, -6])).toEqual({
        average: -4,
        min: -8,
        max: -1,
        length: 6
    });
});
test("Analyze array with mixed numbers", () => {
    expect(analyzeArray([-1, 0, 1])).toEqual({
        average: 0,
        min: -1,
        max: 1,
        length: 3
    });
});
test("Analyze empty array", () => {
    expect(analyzeArray([])).toEqual({
        average: null,
        min: null,
        max: null,
        length: 0
    });
});
test("Analyze array with one element", () => {
    expect(analyzeArray([5])).toEqual({
        average: 5,
        min: 5,
        max: 5,
        length: 1
    });
});
test("Analyze not an array", () => {
    expect(analyzeArray("not an array")).toEqual("Error: Not an array");
});
test("Analyze array with undefined or null", () => {
    expect(analyzeArray([1, 2, undefined])).toEqual("Error: Not a valid array");
    expect(analyzeArray([1, 2, null])).toEqual("Error: Not a valid array");
});
test("Analyze array with non-numeric values", () => {
    expect(analyzeArray([1, 2, "three"])).toEqual("Error: Not a valid array");
});
