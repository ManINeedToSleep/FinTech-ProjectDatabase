import User from './User.js';
import Account from './Account.js';
import Transaction from './Transaction.js';

// Define relationships
User.hasMany(Account, { foreignKey: 'userId' });
Account.belongsTo(User, { foreignKey: 'userId' });

Account.hasMany(Transaction, { foreignKey: 'accountId' });
Transaction.belongsTo(Account, { foreignKey: 'accountId' });

export { User, Account, Transaction };