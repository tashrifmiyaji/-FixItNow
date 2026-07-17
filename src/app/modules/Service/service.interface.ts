export interface ICreateService {
	title: string;
	description: string;
	price: number;
	categoryId: string;
}

export interface IUpdateService {
	title?: string;
	description?: string;
	price?: number;
	categoryId?: string;
}

export interface IGetServicesQuery {
	searchTerm?: string;
	categoryId?: string;
	minPrice?: number;
	maxPrice?: number;
	location?: string;
	page?: number;
	limit?: number;
	sortBy?: string;
	sortOrder?: "asc" | "desc";
}