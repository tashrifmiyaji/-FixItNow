export interface ICreateCategory {
	name: string;
	description?: string;
}

export interface IUpdateCategory {
	name?: string;
	description?: string;
}

export interface IGetCategoriesQuery {
	searchTerm?: string;
	page?: number;
	limit?: number;
	sortBy?: string;
	sortOrder?: "asc" | "desc";
}