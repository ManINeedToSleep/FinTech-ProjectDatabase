# FinTech Project Database

## Project Overview

This project is a FinTech application built with Node.js, Express, and Sequelize ORM. It's designed to manage users, accounts, and transactions in a financial context.


## Key Components

1. **Server (server.js)**: The main entry point of the application. It sets up the Express server, initializes the database connection, and defines API routes.

2. **Database Configuration (database.js)**: Configures the Sequelize connection to the MySQL database.

3. **Models**: 
   - **User.js**: Defines the User model.
   - **Account.js**: Defines the Account model.
   - **Transaction.js**: Defines the Transaction model.
   - **index.js**: Sets up model associations.

4. **Routes**:
   - **userRoutes.js**: Defines API routes for user-related operations.

## Setup and Running

1. Ensure you have Node.js and MySQL installed.
2. Clone the repository.
3. Run `npm install` to install dependencies.
4. Set up your environment variables in a `.env` file (database credentials, etc.).
5. Run `node src/server.js` to start the server.

## Current Status

The project is in its initial setup phase. The basic structure is in place, including:
- Express server setup
- Sequelize models for User, Account, and Transaction
- Basic routing structure

Next steps include implementing full CRUD operations for each model, adding authentication and authorization, and expanding the API functionality.

      