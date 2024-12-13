"use client"

import React, { useState } from 'react';
import Sidebar from '../components/sidebar/Sidebar';
import BankInfo from '../components/BankingInformation/BankInfo';
import styles from './dashboard.module.css';

export default function Dashboard() {
  const [isSidebarHidden, setSidebarHidden] = useState(false);
  const [balance, setBalance] = useState(10000); // Example balance
  const [accountNumber, setAccountNumber] = useState('1234567890'); // Example account number

  const toggleSidebar = () => {
    setSidebarHidden(!isSidebarHidden);
  };

  return (
    <div className={styles.dashboardContainer}>
      <Sidebar toggleSidebar={toggleSidebar} isSidebarHidden={isSidebarHidden} />
      <div className={`${styles.mainContent} ${isSidebarHidden ? styles.expanded : ''}`}>
        <h2 className={styles.title}>Welcome back to FinTech bank</h2>
        <BankInfo balance={balance} accountNumber={accountNumber} />
        {/* Add more dashboard content here */}
      </div>
    </div>
  );
}

