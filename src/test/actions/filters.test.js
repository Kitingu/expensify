import {
	setStartDate,
	setEndDate,
	sortByDate,
	sortByAmount,
	setTextFilter
} from '../../actions/filters';
import moment from 'moment';

test('should generate set start date action', () => {
	const action = setStartDate(moment(0));
	expect(action).toEqual({
		startDate: moment(0),
		type: 'SET_START_DATE'
	});
});

test('should sort by date', () => {
	const action = sortByDate(moment(0));
	expect(action).toEqual({
		type: 'SORT_BY_DATE'
	});
});

test('should sort by amount', () => {
	const action = sortByAmount(5000);
	expect(action).toEqual({
		type: 'SORT_BY_AMOUNT'
	});
});

test('should set filter text', () => {
	const action = setTextFilter('water');
	expect(action).toEqual({
		text: 'water',
		type: 'SET_TEXT_FILTER'
	});
});

test('should set filter text with default value', () => {
	expect(setTextFilter()).toEqual({
		text: '',
		type: 'SET_TEXT_FILTER'
	});
});

test('should generate set end date action', () => {
	const action = setEndDate(moment(0));
	expect(action).toEqual({
		endDate: moment(0),
		type: 'SET_END_DATE'
	});
});
