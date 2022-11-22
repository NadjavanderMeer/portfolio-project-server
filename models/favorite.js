"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class favorite extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      favorite.belongsTo(models.user);
      favorite.belongsTo(models.profile);
    }
  }
  favorite.init(
    {
      userId: { type: DataTypes.INTEGER, allowNull: false },
      profileId: { type: DataTypes.INTEGER, allowNull: false },
    },
    {
      sequelize,
      modelName: "favorite",
    }
  );
  return favorite;
};
