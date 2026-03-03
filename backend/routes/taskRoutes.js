import {
  createTask,
  delTask,
  findAllTasks,
  getTaskById,
  updateTask,
} from "../controllers/taskController.js";
import express from "express";

const router = express.Router();

router.post("/", createTask);
router.delete("/:id", delTask);
router.put("/:id", updateTask);
router.get("/", findAllTasks);
router.get("/:id", getTaskById);
export default router;
