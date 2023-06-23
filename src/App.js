import React from 'react';
import NewExpense from './components/NewExpense/NewExpense';
import Expenses from "./components/Expenses/Expenses";
function App() {
  const expenses = [
    //javascript objects

    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", 
    title: "New TV", 
    amount: 799.49, 
    date: new Date(2021, 2, 12) 
  },

    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },

   
    // {
    //   id: "e5",
    //   title: "New book (Wooden)",
    //   amount: 4503,
    //   date: new Date(2021, 3, 10),
    // },
  ];


  const addExpenseHandler = expense => {
    console.log('In App.js');
    console.log(expense);
   } ;

  return (
    //to excess the array of objects 
    <div>
     <NewExpense onAddExpense= {addExpenseHandler}/>
    <Expenses items={expenses}/>
     
    </div>
  );
}

export default App;
