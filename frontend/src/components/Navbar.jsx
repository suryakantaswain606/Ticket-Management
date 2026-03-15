import React from "react";

export const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm px-6">
      <div className="flex-1">
        <a className="text-xl font-bold text-primary">Task Manager</a>
      </div>

      <div className="flex-none gap-2">
        <button className="btn btn-primary btn-sm">Add Task</button>

        <button className="btn btn-ghost btn-circle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="h-5 w-5 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 17h5l-1.4-1.4A2 2 0 0118 14.2V11a6 6 0 10-12 0v3.2c0 .5-.2 1-.6 1.4L4 17h5"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};
