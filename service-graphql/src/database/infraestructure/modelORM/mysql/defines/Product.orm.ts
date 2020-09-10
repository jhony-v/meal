import { DataTypes } from "sequelize";
import sequelize from "../instance/SequelizeDBMySql";
import { InstancesMySql } from "../InstancesMySql.orm";

export const Product = sequelize.define<InstancesMySql.ProductInstance>("Product",{
	productId : {
		type : DataTypes.BIGINT,
		autoIncrement : true,
		primaryKey : true 
	},
	name : DataTypes.STRING,
	description : DataTypes.STRING,
	image : DataTypes.STRING(500),
});

export default Product;