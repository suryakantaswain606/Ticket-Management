import React, { useEffect, useState } from "react";
import axios from "axios";

export const Main = () => {
  const [tasks, setTasks] = useState([]);

  const [input, setInput] = useState("");

  const [loading, setLoading] = useState(true);

  const [editingId, setEditingId] = useState(null);
  const [editValue, setEditValue] = useState("");

  useEffect(() => {
    async function fetchTasks() {
      try {
        const res = await axios.get("http://localhost:3080/api/tasks");
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
    if (!input) return;

    try {
      const res = await axios.post("http://localhost:3080/api/tasks/", {
        title: input,
      });

      setTasks([...tasks, res.data]);
      setInput("");
    } catch (error) {
      console.log(error);
    }
  }

  async function handleDel(id) {
    try {
      await axios.delete(`http://localhost:3080/api/tasks/${id}`);

      setTasks(tasks.filter((t) => t._id !== id));
    } catch (error) {
      console.log(error);
    }
  }

  async function handleCheckbox(id, currentStatus) {
    const newStatus = currentStatus === "open" ? "closed" : "open";
    try {
      const res = await axios.put(`http://localhost:3080/api/tasks/${id}`, {
        status: newStatus,
      });
      setTasks(
        tasks.map((t) => {
          if (t._id === id)
            return {
              ...t,
              status: res.data.status,
            };
          return t;
        }),
      );
    } catch (error) {
      console.log(error);
    }
  }

  const handleEdit = async (id) => {
    if (!editValue.trim()) return;
    try {
      const res = await axios.put(`http://localhost:3080/api/tasks/${id}`, {
        title: editValue,
      });
      setTasks(
        tasks.map((t) => (t._id === id ? { ...t, title: res.data.title } : t)),
      );
      setEditingId(null);
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

        <button onClick={handleAdd} className="btn btn-primary">
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
            <li
              key={task._id}
              className="flex justify-between items-center p-3 border rounded-lg shadow-sm bg-base-100"
            >
              <div className="flex items-center gap-3">
                <input
                  onClick={() => handleCheckbox(task._id, task.status)}
                  type="checkbox"
                  className="checkbox checkbox-primary"
                  checked={task.status === "closed"}
                  onChange={() => {}}
                />

                {editingId === task._id ? (
                  <input
                    autoFocus
                    value={editValue}
                    onChange={(e) => setEditValue(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") handleEdit(task._id);
                      if (e.key === "Escape") setEditingId(null);
                    }}
                    onBlur={() => handleEdit(task._id)}
                    className="input input-bordered input-xs w-full"
                  />
                ) : (
                  <span
                    onDoubleClick={() => {
                      setEditingId(task._id);
                      setEditValue(task.title);
                    }}
                    className={
                      task.status === "closed" ? "line-through opacity-60" : ""
                    }
                  >
                    {task.title}
                  </span>
                )}
              </div>

              <button
                className="btn btn-error btn-xs"
                onClick={() => handleDel(task._id)}
              >
                Delete
              </button>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};
