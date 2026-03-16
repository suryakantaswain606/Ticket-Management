import React, { useEffect, useState } from "react";
import api from "../api/axios";
import { TaskItem } from "../components/TaskItem";

export const Main = () => {
  const [tasks, setTasks] = useState([]);

  const [input, setInput] = useState("");

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchTasks() {
      try {
        const res = await api.get("/api/tasks");
        setTasks(res.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }

    fetchTasks();
  }, []);

  async function handleAdd() {
    if (!input.trim()) return;

    try {
      const res = await api.post("/api/tasks", {
        title: input,
      });

      setTasks((prev) => [...prev, res.data]);
      setInput("");
    } catch (error) {
      console.log(error);
    }
  }

  async function handleDel(id) {
    try {
      await api.delete(`/api/tasks/${id}`);

      setTasks((prev) => prev.filter((t) => t._id !== id));
    } catch (error) {
      console.log(error);
    }
  }

  async function handleCheckbox(id, currentStatus) {
    const newStatus = currentStatus === "open" ? "closed" : "open";
    try {
      const res = await api.put(`/api/tasks/${id}`, {
        status: newStatus,
      });
      setTasks((prev) =>
        prev.map((t) => (t._id === id ? { ...t, status: res.data.status } : t)),
      );
    } catch (error) {
      console.log(error);
    }
  }

  const handleEdit = async (id, editValue) => {
    if (!editValue.trim()) return;
    try {
      const res = await api.put(`/api/tasks/${id}`, {
        title: editValue,
      });
      setTasks((prev) =>
        prev.map((t) => (t._id === id ? { ...t, title: res.data.title } : t)),
      );
    } catch (error) {
      console.log(error);
    }
  };

  if (loading)
    return (
      <div className="flex justify-center items-center h-screen">
        <span className="loading loading-spinner loading-lg text-primary"></span>
      </div>
    );

  return (
    <div className="max-w-md mx-auto mt-10">
      <div className="flex gap-2 mb-6">
        <input
          value={input}
          onKeyDown={(e) => e.key === "Enter" && handleAdd()}
          onChange={(e) => setInput(e.target.value)}
          type="text"
          placeholder="Enter a task..."
          className="input input-bordered w-full"
        />

        <button
          disabled={!input.trim()}
          onClick={handleAdd}
          className="btn btn-primary"
        >
          Add
        </button>
      </div>

      <ul className="space-y-2">
        {tasks.length === 0 ? (
          <p className="text-center text-base-content/50">
            No tasks yet. Add one above!
          </p>
        ) : (
          tasks.map((task) => (
            <TaskItem
              key={task._id}
              task={task}
              onDelete={handleDel}
              onToggle={handleCheckbox}
              onEdit={handleEdit}
            ></TaskItem>
          ))
        )}
      </ul>
    </div>
  );
};
