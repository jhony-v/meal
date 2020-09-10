import { DataTypes } from "sequelize";
import sequelize from "../instance/SequelizeDBMySql";
import { InstancesMySql } from "../InstancesMySql.orm";

export const MainPublishedFoodTag = sequelize.define<InstancesMySql.MainPublishedFoodTagInstance>("MainPublishedFoodTag",{
	publishedFoodTagId : {
		type : DataTypes.INTEGER,
		autoIncrement : true,
		primaryKey : true,
	},
});

export default MainPublishedFoodTag;