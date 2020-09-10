import { DataTypes } from "sequelize";
import sequelize from "../instance/SequelizeDBMySql";
import { InstancesMySql } from "../InstancesMySql.orm";

export const UserFood = sequelize.define<InstancesMySql.UserFoodInstance>("UserFood",{
	userFoodId : {
		type : DataTypes.INTEGER,
		autoIncrement : true,
		primaryKey : true,
	},
});

export default UserFood;