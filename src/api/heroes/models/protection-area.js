const { sequelize, Sequelize } = require('../../../database/superhero-database')

const schema = {
  id: {
    type: Sequelize.BIGINT,
    primaryKey: true,
    autoIncrement: true,
    unique: true
  },
  areaname: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
  },
  lat: {
    type: Sequelize.FLOAT,
  },
  long: {
    type: Sequelize.FLOAT,
  },
  radius: {
    type: Sequelize.FLOAT,
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

const AreaModel = sequelize.define('areastable', schema, options);

module.exports = AreaModel;