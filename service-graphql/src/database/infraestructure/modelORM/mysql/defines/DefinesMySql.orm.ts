import { DataTypes } from "sequelize";
import dataAccess from "@dataAccess/index";
import MySQL from "@dataAccess/MySQL/Mysql";
import { InstancesMySql } from "../InstancesMySql.orm";

const sequelize = dataAccess.get(MySQL).instance();

export const User = sequelize.define<InstancesMySql.UserInstance>("User",{
	userId : {
		type : DataTypes.BIGINT,
		autoIncrement : true,
		primaryKey : true
	},
	username : DataTypes.STRING,
	fullName : DataTypes.STRING,
	email : DataTypes.STRING,
	password : DataTypes.STRING,
	avatar : DataTypes.STRING(500),
});

export const UserFollower = sequelize.define<InstancesMySql.UserFollowerInstance>("UserFollower",{
	
});

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

export const ProductCategory = sequelize.define<InstancesMySql.ProductCategoryInstance>("ProductCategory",{
	productCategoryId : {
		type : DataTypes.INTEGER,
		autoIncrement : true,
		primaryKey : true
	},
	name : DataTypes.STRING(100),
	image : DataTypes.STRING(500),
});

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

export const FoodCategory = sequelize.define<InstancesMySql.FoodCategoryInstance>("FoodCategory",{
	foodCategoryId : {
		type : DataTypes.INTEGER,
		autoIncrement : true,
		primaryKey : true
	},
	name : DataTypes.STRING,
});

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

export const FoodTag = sequelize.define<InstancesMySql.FoodTagInstance>("FoodTag",{
	foodTagId:{
		type : DataTypes.INTEGER,
		autoIncrement : true,
		primaryKey : true,
	},
	name : DataTypes.STRING(50),
});

export const MainPublishedFood = sequelize.define<InstancesMySql.MainPublishedFoodInstance>("MainPublishedFood",{
	mainPublishedId : {
		type : DataTypes.INTEGER,
		autoIncrement : true,
		primaryKey : true,
	},
});

export const MainPublishedFoodTag = sequelize.define<InstancesMySql.MainPublishedFoodTagInstance>("MainPublishedFoodTag",{
	publishedFoodTagId : {
		type : DataTypes.INTEGER,
		autoIncrement : true,
		primaryKey : true,
	},
});

export const UserFood = sequelize.define<InstancesMySql.UserFoodInstance>("UserFood",{
	userFoodId : {
		type : DataTypes.INTEGER,
		autoIncrement : true,
		primaryKey : true,
	},
});

export const UserFoodImages = sequelize.define<InstancesMySql.UserFoodImagesInstance>("UserFoodImages",{
	imageId : {
		type : DataTypes.INTEGER,
		autoIncrement : true,
		primaryKey : true,
	},
	image : DataTypes.STRING(500),
});