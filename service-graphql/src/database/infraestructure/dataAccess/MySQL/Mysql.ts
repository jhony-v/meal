import { injectable } from "inversify";
import { IDataAccess } from "@dataAccess/@types/interfaces";
import { Sequelize } from "sequelize";

const sequelize = new Sequelize("MealPlatform", "root", "", {
	define: {
		freezeTableName: true,
	},
	dialect: "mysql",
	host : "localhost",
});

@injectable()
export default class MySQL implements IDataAccess.DatabaseConnection<Sequelize> {
	instance(): Sequelize {
		return sequelize;
	}
}
