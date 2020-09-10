import { injectable } from "inversify";
import { IDataAccess } from "@dataAccess/@types/interfaces";
import { Sequelize } from "sequelize";
import { MYSQL_CONFIG } from "src/config";

const sequelize = new Sequelize(MYSQL_CONFIG.DATABASE, MYSQL_CONFIG.USER, MYSQL_CONFIG.PASSWORD, {
	host : MYSQL_CONFIG.HOST,
	define: {
		freezeTableName: true,
	},
	dialect: "mysql",
});

@injectable()
export default class MySQL implements IDataAccess.DatabaseConnection<Sequelize> {
	instance(): Sequelize {
		return sequelize;
	}
}
