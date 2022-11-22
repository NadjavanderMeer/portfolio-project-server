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
      locationLongitude: DataTypes.FLOAT,
      locationLatitude: DataTypes.FLOAT,
      name: { type: DataTypes.STRING, allowNull: false },
      imageUrl: DataTypes.STRING,
      description: { type: DataTypes.STRING, allowNull: false },
      hourlyRate: DataTypes.FLOAT,
      testimonials: DataTypes.TEXT,
      preferences: DataTypes.INTEGER,
      ageOfChildren: DataTypes.INTEGER,
      numberOfChildren: DataTypes.INTEGER,
      userId: { type: DataTypes.INTEGER, allowNull: false },
    },
    {
      sequelize,
      modelName: "profile",
    }
  );
  return profile;
};
