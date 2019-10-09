import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { addExpense } from '../actions/expenses';
export class AddExpenseComponentPage extends React.Component {
	onSubmit = (expense) => {
		this.props.addExpense(expense);
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
	addExpense: (expense) => dispatch(addExpense(expense))
});

// use a dispatch function function to make it easy to test the component
export default connect(
	undefined,
	mapDispatchToProps
)(AddExpenseComponentPage);
