import * as models from "./defines/DefinesMySql.orm";

models.User.hasMany(models.MainPublishedFood);
models.MainPublishedFood.belongsTo(models.User);

models.User.hasMany(models.UserFood);
models.UserFood.belongsTo(models.User);

models.MainPublishedFood.hasMany(models.MainPublishedFoodTag);
models.MainPublishedFoodTag.belongsTo(models.MainPublishedFood);

models.FoodTag.hasMany(models.MainPublishedFoodTag);
models.MainPublishedFoodTag.belongsTo(models.FoodTag);

models.UserFood.hasMany(models.MainPublishedFood);
models.MainPublishedFood.belongsTo(models.UserFood);

models.Food.hasMany(models.UserFood);
models.UserFood.belongsTo(models.Food);

models.UserFood.hasMany(models.UserFoodImages);
models.UserFoodImages.belongsTo(models.UserFood);

models.FoodCategory.hasMany(models.Food);
models.Food.belongsTo(models.FoodCategory);

models.UserFood.hasMany(models.FoodProduct);
models.FoodProduct.belongsTo(models.UserFood);

models.Product.hasMany(models.FoodProduct);
models.FoodProduct.belongsTo(models.Product);

models.ProductCategory.hasMany(models.Product);
models.Product.belongsTo(models.ProductCategory);
