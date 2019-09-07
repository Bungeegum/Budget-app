import uuid from 'uuid';
import  database from '../firebase/firebase.js';

// ADD_EXPENSE
export const addExpense = (expense) => ({
  type: 'ADD_EXPENSE',
  expense
});

export const startAddExpense=(expenseData={})=>{
  return (dispatch)=>{
    const{
      description = '',
      note = '',
      amount = 0,
      createdAt = 0

    }=expenseData;
    //pass on the destructred data onto expense
    const expense={description,note,amount,createdAt};
    database.ref('expenses').push(expense).then((ref)=>{
      dispatch(addExpense({
        id:ref.key,
        ...expense
      }));
    })
  };
};
// REMOVE_EXPENSE
export const removeExpense = ({ id } = {}) => ({
  type: 'REMOVE_EXPENSE',
  id
});

export const startRemoveExpense=({ id } = {})=>{
  return (dispatch)=>{
    //access the fire base and remove that expense id then call the remove expense
    database.ref(`expenses/${id}`).remove().then(()=>{
      dispatch(removeExpense({id}));
    })
  };
};

// EDIT_EXPENSE
export const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
});


//Set expenses
export const setExpenses=(expenses)=>({
  type:'SET_EXPENSES',
  expenses
});

//fetches data
export const startSetExpenses=()=>{
  return (dispatch)=>{
    return database.ref('expenses').once('value').then((snapshot)=>{
      //snapshot gives the object structer, need to convert to array hhere
      const expenses = [];

      snapshot.forEach((childSnapshot)=>{
        expenses.push({
          id:childSnapshot.key,
        ...childSnapshot.val()

        });

      });

      dispatch(setExpenses(expenses));
    });

  };
};
