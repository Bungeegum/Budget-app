import {createStore,combineReducers} from 'redux'
import uuid from 'uuid';



//add expense
const addExpense=(
    {
        description='',
        note='',
        amount=0,
        createdAt=0
    }={}
) => ({
    type:'ADD_EXPENSE',
    expense:{
        id:uuid(),
        description,
        note,
        amount,
        createdAt
    }
});

//Remove expense
const removeExpense=({id}={})=>({

    type:'REMOVE_EXPENSE',
    id

});

//SORT_BY
const sortByAmount=()=>({
    type:'SORT_BY_AMOUNT',
    

});

//sort_BY DATE
const sortByDate=()=>({
    type:'SORT_BY_DATE',
    
});

//START_DATE
const setStartDate=(startDate)=>({
    type:'START_DATE',
    startDate
});

//SET_END_DATE
const endDate=(endDate)=>({
    type:'END_DATE',
    endDate
});


//EDIT_EXPENSE
const editExpense=(id,updates)=>({
    type:'EDIT_EXPENSE',
    id,
    updates

});

//set text
const setTextFilter=(text='')=>({
    type:'SET_TEXT',
    text
});


//expenses reducer
const expensesReducerDefaultState=[];

const expensesReducer= (state=expensesReducerDefaultState,action)=>{

    switch(action.type){
        case 'ADD_EXPENSE':
            return [
                ...state,action.expense
            ];

        case 'REMOVE_EXPENSE':
            return state.filter(({id})=> id!==action.id);
            
        case 'EDIT_EXPENSE':
            return state.map((expense)=>{
                if(expense.id===action.id){
                    return {
                        ...expense,
                        ...action.expense

                    }
                }else{
                    return expense;
                }
            })
        default:
            return state;
    }
};

//filters reducer

const filtersReducerDefaultState={

    text:'',
    sortBy:'',
    startDate:undefined,
    endDate:undefined
};

const filtersReducer = (state= filtersReducerDefaultState, action )=>{
    switch(action.type){
        case 'SET_TEXT':
        return {
            ...state,
            text:action.text
        }
        case 'SORT_BY_AMOUNT':
            return{
                ...state,
                sortBy:'amount'
            }
        case 'SORT_BY_DATE':
            return{
                ...state,
                sortBy:'date'
            }
        case 'START_DATE':
            return{
                ...state,
                startDate:action.startDate
            }
        case "END_DATE":
            return{
                ...state,
                endDate:action.endDate
            }
        
        default:
            return state;
    }
};

//timestamps

//Get visible expenses
const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
    return expenses.filter((expense) => {
      const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
      const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
      const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());
  
      return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => {
        if (sortBy === 'date') {
          return a.createdAt < b.createdAt ? 1 : -1; //return -1 so b comes first when sorting from most recent to latest
    }else if (sortBy==='amount'){
        return a.amount < b.amount ? 1: -1;
    }

});
};

//store creation
const store = createStore(
    combineReducers({
      expenses: expensesReducer,
      filters: filtersReducer
    })
  );

store.subscribe(()=>{
    const state=store.getState();
    const visibleExpenses=getVisibleExpenses(state.expenses,state.filters);
    console.log(visibleExpenses);
});


const expenseOne= store.dispatch(addExpense({description:'rent',amount:500,createdAt:1000}));
const expenseTwo= store.dispatch(addExpense({description:'cofee',amount:300,createdAt:-1009}));
//store.dispatch(setStartDate(125));
/*
store.dispatch(removeExpense({id:expenseOne.expense.id}));

store.dispatch(editExpense(expenseTwo.expense.id,{amount:500}));
store.dispatch(setTextFilter('rent'));

store.dispatch(sortByAmount(5));
store.dispatch(sortByDate(5));

store.dispatch(sortByAmount(5));
store.dispatch(startDate(100));
store.dispatch(endDate(69));
store.dispatch(endDate());
*/
store.dispatch(sortByAmount());

const demoState={
    expenses:[{
        id:'oejfsi',
        description:'Janurary Rent',
        note:'This was the final payment',
        amount:54500,
        createdAt:0
    }],
    filters:{
        text:'rent',
        sortBy:'amount', //date or amount
        startDate:undefined,
        endDate:undefined
    }
};

