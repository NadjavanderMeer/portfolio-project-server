"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class review extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      review.belongsTo(models.user);
      review.belongsTo(models.profile);
    }
  }
  review.init(
    {
      comment: { type: DataTypes.TEXT, allowNull: false },
      rating: { type: DataTypes.INTEGER, allowNull: false },
      profileId: { type: DataTypes.INTEGER, allowNull: false },
      userId: { type: DataTypes.INTEGER, allowNull: false },
    },
    {
      sequelize,
      modelName: "review",
    }
  );
  return review;
};
