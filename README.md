# Ticket Management App

A full-stack Task Management application built with the MERN stack.
Users can create, update, toggle, and delete tasks through a React frontend connected to a REST API.

---

# Live Demo

Frontend
https://ticket-management-rho-three.vercel.app

Backend API
https://ticket-management-4yib.onrender.com/api/tasks

---

# Tech Stack

Frontend

- React
- Vite
- Axios
- Tailwind CSS
- DaisyUI

Backend

- Node.js
- Express
- MongoDB
- Mongoose

Deployment

- Frontend: Vercel
- Backend: Render
- Database: MongoDB Atlas

---

# Features

Task Management

- Create tasks
- Update tasks
- Toggle task status (open / completed)
- Delete tasks

Frontend

- Inline editing (double-click to edit)
- Keyboard shortcuts (Enter / Escape)
- Loading state
- Empty state handling
- Responsive UI

Backend

- RESTful API
- MongoDB persistence
- Error handling middleware

---

# Project Structure

```
Ticket-Management
│
├── backend
│   ├── config
│   ├── controllers
│   ├── models
│   ├── routes
│   └── server.js
│
├── frontend
│   ├── src
│   │   ├── api
│   │   │   └ axios.js
│   │   ├── components
│   │   │   ├ Navbar.jsx
│   │   │   └ TaskItem.jsx
│   │   ├── pages
│   │   │   └ Main.jsx
│   │   ├── App.jsx
│   │   └ main.jsx
│   │
│   ├── package.json
│   └── vite.config.js
│
└── README.md
```

---

# Environment Variables

Frontend (`frontend/.env`)

```
VITE_API_URL=https://ticket-management-4yib.onrender.com
```

Backend (`backend/.env`)

```
MONGO_URI=your_mongodb_connection_string
PORT=3080
```

---

# Installation

Clone the repository.

```
git clone https://github.com/your-username/Ticket-Management.git
cd Ticket-Management
```

---

# Run Backend

```
cd backend
npm install
npm start
```

Server runs on

```
http://localhost:3080
```

---

# Run Frontend

```
cd frontend
npm install
npm run dev
```

App runs on

```
http://localhost:5173
```

---

# API Endpoints

POST /api/tasks
GET /api/tasks
GET /api/tasks/:id
PUT /api/tasks/:id
DELETE /api/tasks/:id

---

# Deployment

Frontend deployed on **Vercel**

Backend deployed on **Render**

Make sure to configure the environment variable:

```
VITE_API_URL
```

---

# Author

Suryakanta Swain
