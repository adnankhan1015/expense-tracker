import React, { useState } from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

/* 
  ! useState() 
  * This function allows us to define values as state where changes to these values should reflect in the component function being called again, which is the key difference to the register variable. e.g  let title = props.title;

  * useState() actually returns an array.
  * 1. The first value is the variable or value itself
  * 2. The second element in the array is that updating function
  
  ! STATE really is separated on a per component instance basis.

*/

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);
  // console.log("Expense Item Evaluated by React");

  // let title = props.title;

  const clickHandler = () => {
    // title = "Updated!";
    setTitle("Updated!!");
    console.log("Console Updated!");
  };

  return (
    <Card className="expense-item ">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
};

export default ExpenseItem;
