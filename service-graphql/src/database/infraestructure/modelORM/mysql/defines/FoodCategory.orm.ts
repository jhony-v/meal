import { DataTypes } from "sequelize";
import sequelize from "../instance/SequelizeDBMySql";
import { InstancesMySql } from "../InstancesMySql.orm";

export const FoodCategory = sequelize.define<InstancesMySql.FoodCategoryInstance>("FoodCategory",{
	foodCategoryId : {
		type : DataTypes.INTEGER,
		autoIncrement : true,
		primaryKey : true
	},
	name : DataTypes.STRING,
});

export default FoodCategory;