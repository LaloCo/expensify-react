const add = (a, b) => a + b;
const generateGreeting = (name = "Anonymous") => `Hello ${name}!`;

test('should add two numbers', () => {
    const result = add(3, 4);
    expect(result).toBe(7);
});

test('should generate greeting with name', () => {
    const greeting = generateGreeting("Eduardo");
    expect(greeting).toBe("Hello Eduardo!");
});

test('should generate greeting with default name', () => {
    const greeting = generateGreeting();
    expect(greeting).toBe("Hello Anonymous!");
});
