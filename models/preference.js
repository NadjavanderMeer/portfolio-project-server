"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class preference extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      preference.belongsToMany(models.profile, {
        through: "profilePreferences",
        foreignKey: "preferenceId",
      });
      preference.belongsTo(models.category);
    }
  }
  preference.init(
    {
      name: { type: DataTypes.STRING },
      categoryId: { type: DataTypes.INTEGER, allowNull: false },
    },
    {
      sequelize,
      modelName: "preference",
    }
  );
  return preference;
};
