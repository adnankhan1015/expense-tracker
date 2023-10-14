import React from "react";
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
  return (
    <li>
      <Card className="expense-item ">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">${props.amount}</div>
        </div>
      </Card>
    </li>
  );
};

export default ExpenseItem;
