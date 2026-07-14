import express, { Application, Request, Response } from "express"
import cors from "cors";
import cookieParser from "cookie-parser"
import dotEnv from "./app/config/dotEnv";
import routers from "./app/routes";


const app: Application = express()

app.use(cors({
    origin: dotEnv.app_url,
    credentials: true
}))

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// routes
app.get("/", (req: Request, res: Response) => {
	res.send("hello world!");
});
app.use("/api",routers)

// app.use notFound
// app.use globalErrorHandler

export default app