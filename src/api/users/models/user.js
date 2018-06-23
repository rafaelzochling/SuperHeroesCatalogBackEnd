const { sequelize, Sequelize } = require('../../../database/superhero-database')
const bcrypt = require('bcryptjs');

const schema = {
  id: {
    type: Sequelize.BIGINT,
    primaryKey: true,
    autoIncrement: true,
    unique: true
  },
  username: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false
  },
  role: {
    type: Sequelize.STRING,
    allowNull: false
  },
  created_at: Sequelize.DATE,
  updated_at: Sequelize.DATE
}

const options = {
  timestamps: true,
  paranoid: false,
  underscored: true,
  freezeTableName: true
}

const UserModel = sequelize.define('userstable', schema, options);

UserModel.beforeCreate((user, options) => {
  return bcrypt.hash(user.password, 10)
      .then(hash => {
          user.password = hash;
      })
      .catch(err => { 
          throw new Error(); 
      });
});

module.exports = UserModel;