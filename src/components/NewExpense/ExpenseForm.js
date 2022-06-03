import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {

  const[enteredTitle,setEnteredTitle] = useState("");
  const[enteredAmount,setEnteredAmount] = useState("");
  const[enteredDate,setEnteredDate] = useState("");

  const titleChangeHandler = (e) =>{
    setEnteredTitle(e.target.value)
  }

  const amountChangeHandler = (e) =>{
    setEnteredAmount(e.target.value)
  }

  const dateChangeHandler = (e) =>{
    setEnteredDate(e.target.value)
  }

  const submitHandler = (e)=>{
    e.preventDefault();
    
    const expenseData = {
      title:enteredTitle,
      amount : enteredAmount,
      date : new Date(enteredDate)
    }
    props.onSaveNewExpenseData(expenseData)
   // console.log(expenseData)
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
    
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="title">Title</label>
          <input
            className="new-expense__control"
            type="text"
            name="title"
            id="title"
            onChange={titleChangeHandler}
            value={enteredTitle}
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="amount">Amount</label>
          <input
            className="new-expense__control"
            type="number"
            min="0.01"
            step="0.01"
            name="amount"
            id="amount"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="date">Date</label>
          <input
            className="new-expense__control"
            min="2019-01-01"
            max="2022-12-31"
            type="date"
            name="date"
            id="date"
            value={enteredDate}
            onChange={dateChangeHandler}
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
