"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class testimonial extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      testimonial.belongsTo(models.profile);
    }
  }
  testimonial.init(
    {
      name: { type: DataTypes.STRING, allowNull: false },
      email: { type: DataTypes.STRING, allowNull: false },
      comment: { type: DataTypes.TEXT, allowNull: false },
      profileId: { type: DataTypes.INTEGER, allowNull: false },
    },
    {
      sequelize,
      modelName: "testimonial",
    }
  );
  return testimonial;
};
