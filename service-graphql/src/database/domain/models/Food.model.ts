import { Model } from "sequelize/types";

export interface FoodAttributes {
	foodId : number;
	foodName : string;
}

export interface FoodInstance extends Model<FoodAttributes>, FoodAttributes {}
