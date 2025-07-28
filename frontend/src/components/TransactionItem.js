import React from 'react';
import './TransactionItem.css';

const TransactionItem = ({ transaction, onDelete }) => {
  return (
    <div className={`transaction-item ${transaction.type}`}>
      <span>
        ₹{transaction.amount.toFixed(2)} - {transaction.title}
      </span>
      <button onClick={() => onDelete(transaction.id)}>❌</button>
    </div>
  );
};

export default TransactionItem;
