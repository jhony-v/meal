import { DataTypes } from "sequelize";
import sequelize from "../instance/SequelizeDBMySql";
import { InstancesMySql } from "../InstancesMySql.orm";

export const Food = sequelize.define<InstancesMySql.FoodInstance>("Food",{
	foodId : {
		type : DataTypes.BIGINT,
		autoIncrement : true,
		primaryKey : true
	},
	name : DataTypes.STRING,
	presentation : DataTypes.STRING,
	description : DataTypes.STRING,
	image : DataTypes.STRING(500),
	punctuation : DataTypes.STRING(400),
	video : DataTypes.STRING(500),
});

export default Food;