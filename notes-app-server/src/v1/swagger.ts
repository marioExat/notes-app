const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
import { Request, Response } from "express";

// Basic Meta information about the api
const options = {
  definition: {
    openapi: "3.0.0",
    info: { title: "notes-app API", version: "1.0.0" },
  },
  apis: ["./src/v1/routes/noteRoutes.ts", "./Schema/models/note.js"],
};

// Docs in JSON format
const swaggerSpec = swaggerJSDoc(options);

// Function to setup our docs
const swaggerDocs = (app: any, port: any) => {
  // Route-Handler to visit out docs
  app.use("/api/v1/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
  // Make our docs available in JSON format
  app.get("/api.v1/docs.json", (req: Request, res: Response) => {
    res.setHeader("Content-Type", "application/json");
    res.send(swaggerSpec);
  });
  console.log(
    `Version 1 docs are available on http://localhost:${port}/api/v1/docs`
  );
};

module.exports = { swaggerDocs };
