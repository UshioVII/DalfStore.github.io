"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Payrole extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            Payrole.belongsTo(models.Order, {
                as : 'order',
                foreignKey : 'payRoleId'
            })
        }
    }
    Payrole.init(
        {
            name: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: "Payrole",
        }
    );
    return Payrole;
};
