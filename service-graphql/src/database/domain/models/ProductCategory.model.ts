import { Model } from "sequelize/types";

export interface ProductCategoryAttributes {
	productCategoryId : number;
	productCategoryName : string;
}

export interface ProductCategoryInstance extends Model<ProductCategoryAttributes>,ProductCategoryAttributes{}