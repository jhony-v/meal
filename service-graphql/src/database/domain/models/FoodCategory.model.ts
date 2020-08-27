import { Model } from "sequelize/types";

export interface FoodCategoryAttributes {
	foodCategoryId : number;
	foodCategoryName : string;
}

export interface FoodCategoryInstance extends Model<FoodCategoryAttributes>,FoodCategoryAttributes{}