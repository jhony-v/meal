import { Interfaces } from "@dataAccess/interfaces";
import { injectable } from "inversify";

@injectable()
export default class MongoDB implements Interfaces.DatabaseConnection{
	instance(): string {
		return "connect to MongoDB";
	}
}