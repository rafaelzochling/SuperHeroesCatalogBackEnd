const { sequelize, Sequelize } = require('../../../database/superhero-database')

const schema = {
  id: {
    type: Sequelize.BIGINT,
    primaryKey: true,
    autoIncrement: true,
    unique: true
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
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

const RoleModel = sequelize.define('rolestable', schema, options);

module.exports = RoleModel;