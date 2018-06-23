const { sequelize, Sequelize } = require('../../../database/superhero-database')

const schema = {
  id: {
    type: Sequelize.BIGINT,
    primaryKey: true,
    autoIncrement: true,
    unique: true
  },
  powername: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
  },
  description: {
    type: Sequelize.STRING,
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

const PowerModel = sequelize.define('powerstable', schema, options);

module.exports = PowerModel;