# Store Rating Web App

A full-stack role-based store rating platform where:
- 🧑‍💼 Admins manage users and stores
- 👤 Normal users rate stores
- 🏪 Store owners view ratings and feedback

## 🛠️ Tech Stack

| Layer     | Tools                |
|-----------|----------------------|
| Frontend  | React + Tailwind CSS |
| Backend   | ExpressJS + JWT      |
| Database  | MySQL                |
| Hosting   | Vercel / Railway     |

## 📦 Features

- Role-based login (admin, user, owner)
- Store listing and rating (1–5)
- Admin dashboard with metrics, filters
- User dashboard with live rating system
- Secure password validation and update
- Sorting and filtering for all tables

## 📂 Project Structure

project/
├── backend/
│ ├── controllers/
│ ├── models/
│ ├── routes/
│ └── server.js
├── frontend/
│ └── src/
└── db/
└── schema.sql


## 🔧 Local Setup

1. Clone the repo  
   `git clone https://github.com/YOUR_USERNAME/store-rating-app.git`

2. Start backend:
   cd backend
   npm install
   npm start

3. Start frontend:
    cd frontend
    npm install
    npm start

4. Set up .env with your MySQL config
`DB_HOST=your_host 


