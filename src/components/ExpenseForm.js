import React from "react";
import moment from "moment";
import { SingleDatePicker } from "react-dates";


const today = moment();
console.log(today.format("MMM Do , YYYY"));

export default class ExpenseForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            description: props.expense ? props.expense.description : "",
            note: props.expense ? props.expense.note : "",
            amount: props.expense
                ? (props.expense.amount / 100).toString()
                : "",
            createdAt: props.expense
                ? moment(props.expense.createdAt)
                : moment(),
            calendarFocused: false,
            error: ""
        };
    }

    s;
    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(() => ({ description }));
    };
    onNoteChange = (e) => {
        const note = e.target.value;
        this.setState(() => ({ note }));
    };
    onAmountChange = (e) => {
        const amount = e.target.value;
        // allows to clear values and set values that match the regex
        if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
            this.setState(() => ({ amount }));
        }
    };
    onDateChange = (createdAt) => {
        //make sure that the date cannot be deleted
        if (createdAt) {
            this.setState(() => ({ createdAt }));
        }
    };

    onFocusChange = ({ focused }) => {
        this.setState(() => ({ calendarFocused: focused }));
    };
    onSubmit = (e) => {
        e.preventDefault();

        if (!this.state.description || !this.state.amount) {
            // set errorState
            this.setState(() => ({
                error: "please provide description and amount"
            }));
        } else {
            // clear the error
            this.setState(() => ({
                error: ""
            }));
            //parses this object to create form on submit as a prop for create or edit expense
            this.props.onSubmit({
                description: this.state.description,
                amount: parseFloat(this.state.amount, 10) * 100,
                createdAt: this.state.createdAt.valueOf(),
                note: this.state.note
            });
        }
    };
    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.onSubmit}>
                    <input
                        type="text"
                        placeholder="Description"
                        autoFocus
                        value={this.state.description}
                        onChange={this.onDescriptionChange}
                    ></input>
                    <input
                        type="text"
                        value={this.state.amount}
                        placeholder="Amount"
                        onChange={this.onAmountChange}
                    ></input>
                    <SingleDatePicker
                        date={this.state.createdAt}
                        onDateChange={this.onDateChange}
                        focused={
                            this.state.calendarFocused
                        } /** this is set to true when the calendar picker button is pressed */
                        onFocusChange={this.onFocusChange}
                        numberOfMonths={
                            1
                        } /* sets number of months visible on the date picker */
                        isOutsideRange={() =>
                            false
                        } /*allows use of previous dates */
                    />
                    <textarea
                        placeholder="Add a note for your expense (optional)"
                        value={this.state.note}
                        onChange={this.onNoteChange}
                    ></textarea>
                    <button>Add Expense</button>
                </form>
            </div>
        );
    }
}
