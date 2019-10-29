import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { startAddExpense } from '../actions/expenses';
export class AddExpenseComponentPage extends React.Component {
	onSubmit = (expense) => {
		this.props.startAddExpense(expense);
		this.props.history.push('/');
	};
	render() {
		return (
			<div>
				<h1>Add expense</h1>
				<ExpenseForm onSubmit={this.onSubmit} />
			</div>
		);
	}
}
const mapDispatchToProps = (dispatch) => ({
	startAddExpense: (expense) => dispatch(startAddExpense(expense)),
});

// use a dispatch function function to make it easy to test the component
export default connect(
	undefined,
	mapDispatchToProps
)(AddExpenseComponentPage);
