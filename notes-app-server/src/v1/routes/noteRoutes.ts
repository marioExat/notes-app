// const express = require("express");

import express, { Request, Response } from "express";
export const router = express.Router();
import * as noteHandler from "../../handler/noteHandler";

router.get("/", noteHandler.getAllNotes);

router.post("/", noteHandler.createNewNote);

router.put("/:noteId", noteHandler.updateOneNote);

router.delete("/:noteId", noteHandler.deleteOneNote);
