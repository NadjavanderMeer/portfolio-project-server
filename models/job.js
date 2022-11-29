"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class job extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      job.belongsToMany(models.tag, {
        through: "jobTags",
        foreignKey: "jobId",
      });
      job.belongsTo(models.user);
      job.belongsTo(models.profile);
    }
  }
  job.init(
    {
      available: { type: DataTypes.BOOLEAN },
      startDate: { type: DataTypes.DATE, allowNull: false },
      endDate: { type: DataTypes.DATE, allowNull: false },
      profileId: { type: DataTypes.INTEGER, allowNull: false },
      userId: { type: DataTypes.INTEGER, allowNull: false },
    },
    {
      sequelize,
      modelName: "job",
    }
  );
  return job;
};
