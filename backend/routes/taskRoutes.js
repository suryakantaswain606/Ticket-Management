import {
  createTask,
  delTask,
  findAllTasks,
  getTaskById,
  updateTask,
} from "../controllers/taskController.js";
import express from "express";

const router = express.Router();

router.get("/", async (req, res) => {
  console.log("GET /api/tasks hit");

  const tasks = await Task.find();
  res.json(tasks);
});

router.post("/", createTask);
router.delete("/:id", delTask);
router.put("/:id", updateTask);
router.get("/", findAllTasks);
router.get("/:id", getTaskById);

export default router;
