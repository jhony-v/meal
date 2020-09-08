import { readdirSync, readFileSync } from "fs";
import { join } from "path";
import { gql } from "apollo-server";
import { DocumentNode } from "graphql";

/**
 * Transform a string definitions to gql
 * @param content Xontent of type graphql schemas 
 * @returns Graphql document node
 */
export const transformStringToGraphQL = (content : string) : DocumentNode => {
	return gql`${content}`;
}

/**
 * Get the content of all files graphql
 * @param directory Location of all files with extension .graphql
 * @returns Content of files in string 
 */
const loadAllContentOfFilesGraphQL = (directory: string) : string => {
	const getContentOfFiles : string[] = readdirSync(directory).map((filename: string) => {
		let contentFile : string = readFileSync(join(directory, filename),"utf-8");
		return contentFile;
	});
	const unionAllFiles : string = getContentOfFiles.join('');
	return unionAllFiles;
}

export default loadAllContentOfFilesGraphQL;
