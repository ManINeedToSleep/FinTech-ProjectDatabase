import React, { useState } from 'react';
import Sidebar from '../sidebar/Sidebar';
import styles from '../styles/dashboard.module.css';

export default function Dashboard() {
  const [isSidebarHidden, setSidebarHidden] = useState(false);

  const toggleSidebar = () => {
    setSidebarHidden(!isSidebarHidden);
  };

  return (
    <div className={styles.dashboardContainer}>
      <Sidebar toggleSidebar={toggleSidebar} isSidebarHidden={isSidebarHidden} />
      <div className={`${styles.mainContent} ${isSidebarHidden ? styles.expanded : ''}`}>
        <h2>Welcome to FinTech Bank</h2>
        
      </div>
    </div>
  );
}
