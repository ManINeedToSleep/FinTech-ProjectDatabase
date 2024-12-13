import React, { useEffect, useState } from 'react';
import styles from '../BankingInformation/bankingInfo.module.css';

export default function BankInfo() {
  const [accountInfo, setAccountInfo] = useState(null);
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    // Fetch account information
    fetch('/api/account')
      .then(response => response.json())
      .then(data => setAccountInfo(data))
      .catch(error => console.error('Error fetching account info:', error));

    // Fetch recent transactions
    fetch('/api/transactions')
      .then(response => response.json())
      .then(data => setTransactions(data))
      .catch(error => console.error('Error fetching transactions:', error));
  }, []);

  return (
    <div className={styles.bankInfoContainer}>
      <h2>Banking Information</h2>
      {accountInfo && (
        <div className={styles.accountInfo}>
          <h3>Account Balance: ${accountInfo.balance}</h3>
          <p>Account Number: {accountInfo.accountNumber}</p>
        </div>
      )}
      <div className={styles.transactions}>
        <h3>Recent Transactions</h3>
        <ul>
          {transactions.map(transaction => (
            <li key={transaction.id}>
              <span>{transaction.date}</span>
              <span>{transaction.description}</span>
              <span>${transaction.amount}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}