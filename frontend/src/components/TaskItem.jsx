import React, { useState } from "react";

export const TaskItem = ({ task, onToggle, onEdit, onDelete }) => {
  const [editing, setEditing] = useState(false);
  const [editValue, setEditValue] = useState("");

  const submitEdit = () => {
    if (!editValue.trim()) {
      setEditing(false);
      setEditValue("");
      return;
    }

    onEdit(task._id, editValue.trim());
    setEditing(false);
    setEditValue("");
  };
  return (
    <li className="flex justify-between items-center p-3 border rounded-lg shadow-sm bg-base-100">
      <div className="flex items-center gap-3">
        <input
          onChange={() => onToggle(task._id, task.status)}
          type="checkbox"
          className="checkbox checkbox-primary"
          checked={task.status === "closed"}
        />

        {editing ? (
          <input
            autoFocus
            value={editValue}
            onChange={(e) => setEditValue(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                submitEdit();
              }
              if (e.key === "Escape") {
                setEditing(false);
                setEditValue("");
              }
            }}
            onBlur={submitEdit}
            className="input input-bordered input-xs w-full"
          />
        ) : (
          <span
            onDoubleClick={() => {
              setEditing(true);
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
        onClick={() => onDelete(task._id)}
      >
        Delete
      </button>
    </li>
  );
};
