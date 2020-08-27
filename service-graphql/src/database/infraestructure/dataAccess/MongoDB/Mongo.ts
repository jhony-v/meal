import { IDataAccess } from "@dataAccess/@types/interfaces";
import { injectable } from "inversify";

@injectable()
export default class MongoDB implements IDataAccess.DatabaseConnection<string>{
	instance(): string {
		return "connect to MongoDB";
	}
}
