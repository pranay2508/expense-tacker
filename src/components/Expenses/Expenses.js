import React, { useState } from "react";

import Card from "../UI/Card";

import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";

import ExpensesChart from './ExpensesChart';


const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  // filter method makes the new array , original array is not touched
  //by this filter method we can select the year and it will render all items of selected year
  //
  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });


  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesChart expenses={filteredExpenses}/>
    <ExpensesList items= {filteredExpenses}/>

        {/* Javascript && operator make the first condition checked and return the second condition also if the first one is true 
        {filteredExpenses.length === 0 && <p>No Expenses found for this year.</p>}
        {filteredExpenses.length === 0 &&  filteredExpenses.map((expense)=>(
         ( <ExpenseItem  
          key = {expense.id}
          title={expense.title}
          amount={expense.amount}
          date ={expense.date}
          />)
        ))} */}

        {/* <ExpenseItem
          title={props.items[0].title}
          amount={props.items[0].amount}
          date={props.items[0].date}
        ></ExpenseItem>
        <ExpenseItem
          title={props.items[1].title}
          amount={props.items[1].amount}
          date={props.items[1].date}
        ></ExpenseItem>
        <ExpenseItem
          title={props.items[2].title}
          amount={props.items[2].amount}
          date={props.items[2].date}
        ></ExpenseItem>
        <ExpenseItem
          title={props.items[3].title}
          amount={props.items[3].amount}
          date={props.items[3].date}
        ></ExpenseItem>
        {/* <ExpenseItem
        title={props.items[4].title}
        amount={props.items[4].amount}
        date={props.items[4].date}
      ></ExpenseItem>
        */}
      </Card>
    </div>
  );
};

export default Expenses;
