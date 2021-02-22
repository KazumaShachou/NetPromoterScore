import express from 'express';

const app = express();

/**
 * GET = SEARCH
 * POST = SAVE
 * PUT = CHANGE
 * DELETE = DELETE
 * PATCH => SPECIFIC CHANGES
 */

 app.get("/", (request, response) => {

    return response.json({message: "Hello World"})
 });

 app.post("/", (request, response) => {
    //receive the data to save
    return response.json({message: "data has been saved successfully" });
 });

app.listen(3000, () => console.log("Server ta rodando fião, vamo de hello world"));