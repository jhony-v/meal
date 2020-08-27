import { Model } from "sequelize/types";

export interface ProductAttributes {
	productId : number;
	productName : string;
}

export interface ProductInstance extends Model<ProductAttributes>,ProductAttributes{}