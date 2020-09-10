import "reflect-metadata";
import dotenv from "dotenv";
import "module-alias/register";
import graphQLServer from "./server/graphQLServer";
dotenv.config();
graphQLServer().then((request) => console.log(request.url));
