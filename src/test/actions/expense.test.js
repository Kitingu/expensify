import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

test('add expenses', () => {
	const result = addExpense({
		description: 'note',
		amount: 5000,
		createdAt: 123
	});
	expect(result).toEqual({
		expense: {
			amount: 5000,
			createdAt: 123,
			description: 'note',
			id: expect.any(String),
			note: ''
		},
		type: 'ADD_EXPENSE'
	});
});
test('add expenses defaults', () => {
	const result = addExpense();
	expect(result).toEqual({
		expense: {
			amount: 0,
			createdAt: 0,
			description: '',
			id: expect.any(String),
			note: ''
		},
		type: 'ADD_EXPENSE'
	});
});
test('edit expenses', () => {
	const result = editExpense(1, { createdAt: 123 });
	expect(result).toEqual({
		id: 1,
		updates: { createdAt: 123 },
		type: 'EDIT_EXPENSE'
	});
});

test('should remove remove an expense', () => {
	const action = removeExpense({ id: '123abc' });
	expect(action).toEqual({
		type: 'REMOVE_EXPENSE',
		id: '123abc'
	});
});
