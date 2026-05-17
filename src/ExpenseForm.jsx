import { useState } from "react";

function ExpenseForm({ addExpense }) {

  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");


  const handleSubmit = () => {

    if (!name || !amount) {
      return;
    }

    addExpense(name, amount);

    setName("");
    setAmount("");
  };


  return (
    <div>

      <input
        type="text"
        placeholder="Expense name"
        value={name}
        onChange={(e) =>
          setName(e.target.value)
        }
      />


      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) =>
          setAmount(e.target.value)
        }
      />


      <button onClick={handleSubmit}>
        Add
      </button>

    </div>
  );
}

export default ExpenseForm;