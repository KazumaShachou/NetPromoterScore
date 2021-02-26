import "reflect-metadata";
import express from "express";
import createConnection from "./database";
import { router } from "./routes";


createConnection();
const app = express();

/**
 * GET = SEARCH
 * POST = SAVE
 * PUT = CHANGE
 * DELETE = DELETE
 * PATCH => SPECIFIC CHANGES
 */
app.use(express.json());
 app.use(router);

 export {app};