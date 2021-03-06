import database from '../firebase/firebase';
export const addExpense = (expense) => ({
	type: 'ADD_EXPENSE',
	expense,
});

export const startAddExpense = (expenseData = {}) => {
	return (dispatch) => {
		// set defaults in a destructure
		const {
			description = '',
			note = '',
			amount = 0,
			createdAt = 0,
		} = expenseData;
		// create an obj that will be pushed to db
		const expense = { description, note, amount, createdAt };
		return database
			.ref('expenses')
			.push(expense)
			.then((ref) => {
				dispatch(
					addExpense({
						id: ref.key,
						...expense,
					})
				);
			});
	};
};

// remove expense
export const removeExpense = ({ id } = {}) => ({
	type: 'REMOVE_EXPENSE',
	id,
});

//edit expense
export const editExpense = (id, updates) => ({
	type: 'EDIT_EXPENSE',
	id,
	updates,
});

const setTextFilter = (text = '') => ({
	type: 'SET_TEXT_FILTER',
	text,
});

// sort by amount
const sortByAmount = () => ({
	type: 'SORT_BY_AMOUNT',
});

// sort by date
const sortByDate = () => ({
	type: 'SORT_BY_DATE',
});

//set start date
const setStartDate = (startDate) => ({
	type: 'SET_START_DATE',
	startDate,
});

//set end date
const setEndDate = (endDate) => ({
	type: 'SET_END_DATE',
	endDate,
});

// SET_EXPENSES
export const setExpenses = (expenses) => ({
	type: 'SET_EXPENSES',
	expenses,
});

export const startSetExpenses = () => {
	return (dispatch) => {
		return database
			.ref('expenses')
			.once('value')
			.then((snapshot) => {
				const expenses = [];

				snapshot.forEach((childSnapshot) => {
					expenses.push({
						id: childSnapshot.key,
						...childSnapshot.val(),
					});
				});

				dispatch(setExpenses(expenses));
			});
	};
};
