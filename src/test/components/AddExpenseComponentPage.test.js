import React from 'react';
import { shallow } from 'enzyme';
import { AddExpenseComponentPage } from '../../components/AddExpenseComponentPage';
import expenses from '../fixtures/expenses';

let history, addExpense, wrapper;
beforeEach(() => {
	addExpense = jest.fn();
	history = { push: jest.fn() };
	wrapper = shallow(
		<AddExpenseComponentPage addExpense={addExpense} history={history} />
	);
});
test('should render add expense page', () => {
	expect(wrapper).toMatchSnapshot();
});
test('should handle on submit', () => {
	wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1]);
	expect(history.push).toHaveBeenCalledWith('/');
	expect(addExpense).toHaveBeenLastCalledWith(expenses[1]);
});
