import React, { useState } from "react";
import Expenses from "./components/Expense/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
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
];

const App = () => {
  /*
    ! Imperative Approach
    * In which we can all the stuff like we do in vanilla JavaScript. Such as Selecting an element, then adding it to the DOM

    ! Declarative Approach
    * Define the desired target state(s) and let react figure out the actual JavaScript DOM instructions
    * Just usr JSX and React take care of all the stuff
    * Handling Events, Updated the UI and STUFF
  */

  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
    console.log(expense);
  };

  // return React.createElement(
  //   "div",
  //   {},
  //   React.createElement("h2", {}, "Lets start with React"),
  //   React.createElement(Expenses, { items: expenses })
  // );
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
