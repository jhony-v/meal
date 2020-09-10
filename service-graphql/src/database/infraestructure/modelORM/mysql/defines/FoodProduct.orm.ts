import { DataTypes } from "sequelize";
import sequelize from "../instance/SequelizeDBMySql";
import { InstancesMySql } from "../InstancesMySql.orm";

export const FoodProduct = sequelize.define<InstancesMySql.FoodProductInstance>("FoodProduct",{
	productId : {
		type : DataTypes.BIGINT,
		autoIncrement : true,
		primaryKey : true,
	},
	name : DataTypes.STRING(100),
	description : DataTypes.STRING,
	image : DataTypes.STRING(500), 
});

export default FoodProduct;