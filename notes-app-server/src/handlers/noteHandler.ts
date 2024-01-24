import express, { Request, Response } from "express";
import * as noteService from "../services/noteService";
import { iNote } from "../services/noteService";

const getAllNotes = async (req: Request, res: Response) => {
  try {
    const allNotes = await noteService.getAllNotes();
    res.json(allNotes);
  } catch (error) {
    res.status(500).send({ status: "FAILED", data: error });
  }
};

const getOneNote = (req: Request, res: Response) => {
  const note = noteService.getOneNote();
  res.send("Get an existing note");
};

const createNewNote = async (req: Request, res: Response) => {
  const { title, content } = req.body;
  if (!title || !content) {
    return res
      .status(400)
      .send(
        "One of the following keys is missing or is empty in request body: 'title', 'content'"
      );
  }
  try {
    const createdNote = await noteService.createNewNote({ title, content });
    res.status(201).json(createdNote);
  } catch (error) {
    res.status(500).send({ status: "FAILED", data: error });
  }
};

const updateOneNote = async (req: Request, res: Response) => {
  const { title, content } = req.body;
  const id: number = parseInt(req.params.noteId);
  console.log(id);
  if (!title || !content) {
    return res.status(400).send({
      status: "FAILED",
      data: {
        error:
          "One of the following keys is missing or is empty in request body: 'title', 'content'",
      },
    });
  }
  if (!id || isNaN(id)) {
    return res.status(400).send({
      status: "FAILED",
      data: {
        error:
          "Parameter ':noteId' can not be empty or ID must be a valid number",
      },
    });
  }

  try {
    const updatedNote = await noteService.updateOneNote({ title, content }, id);
    console.log(updatedNote);
    res.json(updatedNote);
  } catch (error) {
    res.status(500).send({ status: "FAILED", data: { error: error } });
  }
};

const deleteOneNote = async (req: Request, res: Response) => {
  const id = parseInt(req.params.noteId);

  if (!id || isNaN(id)) {
    return res
      .status(400)
      .send({ status: "FAILED", data: { error: "ID field required" } });
  }
  try {
    const deletedNote = await noteService.deleteOneNote(id);
    res.sendStatus(204);
  } catch (error) {
    res.status(500).send({ status: "FAILED", data: { error: error } });
  }
};

export { getAllNotes, getOneNote, createNewNote, updateOneNote, deleteOneNote };

//import cors from "cors";

//app.use(express.json());
//app.use(cors());

// app.get("/api/notes", async (req, res) => {
//   const notes = await Note.findAll();
//   res.json(notes);
// });

// app.post("/api/notes", async (req, res) => {
//   const { title, content } = req.body;

//   if (!title || !content) {
//     return res.status(400).send("title and content fields required");
//   }
//   try {
//     const note = await Note.create({
//       title,
//       content,
//     });
//     res.json(note);
//   } catch (error) {
//     res.status(500).send("Oops, something went wrong");
//   }
// });

// app.put("/api/notes/:id", async (req, res) => {
//   const { title, content } = req.body;
//   const id = parseInt(req.params.id);

//   if (!title || !content) {
//     return res.status(400).send("title and content field required");
//   }
//   if (!id || isNaN(id)) {
//     return res.status(400).send("ID must be a valid number");
//   }

//   try {
//     const updatedNote = await Note.update(
//       { title, content },
//       { where: { id } }
//     );
//     console.log(updatedNote);
//     res.json(updatedNote);
//   } catch (error) {
//     res.status(500).send("Oops, something went wrong");
//   }
// });

// app.delete("/api/notes/:id", async (req, res) => {
//   const id = parseInt(req.params.id);

//   if (!id || isNaN(id)) {
//     return res.status(400).send("ID field required");
//   }

//   try {
//     await Note.destroy({
//       where: { id },
//     });
//     res.status(204).send();
//   } catch (error) {
//     res.status(500).send("Oops, something went wrong");
//   }
// });
