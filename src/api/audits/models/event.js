const { sequelize, Sequelize } = require('../../../database/superhero-database')

const schema = {
  id: {
    type: Sequelize.BIGINT,
    primaryKey: true,
    autoIncrement: true,
    unique: true
  },
  entity: {
    type: Sequelize.STRING,
  },
  entityid: {
    type: Sequelize.STRING,
  },
  username: {
    type: Sequelize.STRING,
  },
  action: {
    type: Sequelize.STRING,
  },
  created_at: Sequelize.DATE
}

const options = {
  timestamps: true,
  paranoid: false,
  underscored: true,
  freezeTableName: true
}

const EventModel = sequelize.define('eventstable', schema, options);

module.exports = EventModel;