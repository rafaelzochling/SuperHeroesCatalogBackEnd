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
  created_at: Sequelize.DATE,
  updated_at: Sequelize.DATE
}

const options = {
  timestamps: true,
  paranoid: false,
  underscored: true,
  freezeTableName: true
}

sequelize.addHook('beforeCreate', async (schema) => {
  const hash = await bcrypt.hash(schema.password, 10);
  schema.password = hash;
});

const UserModel = sequelize.define('UsersModel', schema, options);

module.exports = UserModel;