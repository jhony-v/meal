import { GraphQLFileLoader, loadSchemaSync } from "graphql-tools";
import { join } from "path";

const schemas = loadSchemaSync(join(__dirname,'./*.graphql'), {
	loaders: [new GraphQLFileLoader()],
});
export default schemas;


