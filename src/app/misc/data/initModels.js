import User from '../data/models/User';
import Account from '../data/models/Account';
import Transaction from '../data/models/Transaction';

// Define relationships
User.hasMany(Account, { foreignKey: 'userId' });
Account.belongsTo(User, { foreignKey: 'userId' });

Account.hasMany(Transaction, { foreignKey: 'accountId' });
Transaction.belongsTo(Account, { foreignKey: 'accountId' });

export { User, Account, Transaction };
