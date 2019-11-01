import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configure-store';
import getVisibleExpenses from './selectors/expenses';
import './styles/style.scss';
import 'normalize.css/normalize.css';
import 'react-dates/lib/css/_datepicker.css';
import { startSetExpenses } from "./actions/expenses";

const store = configureStore();

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);
const jsx = (
	<Provider store={store}>
		<AppRouter />
	</Provider>
);
ReactDOM.render(<p>loading ...</p>, document.getElementById('app'));
store.dispatch(startSetExpenses()).then(()=>{
	ReactDOM.render(jsx, document.getElementById('app'));
})

