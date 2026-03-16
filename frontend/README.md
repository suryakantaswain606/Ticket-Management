# Task Management App — Frontend

Frontend for a full-stack Task Management application built with **React + Vite**.
This interface allows users to create, update, toggle, and delete tasks while interacting with a deployed REST API.

## Tech Stack

- React
- Vite
- Axios
- Tailwind CSS + DaisyUI
- REST API integration

## Features

- Add new tasks
- Inline editing (double-click to edit)
- Toggle task status (open / closed)
- Delete tasks
- Keyboard shortcuts (Enter / Escape)
- Loading state
- Empty state handling

## Project Structure

```
src
 ├ api
 │   └ axios.js
 ├ components
 │   ├ Navbar.jsx
 │   └ TaskItem.jsx
 ├ pages
 │   └ Main.jsx
 ├ App.jsx
 ├ main.jsx
 └ index.css
```

## Environment Variables

Create a `.env` file in the project root.

```
VITE_API_URL=https://your-backend-url
```

Example:

```
VITE_API_URL=https://ticket-management-4yib.onrender.com
```

## Installation

Clone the repository and install dependencies.

```
npm install
```

## Run Development Server

```
npm run dev
```

App will run at:

```
http://localhost:5173
```

## Build for Production

```
npm run build
```

Preview production build:

```
npm run preview
```

## Backend Repository

This frontend communicates with a Node.js + Express API.

Backend provides:

- Task CRUD API
- MongoDB database
- REST endpoints

## Deployment

Frontend can be deployed easily on platforms such as:

- Vercel
- Netlify

Make sure to set the environment variable:

```
VITE_API_URL
```

## Author

Suryakanta Swain
