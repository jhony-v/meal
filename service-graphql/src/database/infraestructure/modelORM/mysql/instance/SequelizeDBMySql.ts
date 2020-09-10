import dataAccess from "@dataAccess/index";
import MySQL from "@dataAccess/MySQL/Mysql";

const sequelize = dataAccess.get(MySQL).instance();
export default sequelize;
