'use strict';
module.exports = (sequelize, DataTypes) => {
  const message = sequelize.define('message', {
    text: DataTypes.STRING
  });

  message.associate = models => {
    message.belongsTo(models.user);
  };

  return message;
};
