import React from "react";

const ListExpenses = ({ listExpenses }) => {
  return (
    <div className="list-expense">
      <h5 className="text-center mb-5"> List of Expenses</h5>
      <ul className="px-10">
        {listExpenses !== 0 ? (
          listExpenses.map((item, key) => (
            <li
              className="p-2 border-b border-gray-200 mb-1 flex justify-between"
              key={key}
            >
              {item.description} <span>P {item.amount}</span>
            </li>
          ))
        ) : (
          <h5 className="text-center">No Expense</h5>
        )}
      </ul>
    </div>
  );
};

export default ListExpenses;
