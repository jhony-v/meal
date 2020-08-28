import { Container } from "inversify";
import MySQL from "./MySQL/Mysql";
import MongoDB from "./MongoDB/Mongo";

const dataAccess = new Container();
dataAccess.bind<MySQL>(MySQL).toSelf();
dataAccess.bind<MongoDB>(MongoDB).toSelf();

export default dataAccess;
