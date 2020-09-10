import { DataTypes } from "sequelize";
import sequelize from "../instance/SequelizeDBMySql";
import { InstancesMySql } from "../InstancesMySql.orm";

export const UserFollower = sequelize.define<InstancesMySql.UserFollowerInstance>("UserFollower",{
	
});

export default UserFollower;