import { createTask, delTask } from "../controllers/taskController.js";
import express from "express";

const router = express.Router();

router.post("/createTask", createTask);
router.delete("/delTask/:id", delTask);
export default router;
