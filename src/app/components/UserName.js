"use client"

import React, { useState, useEffect } from 'react';

const UserName = () => {
  const [userName, setUserName] = useState('Loading...');

  useEffect(() => {
    const fetchUserName = async () => {
      try {
        const response = await fetch('/api/user');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        if (data.firstName && data.lastName) {
          setUserName(`${data.firstName} ${data.lastName}`);
        } else {
          throw new Error('Invalid data structure');
        }
      } catch (error) {
        console.error('Error fetching user name:', error);
        setUserName('User');
      }
    };

    fetchUserName();
  }, []);

  return <p>{userName}</p>;
};

export default UserName;

