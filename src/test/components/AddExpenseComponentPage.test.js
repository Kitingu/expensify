import React from 'react';
import { shallow } from 'enzyme';
import { AddExpenseComponentPage } from '../../components/AddExpenseComponentPage';
import expenses from '../fixtures/expenses';

let history, startAddExpense, wrapper;
beforeEach(() => {
	startAddExpense = jest.fn();
	history = { push: jest.fn() };
	wrapper = shallow(
		<AddExpenseComponentPage
			startAddExpense={startAddExpense}
			history={history}
		/>
	);
});
test('should render add expense page', () => {
	expect(wrapper).toMatchSnapshot();
});
test('should handle on submit', () => {
	wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1]);
	expect(history.push).toHaveBeenCalledWith('/');
	expect(startAddExpense).toHaveBeenLastCalledWith(expenses[1]);
});
