import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();

store.dispatch(addExpense({ description: 'Water bill',amount:300 }));
store.dispatch(addExpense({ description: 'Rent',createdAt:1000 }));
store.dispatch(addExpense({ description: 'Gas bill', amount:5000 }));
//store.dispatch(setTextFilter('bill'));


const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);

const jsx= (  //set prop name store equal to redux store from above to use for app router
    //provider is set up so we can now use connect from redux
    <Provider store={store}> 
        <AppRouter />
    
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));