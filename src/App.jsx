import './App.css'

import { useState, useEffect } from "react";
import ExpenseForm from "./ExpenseForm";
import ExpenseList from "./ExpenseList";

function App() {
  
  const [expenses, setExpenses] = useState(() => {
    const savedData = localStorage.getItem("expenses");

    if (savedData) {
      return JSON.parse(savedData);
    }

    return [];
  });


  useEffect(() => {
    localStorage.setItem(
      "expenses",
      JSON.stringify(expenses)
    );
  }, [expenses]);


  const addExpense = (name, amount) => {

    const newExpense = {
      id: Date.now(),
      name,
      amount: Number(amount)
    };

    setExpenses([...expenses, newExpense]);
  };


  const deleteExpense = (id) => {

    const filteredData =
      expenses.filter((item) => item.id !== id);

    setExpenses(filteredData);
  };


  const total = expenses.reduce(
    (sum, item) => sum + item.amount,
    0
  );


  return (
    <div className="container">

      <h1>Expense Tracker</h1>

      <ExpenseForm addExpense={addExpense} />

      <h2>Total: ${total}</h2>

      <ExpenseList
        expenses={expenses}
        deleteExpense={deleteExpense}
      />

    </div>
  );
}

export default App;
