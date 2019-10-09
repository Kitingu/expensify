import uuid from "uuid";
export const addExpense = ({
  description = "",
  note = "",
  amount = 0,
  createdAt = 0
} = {}) => ({
  type: "ADD_EXPENSE",
  expense: {
    id: uuid(),
    description,
    note,
    amount,
    createdAt
  }
});
// remove expense
export const removeExpense = ({ id } = {}) => ({
  type: "REMOVE_EXPENSE",
  id
});

//edit expense
export const editExpense = (id, updates) => ({
  type: "EDIT_EXPENSE",
  id,
  updates
});

const setTextFilter = (text = "") => ({
  type: "SET_TEXT_FILTER",
  text
});

// sort by amount
const sortByAmount = () => ({
  type: "SORT_BY_AMOUNT"
});

// sort by date
const sortByDate = () => ({
  type: "SORT_BY_DATE"
});

//set start date
const setStartDate = startDate => ({
  type: "SET_START_DATE",
  startDate
});

//set end date
const setEndDate = endDate => ({
  type: "SET_END_DATE",
  endDate
});
