import ExpenseItem from "./ExpenseItem";

function ExpenseList({
  expenses,
  deleteExpense
}) {

  return (
    <div>

      {
        expenses.map((item) => (
          <ExpenseItem
            key={item.id}
            item={item}
            deleteExpense={deleteExpense}
          />
        ))
      }

    </div>
  );
}

export default ExpenseList;