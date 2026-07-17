import { Router } from "express";

import auth from "../../middlewares/auth";
import validateRequest from "../../middlewares/validateRequest";

import { AdminController } from "./admin.controller";
import { AdminValidation } from "./admin.validation";

import { UserRole } from "../../../../generated/prisma/enums";

const router = Router();

router.use(auth(UserRole.ADMIN));

router.get("/users", AdminController.getAllUsers);

router.patch(
	"/users/:id/status",
	validateRequest(AdminValidation.updateUserStatusValidationSchema),
	AdminController.updateUserStatus,
);

router.get("/bookings", AdminController.getAllBookings);

export default router;
