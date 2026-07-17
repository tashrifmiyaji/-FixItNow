import { z } from "zod";

const createCategoryValidationSchema = z.object({
	body: z.object({
		name: z
			.string()
			.trim()
			.min(1, "Category name is required")
			.max(100, "Category name cannot exceed 100 characters"),

		description: z
			.string()
			.trim()
			.max(500, "Description cannot exceed 500 characters")
			.optional(),
	}),
});

const updateCategoryValidationSchema = z.object({
	body: z.object({
		name: z
			.string()
			.trim()
			.min(1, "Category name is required")
			.max(100, "Category name cannot exceed 100 characters")
			.optional(),

		description: z
			.string()
			.trim()
			.max(500, "Description cannot exceed 500 characters")
			.optional(),
	}),
});

export const CategoryValidation = {
	createCategoryValidationSchema,
	updateCategoryValidationSchema,
};
