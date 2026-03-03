import {
  createTask,
  delTask,
  findAllTasks,
  updateTask,
} from "../controllers/taskController.js";
import express from "express";

const router = express.Router();

router.post("/createTask", createTask);
router.delete("/delTask/:id", delTask);
router.put("/updateTask/:id", updateTask);
router.get("/findAllTasks", findAllTasks);
export default router;
