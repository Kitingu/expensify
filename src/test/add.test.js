// jest uses .test.js convention
const add = (x, y) => x + y;
const generateGreeting = (name) => `hello ${name}`;

test('should add two numbers', () => {
	const result = add(3, 4);
	expect(result).toBe(7);
});

test('should greet a user', () => {
	expect(generateGreeting('ben')).toBe('hello ben');
});
