import express from "express";
import bodyParser from "body-parser";
import { router as v1NoteRouter } from "./v1/routes/noteRoutes";
import cors from "cors";
const { swaggerDocs: V1SwaggerDocs } = require("./v1/swagger.ts");

const apicache = require("apicache");

const app = express();
const PORT = process.env.PORT || 5000;
const cache = apicache.middleware;

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use("/api/v1/notes", v1NoteRouter);
// To cache all routes
app.use(cache("2 minutes"));

app.listen(PORT, () => {
  console.log(`server running on localhost: ${PORT}`);
  V1SwaggerDocs(app, PORT);
});
