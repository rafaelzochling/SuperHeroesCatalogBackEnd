const Sequelize = require('sequelize')

const schema = {
    id: {
      type: Sequelize.BIGINT,
      primaryKey: true,
      autoIncrement: true,
      unique: true
    },
    name: {
      type: Sequelize.String,
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
  
  module.exports = sequelize.define('Role', schema, options);