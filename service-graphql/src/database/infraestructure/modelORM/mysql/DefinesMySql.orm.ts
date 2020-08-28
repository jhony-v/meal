import { DataTypes } from "sequelize";
import dataAccess from "@dataAccess/index";
import MySQL from "@dataAccess/MySQL/Mysql";
import { InstancesMySql } from "./InstancesMySql.orm";

const sequelize = dataAccess.get(MySQL).instance();

const User = sequelize.define<InstancesMySql.UserInstance>("User",{
	userId : {
		type : DataTypes.BIGINT,
		autoIncrement : true,
		primaryKey : true
	},
	username : DataTypes.STRING,
	fullName : DataTypes.STRING,
	email : DataTypes.STRING,
	password : DataTypes.STRING
});

const UserFollower = sequelize.define<InstancesMySql.UserFollowerInstance>("UserFollower",{
});
const Product = sequelize.define<InstancesMySql.ProductInstance>("Product",{
	productId : {
		type : DataTypes.BIGINT,
		autoIncrement : true,
		primaryKey : true 
	},
	productName : DataTypes.STRING
});
const ProductCategory = sequelize.define<InstancesMySql.ProductCategoryInstance>("ProductCategory",{
	productCategoryId : {
		type : DataTypes.INTEGER,
		autoIncrement : true,
		primaryKey : true
	},
	productCategoryName : DataTypes.STRING
});
const Food = sequelize.define<InstancesMySql.FoodInstance>("Food",{
	foodId : {
		type : DataTypes.BIGINT,
		autoIncrement : true,
		primaryKey : true
	},
});
const FoodCategory = sequelize.define<InstancesMySql.FoodCategoryInstance>("FoodCategory",{
	foodCategoryId : {
		type : DataTypes.INTEGER,
		autoIncrement : true,
		primaryKey : true
	},
	foodCategoryName : DataTypes.STRING
});
