import User from "../../domain/user/User.model";
import UserFollower from "../../domain/user/UserFollower.model";
import MySQL from "@dataAccess/MySQL/Mysql";
import dataAccess from "@dataAccess/index";
import { inject, injectable, Container, interfaces } from "inversify";
import Model from "../../domain/user/Model.model";
import { Interfaces } from "@dataAccess/interfaces";
import bcrypt from "bcrypt";
import MongoDB from "@dataAccess/MongoDB/Mongo";

export interface IUser extends User{}
export interface IPortReadAllFollowerUsers {
	readPublications(user: User[]): Promise<User[]>;
}
export interface IAdapterReader {
	read(user : IUser) : Promise<User[]>;
}
export type TypesUsers = User[];
export const INJECTABLE_TYPE = {
	READ : Symbol.for("READ")
}
// aplicacion
@injectable()
export class UseCaseReadFromUser implements IPortReadAllFollowerUsers {
	async readPublications(user: User[]): Promise<User[]> {
		return user.map((e : User )  => ({
				...e,
				username : bcrypt.hashSync(e.username,2)
		}));
	}
}

// infraestructura
@injectable()
export class CommandReadAllFollowersFromUser implements IAdapterReader {
	constructor(@inject(INJECTABLE_TYPE.READ) private useCaseRead : IPortReadAllFollowerUsers) {}
	async read( user : IUser ) : Promise<User[]> {
		const db = await dataAccess.get<MySQL>(MySQL).instance();
		const request = await db.execute("SELECT * FROM user WHERE username = ?",[user.username]);
		return this.useCaseRead.readPublications(<TypesUsers>request[0]);
	}
}
const e = new Container();
e.bind<IAdapterReader>(CommandReadAllFollowersFromUser).toDynamicValue((e : interfaces.Context) => (
	new CommandReadAllFollowersFromUser(new UseCaseReadFromUser())
));

e.get(CommandReadAllFollowersFromUser).read({username:"mark"}).then(console.log);

interface Post {
	image: string;
	description: string;
}
export interface CreatePostRepository {
	create(post: Post): Promise<Post>;
}
export class CommandCreatePostRepository {
	static execute(	postCreatorRepository: CreatePostRepository ): CreatePostRepository {
		return postCreatorRepository;
	}
}
export class CreatePostToNewFeeds implements CreatePostRepository { // with mysql
	async create(post: Post): Promise<Post> {
		const database = await dataAccess.get<MySQL>(MySQL).instance();
		const request = await database.execute("INSERT feeds VALUES(?,?)",[post.image,post.description]);
		return request.length > 0 ? post : null;
	}
}
export class CreatePostToGroup implements CreatePostRepository { // with mongoDB
	async create(post : Post) : Promise<Post> {
		const database = await dataAccess.get<MongoDB>(MongoDB).instance();
		console.log("create feeds to group");
		return post;
	}
}
export const createPost = (postRepository : {new() : CreatePostRepository}) : CreatePostRepository =>  {
	return CommandCreatePostRepository.execute(new postRepository());
}

createPost(CreatePostToGroup).create({image:"image feeds",description:"description feed"}).then(e => {
	console.log(e);
});
