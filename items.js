'use strict';
module.exports = (sequelize, DataTypes) => {
  const Items = sequelize.define('items', {
    item : DataTypes.STRING,
    quantity: DataTypes.INTEGER,
    status: DataTypes.STRING
  }, {});
 
  return items;
};