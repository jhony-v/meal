import { Container } from "inversify";
import MySQL from "./MySQL/Mysql";
import MongoDB from "./MongoDB/Mongo";

const dataAccessDI = new Container();
dataAccessDI.bind<MySQL>(MySQL).toSelf();
dataAccessDI.bind<MongoDB>(MongoDB).toSelf();

export default dataAccessDI;
