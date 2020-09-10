import { DataTypes } from "sequelize";
import sequelize from "../instance/SequelizeDBMySql";
import { InstancesMySql } from "../InstancesMySql.orm";

export const ProductCategory = sequelize.define<InstancesMySql.ProductCategoryInstance>("ProductCategory",{
	productCategoryId : {
		type : DataTypes.INTEGER,
		autoIncrement : true,
		primaryKey : true
	},
	name : DataTypes.STRING(100),
	image : DataTypes.STRING(500),
});

export default ProductCategory;