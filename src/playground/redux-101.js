import { createStore } from "redux";

// {incrementBy} destructure incoming object and set default value to 1
// ={}) set the increment argument to an empty object if not parsed in
const incrementCount = ({ incrementBy = 1 }={}) => ({
  type: "INCREMENT",
  incrementBy
});

const decrementCount = ({ decrementBy = 1 }={}) => ({
  type: "DECREMENT",
  decrementBy
});

const setCount = () => ({
  type: "SET",
  count: 101
});

const resetCount = () => ({
  type: "RESET"
});

const countReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        count: state.count + action.incrementBy
      };
    case "DECREMENT":
      return {
        count: state.count - action.decrementBy
      };

    case "SET":
      return {
        count: action.count
      };
    case "RESET":
      return {
        count: (state.count = 0)
      };

    default:
      return state;
  }
};

const store = createStore(countReducer)

// store.subscribe(() => {
//   console.log(store.getState());
// });

const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(incrementCount({ incrementBy: 5 }));
store.dispatch(incrementCount());
store.dispatch(decrementCount({ decrementBy: 2 }));
store.dispatch(decrementCount({ decrementBy: 2 }));
store.dispatch(setCount())
store.dispatch(resetCount())
// unsubscribe()

store.dispatch({
  type: "RESET"
});
