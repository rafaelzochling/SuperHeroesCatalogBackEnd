const Sequelize = require('sequelize')

const schema = {
    id: {
      type: Sequelize.BIGINT,
      primaryKey: true,
      autoIncrement: true,
      unique: true
    },
    username: {
      type: Sequelize.String,
      allowNull: false,
      unique: true
    },
    password: {
      type: Sequelize.STRING(128),
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
  
  module.exports = sequelize.define('User', schema, options);