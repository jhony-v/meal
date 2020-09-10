import { DataTypes } from "sequelize";
import sequelize from "../instance/SequelizeDBMySql";
import { InstancesMySql } from "../InstancesMySql.orm";

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

export default User;