import React from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense =(props) => {

    const saveExpenseDataHandler =(enteredExpenseData) => {
        const expenseData ={
            ...enteredExpenseData,
            id: Math.random().toString()
            
        };
       props.onAddExpense(expenseData);

    };
    return (
    <div className='new-expense'>
    <ExpenseForm  onSaveExpenseData = {saveExpenseDataHandler}/>
    </div>
    );
    //onSaveExpenseData here 'on' is just a function pointer which is passed as a argument
};


export default NewExpense;