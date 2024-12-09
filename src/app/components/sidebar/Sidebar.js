import React from 'react';
import Link from 'next/link';
import Image from 'next/image'; // Add this import
import {
  FaHome,
  FaMoneyBillWave,
  FaExchangeAlt,
  FaChartPie,
  FaCalculator,
  FaCogs,
  FaChevronLeft,
  FaChevronRight,
} from 'react-icons/fa';
import styles from '../styles/sidebar.module.css';

const Sidebar = ({ toggleSidebar, isSidebarHidden }) => {
  return (
    <div className={`${styles.sidebar} ${isSidebarHidden ? styles.hidden : ''}`}>
      <div className={styles.logo}>
        FinTech Banking
        <button onClick={toggleSidebar} className={styles.toggleButton}>
          {isSidebarHidden ? <FaChevronRight /> : <FaChevronLeft />}
        </button>
      </div>

      <nav className={styles.nav}>
        <Link href="/" className={styles.navLink}>
          <FaHome className={styles.icon} /> Dashboard
        </Link>
        <Link href="/transactions" className={styles.navLink}>
          <FaMoneyBillWave className={styles.icon} /> Transactions
        </Link>
        <Link href="/transfer" className={styles.navLink}>
          <FaExchangeAlt className={styles.icon} /> Transfer Funds
        </Link>
        <Link href="/analytics" className={styles.navLink}>
          <FaChartPie className={styles.icon} /> Analytics
        </Link>
        <Link href="/calculator" className={styles.navLink}>
          <FaCalculator className={styles.icon} /> Calculator
        </Link>
        <Link href="/settings" className={styles.navLink}>
          <FaCogs className={styles.icon} /> Settings
        </Link>
      </nav>

      <div className={styles.userProfile}>
        <Image
          src="/profile.png"
          alt="User Profile"
          width={40}
          height={40}
          className={styles.profileImg}
        />
        <p>John Doe</p>
      </div>
    </div>
  );
};

export default Sidebar;
