import mongoose from "mongoose";
const taskSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ["open", "in-progress", "closed"],
      default: "open",
    },
  },
  { timestamps: true },
);
export default mongoose.model("Task", taskSchema);
