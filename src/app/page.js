"use client"  // Indicates that this component uses client-side features

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from "./page.module.css";

export default function AuthPage() {
  // State management for form fields and UI control
  const [isLogin, setIsLogin] = useState(true);
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  // Handle form submission for both login and signup
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    // Determine the API endpoint and request body based on login/signup mode
    const endpoint = isLogin ? '/api/login' : '/api/signup';
    const body = isLogin ? { identifier, password } : { email, password, confirmPassword };

    try {
      // Send POST request to the appropriate API endpoint
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });

      const data = await response.json();

      if (response.ok) {
        // If login/signup is successful, redirect to dashboard
        router.push('/dashboard');
      } else {
        // Display error message if operation fails
        setError(data.message || 'Operation failed');
      }


    } catch (err) {
      console.error('Fetch error:', err);
      setError('An error occurred. Please try again.');
    }
  };

  // Render the authentication form
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <h1 className={styles.title}>FinTech Banking</h1>
        <div className={styles.main}>
          {/* Toggle buttons for switching between login and signup */}
          <div className={styles.toggleButtons}>
            <button
              className={`${styles.toggleButton} ${isLogin ? styles.active : ''}`}
              onClick={() => setIsLogin(true)}
            >
              Login
            </button>
            <button
              className={`${styles.toggleButton} ${!isLogin ? styles.active : ''}`}
              onClick={() => setIsLogin(false)}
            >
              Sign Up
            </button>
          </div>
          {/* Authentication form */}
          <form onSubmit={handleSubmit} className={styles.form}>
            {/* Conditional rendering for signup-specific fields */}
            {!isLogin && (
              <div className={styles.inputGroup}>
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            )}
            {/* Common fields for both login and signup */}
            <div className={styles.inputGroup}>
              <label htmlFor="identifier">Email:</label>
              <input
                type="email"
                id="identifier"
                value={identifier}
                onChange={(e) => setIdentifier(e.target.value)}
                required
              />
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            {/* Conditional rendering for signup-specific fields */}
            {!isLogin && (
              <div className={styles.inputGroup}>
                <label htmlFor="confirmPassword">Confirm Password:</label>
                <input
                  type="password"
                  id="confirmPassword"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
              </div>
            )}
            {/* Error message display */}
            {error && <p className={styles.error}>{error}</p>}
            {/* Submit button */}
            <button type="submit" className={styles.submitButton}>
              {isLogin ? 'Log In' : 'Sign Up'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
