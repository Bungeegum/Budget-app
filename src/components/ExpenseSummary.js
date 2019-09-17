import React from 'react';
import TotalExpense from '../selectors/expenses-total';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import numeral from 'numeral';
import selectExpenses from '../selectors/expenses';

export const ExpenseSummary= (props)=>{
    length = props.ItemsLength
    const expenseWord = length===1  ? 'expense':'expenses'
    return (
    <div className="page-header">
        <div className="content-container">
            {props.ItemsLength===0 ? '':<h1 className="page-header__title"> Summary: Viewing <span>{props.ItemsLength}</span> {expenseWord} totaling <span>{numeral(props.total/100).format('$0,0.00')}</span> </h1>}
            <div className="page-header__actions">
                <Link className="button" to="/create"> Add Expense</Link>
            </div>
        </div>
        
    </div>

    )}//

const mapStateToProps = (state)=>{
    const visibleExpenses= selectExpenses(state.expenses,state.filters)
    return{
       //call total function to pass it in as a prop
       total:TotalExpense(state.expenses),
       ItemsLength: visibleExpenses.length
   };
};


export default connect(mapStateToProps)(ExpenseSummary);