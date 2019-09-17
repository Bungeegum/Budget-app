import React from 'react';
import {connect} from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';

//connects this component to the redux store

const ExpenseList = (props) => (

    <div className="content-container">

        <div className="list-header">
            <div className="show-desktop">Expense</div>
            <div className="show-mobile">Expenses</div>
            <div className="show-desktop">Amount</div>
        </div>
        
        {props.expenses.map((expense) => {
            return <ExpenseListItem key={expense.id}{...expense} />
        })}
    </div>
);//k f

//grabs the data from the store and maps it to it's own props for other component to use
const mapStateToProps = (state)=>{
    return{
        //run it through the filter
        expenses:selectExpenses(state.expenses,state.filters)
        
    };
};
export default connect(mapStateToProps)(ExpenseList);




