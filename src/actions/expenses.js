import uuid from 'uuid';
import  database from '../firebase/firebase.js';

// ADD_EXPENSE
export const addExpense = (expense) => ({
  type: 'ADD_EXPENSE',
  expense
});

export const startAddExpense=(expenseData={})=>{
  return (dispatch,getState)=>{
    const uid=getState().auth.uid;
    const{
      description = '',
      note = '',
      amount = 0,
      createdAt = 0

    }=expenseData;
    //pass on the destructred data onto expense
    const expense={description,note,amount,createdAt};
    //push the data to each user on firebase
    return database.ref(`users/${uid}/expenses`).push(expense).then((ref)=>{
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
  return (dispatch,getState)=>{
    const uid = getState().auth.uid;
    //access the fire base and remove that expense id then call the remove expense
    return database.ref(`users/${uid}/expenses/expenses/${id}`).remove().then(()=>{
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

export const startEditExpense = (id,updates)=>{
  return (dispatch,getState)=>{
    const uid = getState().auth.uid;
    return database.ref(`users/${uid}/expenses/${id}`).update(updates).then(()=>{
      dispatch(editExpense(id,updates));
    });
  };
};


//Set expenses
export const setExpenses=(expenses)=>({
  type:'SET_EXPENSES',
  expenses
});

//fetches data
export const startSetExpenses=()=>{
  return (dispatch,getState)=>{
    const uid=getState().auth.uid;
    return database.ref(`users/${uid}/expenses`).once('value').then((snapshot)=>{
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
