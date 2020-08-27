import { injectable } from "inversify";
import { IDataAccess } from "@dataAccess/@types/interfaces";
import { Sequelize } from "sequelize";

const sequelize = new Sequelize();

@injectable()
export default class MySQL implements IDataAccess.DatabaseConnection<Sequelize> {
	 instance() : Sequelize {
		return sequelize;
	}
}
