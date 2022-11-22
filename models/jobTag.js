"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class jobTag extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      jobTag.belongsTo(models.job);
      jobTag.belongsTo(models.tag);
    }
  }
  jobTag.init(
    {
      jobId: { type: DataTypes.INTEGER, allowNull: false },
      tagId: { type: DataTypes.INTEGER, allowNull: false },
    },
    {
      sequelize,
      modelName: "jobTag",
    }
  );
  return jobTag;
};
