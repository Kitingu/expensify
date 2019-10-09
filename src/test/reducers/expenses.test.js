import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should set default state', () => {
	const state = expensesReducer(undefined, { type: '@@INIT' });
	expect(state).toEqual([]);
});

test('should remove expense by id', () => {
	const action = {
		type: 'REMOVE_EXPENSE',
		id: expenses[1].id,
	};
	const state = expensesReducer(expenses, action);
	expect(state).toEqual([expenses[0], expenses[2]]);
});

test('should not remove expense id id not found', () => {
	const action = {
		type: 'REMOVE_EXPENSE',
		id: 8,
	};
	const state = expensesReducer(expenses, action);
	expect(state).toEqual(expenses);
});
test('should add expense', () => {
	const action = {
		type: 'ADD_EXPENSE',
		expense: {
			id: 100,
			description: 'coffee',
			amount: 2500,
			createdAt: 1000,
			note: '',
		},
	};
	const state = expensesReducer(expenses, action);
	expect(state).toEqual([
		...expenses,
		{
			id: 100,
			amount: 2500,
			createdAt: 1000,
			description: 'coffee',
			note: '',
		},
	]);
});

test('should edit expense by id', () => {
	const action = {
		type: 'EDIT_EXPENSE',
		id: expenses[2].id,
		updates: {
			note: 'this is it',
		},
	};
	const state = expensesReducer(expenses, action);
	expect(state[2].note).toBe('this is it');
});
test('should not edit expense that does not exist', () => {
	const action = {
		type: 'EDIT_EXPENSE',
		id: 12,
		updates: {
			note: 'this is it',
		},
	};
	const state = expensesReducer(expenses, action);
	expect(state).toEqual(expenses);
});
