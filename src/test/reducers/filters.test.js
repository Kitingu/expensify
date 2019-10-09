import filtersReducer from '../../reducers/filters';
import moment from 'moment';

test('should setup default filter values', () => {
	const state = filtersReducer(undefined, {
		type: '@@INIT',
	});
	expect(state).toEqual({
		text: '',
		sortBy: 'date',
		startDate: moment().startOf('month'),
		endDate: moment().endOf('month'),
	});
});

test('should set sort by to amount', () => {
	const state = filtersReducer(undefined, {
		type: 'SORT_BY_AMOUNT',
	});
	expect(state.sortBy).toBe('amount');
});

test('should set sort by to date', () => {
	const currentState = {
		text: '',
		sortBy: 'amount',
		startDate: undefined,
		endDate: undefined,
	};
	const action = { type: 'SORT_BY_DATE' };
	const state = filtersReducer(currentState, action);
	expect(state.sortBy).toBe('date');
});
test('should set text filter ', () => {
	const state = filtersReducer(undefined, {
		type: 'SET_TEXT_FILTER',
		text: 'water',
	});
	expect(state.text).toBe('water');
});

test('should set start date filter', () => {
	const startDate = moment();
	const state = filtersReducer(undefined, {
		type: 'SET_START_DATE',
		startDate,
	});
	expect(state.startDate).toBe(startDate);
});

test('should set end date filter ', () => {
	const endDate = moment();
	const state = filtersReducer(undefined, {
		type: 'SET_END_DATE',
		endDate,
	});
	expect(state.endDate).toBe(endDate);
});
