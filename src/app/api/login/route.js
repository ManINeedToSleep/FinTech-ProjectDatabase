import { NextResponse } from 'next/server';
import sequelize from '../../config/database.js';
import User from '../../models/User.js';

export async function POST(request) {
  try {
    const { identifier, password } = await request.json();

    if (!identifier || !password) {
      return NextResponse.json({ message: 'Email and password are required' }, { status: 400 });
    }

    // Query the database by email using Sequelize model
    const user = await User.findOne({
      where: { email: identifier }
    });

    if (!user) {
      return NextResponse.json({ message: 'User not found' }, { status: 404 });
    }

    // Should use a proper password hashing library like bcrypt to compare passwords.
    if (user.password !== password) {
      return NextResponse.json({ message: 'Invalid password' }, { status: 401 });
    }

    // Authentication successful
    return NextResponse.json({ message: 'Login successful' }, { status: 200 });
  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json({ message: 'An error occurred during login' }, { status: 500 });
  }
}

