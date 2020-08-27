import { addResolversToSchema } from "graphql-tools";
import schemas from "./schemas";
import resolvers from "./resolvers";

const baseSchema = addResolversToSchema({
	schema: schemas,
	resolvers,
});

export default baseSchema;
