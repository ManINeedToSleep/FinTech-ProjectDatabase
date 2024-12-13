import { NextResponse } from 'next/server';
import sequelize from '../../config/database.js';
import User from '../../models/User.js';

export async function GET() {
  try {
    // Ensure the database connection is established
    await sequelize.authenticate();

    // Fetch the user from the database
    // Note: In a real application, you'd typically get the user ID from the session
    // For this example, we're just fetching the first user
    const user = await User.findOne();

    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    return NextResponse.json({
      firstName: user.firstName,
      lastName: user.lastName
    });
  } catch (error) {
    console.error('Error fetching user from database:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}