import "reflect-metadata";
import express from "express";
import "./database";
import { router } from "./routes";

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

app.listen(3000, () => console.log("Server ta rodando fião, vamo de hello world"));