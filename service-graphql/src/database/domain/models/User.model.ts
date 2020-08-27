import { Model } from "sequelize";

export interface UserAttributes {
	userId: number;
	username: string;
	fullName: string;
	email: string;
	password: string;
}

export interface UserIstance extends Model<UserAttributes>, UserAttributes {}
