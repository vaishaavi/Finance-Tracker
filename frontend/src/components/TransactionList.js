import React from 'react';
import TransactionItem from './TransactionItem';
import './TransactionList.css';

const TransactionList = ({ transactions = [], onDeleteTransaction }) => {
  return (
    <div className="transaction-list">
      <h3>Transactions</h3>
      {Array.isArray(transactions) && transactions.length === 0 ? (
        <p>No transactions found.</p>
      ) : (
        transactions.map((tx) => (
          <TransactionItem
            key={tx.id}
            transaction={tx}
            onDelete={onDeleteTransaction}
          />
        ))
      )}
    </div>
  );
};

export default TransactionList;
