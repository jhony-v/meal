import { DataTypes } from "sequelize";
import sequelize from "../instance/SequelizeDBMySql";
import { InstancesMySql } from "../InstancesMySql.orm";

export const MainPublishedFood = sequelize.define<InstancesMySql.MainPublishedFoodInstance>("MainPublishedFood",{
	mainPublishedId : {
		type : DataTypes.INTEGER,
		autoIncrement : true,
		primaryKey : true,
	},
});

export default MainPublishedFood;