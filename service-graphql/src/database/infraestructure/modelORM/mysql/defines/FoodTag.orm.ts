import { DataTypes } from "sequelize";
import sequelize from "../instance/SequelizeDBMySql";
import { InstancesMySql } from "../InstancesMySql.orm";

export const FoodTag = sequelize.define<InstancesMySql.FoodTagInstance>("FoodTag",{
	foodTagId:{
		type : DataTypes.INTEGER,
		autoIncrement : true,
		primaryKey : true,
	},
	name : DataTypes.STRING(50),
});

export default FoodTag;