import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = () => {
  //below 3 lines are the states updates indivdually
    const [enteredTitled, setEnteredTitle] = useState("");
    const [enteredAmount, setEnteredAmount] = useState("");
    const [enteredDate, setEnteredDate] = useState("");

  // Imp =>> there are two ways to use or manage the state by object method or by
  // or by creating individual state for each function .

  // const [userInput, setUserInput] = useState({
  //   enteredTitle: "",
  //   enteredAmount: "",
  //   enteredDate: "",
  // });
  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
   
    // setUserInput({
    //   ...userInput,
    //   enteredTitle: event.target.value,
    // });

  // setUserInput((prevState) => {
  //   return {...prevState , enteredTitle : event.target.value
  //   };
  // });
  };

  const AmountChangeHandler = (event) => {
    // this is first method 
    setEnteredAmount(event.target.value);
 
//  this is 2nd method 
    //   setUserInput({
  //     ...userInput,
  //     enteredAmount: event.target.value,
  //   });
  };

  const DateChangeHandler = (event) => {
    setEnteredDate(event.target.value);


  //   setUserInput({
  //     ...userInput,
  //     enteredDate: event.target.value,
  //   });
   };

  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler} />
        </div>

        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={AmountChangeHandler}
          />
        </div>

        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2023-01-01"
            max="2025=12-31"
            onChange={DateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
