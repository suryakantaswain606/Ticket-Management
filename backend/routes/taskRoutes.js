import {
  createTask,
  delTask,
  updateTask,
} from "../controllers/taskController.js";
import express from "express";

const router = express.Router();

router.post("/createTask", createTask);
router.delete("/delTask/:id", delTask);
router.put("/updateTask/:id", updateTask);
export default router;
