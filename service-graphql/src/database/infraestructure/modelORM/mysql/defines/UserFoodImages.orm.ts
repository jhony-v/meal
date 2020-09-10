import { DataTypes } from "sequelize";
import sequelize from "../instance/SequelizeDBMySql";
import { InstancesMySql } from "../InstancesMySql.orm";

export const UserFoodImages = sequelize.define<InstancesMySql.UserFoodImagesInstance>("UserFoodImages",{
	imageId : {
		type : DataTypes.INTEGER,
		autoIncrement : true,
		primaryKey : true,
	},
	image : DataTypes.STRING(500),
});

export default UserFoodImages;