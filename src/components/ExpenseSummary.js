import React from 'react';
import TotalExpense from '../selectors/expenses-total';
import {connect} from 'react-redux';
import numeral from 'numeral';
import selectExpenses from '../selectors/expenses';

const ExpenseSummary= (props)=>{
    length = props.ItemsLength
    const expenseWord = length===1  ? 'expense':'expenses'
    return (
    <div>
        {props.ItemsLength===0 ? '':<p> Summary: Viewing {props.ItemsLength} {expenseWord} totaling {numeral(props.total/100).format('$0,0.00')} </p>}
        
        
    </div>

    )}

const mapStateToProps = (state)=>{
    const visibleExpenses= selectExpenses(state.expenses,state.filters)
    return{
       //call total function to pass it in as a prop
       total:TotalExpense(state.expenses),
       ItemsLength: visibleExpenses.length
   };
};


export default connect(mapStateToProps)(ExpenseSummary);