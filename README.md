Meal Plan Backend

This is the **backend** for the Meal Plan application. It provides a simple REST API for managing meals using **Node.js**, **Express**, and **MongoDB**.

## Related Project

- **Frontend repo:** [meal-plan-frontend](https://github.com/elenabztw/meal-plan-frontend)

---

## Features

- Get all meals
- Add a new meal
- Edit a meal
- Delete a meal

---

## Tech Stack

- Node.js
- Express
- MongoDB (via Mongoose)
- dotenv
- cors

---

## Folder Structure

meal-plan-backend/
├── MealController.js # Logic for meal operations (CRUD)
├── MealModel.js # Mongoose schema for meals
├── MealRoutes.js # Express routes for the API
├── server.js # Main server file
├── .env # Environment variables (MongoDB URI)
└── package.json

---

## Setup & Installation

### 1. Clone the repository

git clone https://github.com/elenabztw/meal-plan-backend.git
cd meal-plan-backend

2. Install dependencies
npm install

3. Add your MongoDB connection string
Create a .env file in the root directory:

MONGODB_LINK=mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/MealPlanner?retryWrites=true&w=majority
Replace <username> and <password> with your MongoDB Atlas credentials.

4. Run the server
node server.js

You should see: Connected to MongoDB
Server running at http://localhost:7000


API Endpoints
Method	Endpoint	Description
GET	/api/meals	Get all meals
POST	/api/meals	Add a new meal
PUT	/api/meals/:id	Edit a meal by ID
DELETE	/api/meals/:id	Delete a meal by ID



CORS is enabled to allow requests from:
http://localhost:5173
If your frontend runs on a different port or domain, update the CORS origin in server.js.

## 🔗 Live Demo

[Check it out on Render](https://meal-plan-backend-60rq.onrender.com/)

