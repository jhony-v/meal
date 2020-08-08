import { injectable } from "inversify";
import mysql, { Connection } from "mysql2/promise";
import { Interfaces } from "@dataAccess/interfaces";

const mysqlConnection = mysql.createConnection({
	database: "simple_chat",
	host: "localhost",
	user: "root",
	password: "",
});

@injectable()
export default class MySQL implements Interfaces.DatabaseConnection {
	async instance(): Promise<Connection> {
		return await mysqlConnection;
	}
}
