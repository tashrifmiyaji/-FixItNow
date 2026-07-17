import { Router } from "express";

import authRoutes from "../modules/Auth/auth.route";
import userRoutes from "../modules/User/user.route";
import categoryRoutes from "../modules/Category/category.route";
import serviceRoutes from "../modules/Category/category.route";

const routers = Router();

routers.use("/auth", authRoutes);
routers.use("/users", userRoutes);
routers.use("/category", categoryRoutes);
routers.use("/service", serviceRoutes);

export default routers;
