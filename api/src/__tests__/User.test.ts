import request from "supertest";
import {app} from "../app";

import createConnection from '../database'

describe("Users", () => {

    beforeAll( async () => {
        const connection = await createConnection();
        await connection.runMigrations();
    });

  it("should be able to create a new user", async () => {
    const response = await request(app).post("/users").send ({
        email : "example@example.com",
        name : "User example",
    });
    
    expect(response.status).toBe(201);
  })
});