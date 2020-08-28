import { Model } from "sequelize";
import { FoodAttributes } from "src/database/domain/models/Food.model";
import { FoodCategoryAttributes } from "src/database/domain/models/FoodCategory.model";
import { ProductAttributes } from "src/database/domain/models/Product.model";
import { ProductCategoryAttributes } from "src/database/domain/models/ProductCategory.model";
import { UserAttributes } from "src/database/domain/models/User.model";
import { UserFollowerAttributes } from "src/database/domain/models/UserFollower.model";
import { FoodTagAttributes } from "src/database/domain/models/FoodTag.model";
import { UserFoodAttributes } from "src/database/domain/models/UserFood.model";
import { MainPublishedFoodAttributes } from "src/database/domain/models/MainPublishedFood.model";
import { MainPublishedFoodTagAttributes } from "src/database/domain/models/MainPublishedFoodTag.model";
import { FoodProductAttributes } from "src/database/domain/models/FoodProduct.model";

export namespace InstancesMySql {
	export interface FoodInstance extends Model<FoodAttributes,FoodAttributes> {}
	export interface UserFollowerInstance extends Model<UserFollowerAttributes,UserFollowerAttributes> {}
	export interface UserInstance extends Model<UserAttributes,UserAttributes> {}
	export interface ProductCategoryInstance extends Model<ProductCategoryAttributes,ProductCategoryAttributes> {}
	export interface ProductInstance extends Model<ProductAttributes,ProductAttributes> {}
	export interface FoodCategoryInstance extends Model<FoodCategoryAttributes,FoodCategoryAttributes> {}
	export interface FoodTagInstance extends Model<FoodTagAttributes,FoodTagAttributes> {}
	export interface FoodProductInstance extends Model<FoodProductAttributes,FoodProductAttributes>{}
	export interface UserFoodInstance extends Model<UserFoodAttributes,UserFoodAttributes>{}
	export interface MainPublishedFoodInstance extends Model<MainPublishedFoodAttributes,MainPublishedFoodAttributes>{}
	export interface MainPublishedFoodTagInstance extends Model<MainPublishedFoodTagAttributes,MainPublishedFoodTagAttributes>{}
}
