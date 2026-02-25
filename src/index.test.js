import {capitalize, reverseString,calculator} from './index';

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
