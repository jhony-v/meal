import { ApolloServer, ServerInfo } from "apollo-server";
import baseSchema from "../graphql";

const serverGraphQL: ApolloServer = new ApolloServer({
	schema: baseSchema,
	playground: true,
});

export default async function graphQLServer(): Promise<ServerInfo> {
	try {
		const server = await serverGraphQL.listen(8000);
		return server;
	} catch (e) {
		throw new Error(e);
	}
}
