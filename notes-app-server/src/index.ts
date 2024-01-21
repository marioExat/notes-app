import express from "express";
import bodyParser from "body-parser";
import { router as v1NoteRouter } from "./v1/routes/noteRoutes";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use("/api/v1/notes", v1NoteRouter);

app.listen(PORT, () => {
  console.log(`server running on localhost: ${PORT}`);
});
