import { Router } from "express";

import auth from "../../middlewares/auth";
import validateRequest from "../../middlewares/validateRequest";

import { ServiceController } from "./service.controller";
import { ServiceValidation } from "./service.validation";

import { UserRole } from "../../../../generated/prisma/enums";

const router = Router();

router.get("/", ServiceController.getAllServices);

router.get("/:id", ServiceController.getServiceById);

router.post(
	"/",
	auth(UserRole.TECHNICIAN),
	validateRequest(ServiceValidation.createServiceValidationSchema),
	ServiceController.createService,
);

router.patch(
	"/:id",
	auth(UserRole.TECHNICIAN),
	validateRequest(ServiceValidation.updateServiceValidationSchema),
	ServiceController.updateService,
);

router.delete(
	"/:id",
	auth(UserRole.TECHNICIAN),
	ServiceController.deleteService,
);

export default router;
