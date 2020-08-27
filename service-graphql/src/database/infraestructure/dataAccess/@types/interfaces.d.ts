export namespace IDataAccess {
	export interface DatabaseConnection<T> {
		instance() : T;
	}
}