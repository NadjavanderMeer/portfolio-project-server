"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      user.hasOne(models.profile);
      user.belongsToMany(models.profile, {
        through: "reviews",
        foreignKey: "userId",
      });
      user.belongsToMany(models.profile, {
        through: "favorites",
        foreignKey: "userId",
      });
      user.belongsToMany(models.profile, {
        through: "jobs",
        foreignKey: "userId",
      });
    }
  }
  user.init(
    {
      name: { type: DataTypes.STRING, allowNull: false },
      password: { type: DataTypes.STRING, allowNull: false },
      email: { type: DataTypes.STRING, allowNull: false, unique: true },
      isBabysitter: { type: DataTypes.BOOLEAN, allowNull: false },
    },
    {
      sequelize,
      modelName: "user",
    }
  );
  return user;
};
