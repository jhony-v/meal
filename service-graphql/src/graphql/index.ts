import resolvers from "./resolvers";
import { makeExecutableSchema } from "apollo-server";
import loadAllContentOfFilesGraphQL, { transformStringToGraphQL } from "../utils/loadAllContentOfFilesGraphql";
import { join } from "path";

const baseSchema = makeExecutableSchema({
	typeDefs: transformStringToGraphQL(loadAllContentOfFilesGraphQL(join(__dirname, "schemas"))),
	resolvers,
	resolverValidationOptions: {
		requireResolversForResolveType: false,
	},
});

export default baseSchema;
