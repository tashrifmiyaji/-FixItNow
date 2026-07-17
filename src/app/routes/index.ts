import { Router } from "express";

import authRoutes from "../modules/Auth/auth.route";

const routers = Router();

routers.use("/auth", authRoutes);

export default routers;