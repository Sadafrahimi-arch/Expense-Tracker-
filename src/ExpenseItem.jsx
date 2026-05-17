function ExpenseItem({
  item,
  deleteExpense
}) {

  return (
    <div className="expense-item">

      <p>
        {item.name} - ${item.amount}
      </p>

      <button
        onClick={() =>
          deleteExpense(item.id)
        }
      >
        Delete
      </button>

    </div>
  );
}

export default ExpenseItem;
