"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class profile extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      profile.belongsTo(models.user);
      profile.belongsToMany(models.user, {
        through: "reviews",
        foreignKey: "profileId",
      });
      profile.belongsToMany(models.user, {
        through: "favorites",
        foreignKey: "profileId",
      });
      profile.belongsToMany(models.user, {
        through: "jobs",
        foreignKey: "profileId",
      });
      profile.belongsToMany(models.preference, {
        through: "profilePreferences",
        foreignKey: "profileId",
      });
      profile.hasMany(models.testimonial);
    }
  }
  profile.init(
    {
      isBabysitter: { type: DataTypes.BOOLEAN, allowNull: false },
      locationLatitude: { type: DataTypes.FLOAT },
      locationLongitude: { type: DataTypes.FLOAT },
      name: { type: DataTypes.STRING, allowNull: false },
      imageUrl: { type: DataTypes.STRING },
      description: { type: DataTypes.STRING },
      hourlyRate: { type: DataTypes.FLOAT },
      ageOfChildren: { type: DataTypes.INTEGER },
      numberOfChildren: { type: DataTypes.INTEGER },
      userId: { type: DataTypes.INTEGER, allowNull: false },
    },
    {
      sequelize,
      modelName: "profile",
    }
  );
  return profile;
};
