import { z } from "zod";

const createServiceValidationSchema = z.object({
	body: z.object({
		title: z
			.string()
			.trim()
			.min(1, "Title is required")
			.max(150, "Title cannot exceed 150 characters"),

		description: z
			.string()
			.trim()
			.min(1, "Description is required"),

		price: z
			.number()
			.positive("Price must be greater than 0"),

		categoryId: z
			.string()
			.uuid("Invalid category id"),
	}),
});

const updateServiceValidationSchema = z.object({
	body: z.object({
		title: z
			.string()
			.trim()
			.min(1, "Title is required")
			.max(150, "Title cannot exceed 150 characters")
			.optional(),

		description: z
			.string()
			.trim()
			.min(1, "Description is required")
			.optional(),

		price: z
			.number()
			.positive("Price must be greater than 0")
			.optional(),

		categoryId: z
			.string()
			.uuid("Invalid category id")
			.optional(),
	}),
});

export const ServiceValidation = {
	createServiceValidationSchema,
	updateServiceValidationSchema,
};