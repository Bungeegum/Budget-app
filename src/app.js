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
import 'react-dates/lib/css/_datepicker.css';
const store = configureStore();


//store.dispatch(setTextFilter('bill'));




const jsx= (  //set prop name store equal to redux store from above to use for app router
    //provider is set up so we can now use connect from redux
    <Provider store={store}> 
        <AppRouter />
    
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
