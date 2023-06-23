import React, { useState } from 'react';
import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css'

const ExpenseItem =(props) =>{

    //function clickHandler is used for the click on button from user
    
    
   const [title,setTitle]= useState(props.title);
   // useState(props.title); => this props.title value is coming form the props if we dont use props we have to us the value which has to be change 
     //usestate must be directly called inside such component function 
    // the can not be called outside the function or inside a nested function 
    
   
    
    
    const clickHandler = () => {
       setTitle('Updated');
        console.log(title);
    }
// the code looks like in html is basically speciall JSX code which is de eloper by react team
    //its still the js code 
    // const expenseDate= new Date(2023 , 5 , 13);
    // const expenseTitle = 'Car Insurance';
    // const expenseAmount = 294.67;

    // tolocalestring is used to show the date in human read formate
   


//(method) Date.toISOString(): string ==>>  Returns a date as a string value in ISO format.


// very important --> we are exporting the data from ExpenseDate to ExpenseItem to APP.js 
// that is rendering through props you can see we used Expenseitem in app.js and in Expenseitem we used ExpenseDate using props
    return (

        <Card className="expense-item">
        
        <ExpenseDate  date ={props.date}/>
         <div className='expense-item__description'>
            <h2> {title}</h2>
            <div className='expense-item__price'>${props.amount}</div>
         </div>
        
        <button onClick={clickHandler}>Change title</button>
        </Card>
   
    );
}

export default ExpenseItem;



// note you only have per root element which mean a single html line which has to be return