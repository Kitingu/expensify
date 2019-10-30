import {
	addExpense,
	startAddExpense,
	editExpense,
	removeExpense,
} from '../../actions/expenses';
import expenses from '../fixtures/expenses';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const createMockStore = configureMockStore([thunk]);

test('edit expenses', () => {
	const result = editExpense(1, { createdAt: 123 });
	expect(result).toEqual({
		id: 1,
		updates: { createdAt: 123 },
		type: 'EDIT_EXPENSE',
	});
});

test('should remove remove an expense', () => {
	const action = removeExpense({ id: '123abc' });
	expect(action).toEqual({
		type: 'REMOVE_EXPENSE',
		id: '123abc',
	});
});

test('should setup add expense action object with provided values', () => {
	const action = addExpense(expenses[2]);
	expect(action).toEqual({
		type: 'ADD_EXPENSE',
		expense: expenses[2],
	});
});

test('should add expense to database and store', (done) => {
	const store = createMockStore({});
	const expenseData = {
		description: 'Mouse',
		amount: 3000,
		note: 'This one is better',
		createdAt: 1000,
	};

	store.dispatch(startAddExpense(expenseData)).then(() => {
		expect(1).toBe(1);
		done();
	});
});

test('should add expense with defaults to database and store', () => {});

// test('add expenses defaults', () => {
// 	const result = addExpense();
// 	expect(result).toEqual({
// 		expense: {
// 			amount: 0,
// 			createdAt: 0,
// 			description: '',
// 			id: expect.any(String),
// 			note: ''
// 		},
// 		type: 'ADD_EXPENSE'
// 	});
// });
