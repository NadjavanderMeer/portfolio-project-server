"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class profilePreference extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      profilePreference.belongsTo(models.profile);
      profilePreference.belongsTo(models.preference);
    }
  }
  profilePreference.init(
    {
      preferenceId: { type: DataTypes.INTEGER, allowNull: false },
      profileId: { type: DataTypes.INTEGER, allowNull: false },
    },
    {
      sequelize,
      modelName: "profilePreference",
    }
  );
  return profilePreference;
};
