// const express = require("express");

import express, { Request, Response } from "express";
export const router = express.Router();
import * as noteHandler from "../../handlers/noteHandler";

// To use Custom made middlewares
// const authenticate = require("../../middlewares/authenticate");
// const authorize = require("../../middlewares/authorize");
// router.post("/", authenticate, authorize, workoutController.createNewWorkout);

/**
 * @openapi
 * /api/v1/notes:
 *   get:
 *     tags:
 *       - Notes
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 title:
 *                   type: string
 *                   example: OK
 *                 content:
 *                   type: string
 *                   example: OK
 */
router.get("/", noteHandler.getAllNotes);

router.post("/", noteHandler.createNewNote);

router.put("/:noteId", noteHandler.updateOneNote);

router.delete("/:noteId", noteHandler.deleteOneNote);

// to cache a single route
// const apicache = require("apicache");
// const cache = apicache.middleware;
// router.get("/", cache("2 minutes"), noteHandler.getAllNotes);
