# 🏋️‍♂️ Workout Tracker MERN App

This is a full-stack workout tracking application built with the **MERN stack** (MongoDB, Express.js, React, Node.js). It allows users to log exercises with fields like name, reps, weight, unit, and date. The app supports creating, reading, updating, and deleting exercises.

---

## 🚀 Features

- Add new workout exercises with customizable fields
- View a list of logged exercises in a responsive table
- Edit or delete existing workouts
- Responsive UI using **Tailwind CSS**
- Built with modular, clean code using **React Router**, **Express Validator**, and **Mongoose**

---

## 🧰 Tech Stack

| Frontend      | Backend         | Database |
|---------------|----------------|----------|
| React         | Express.js      | MongoDB  |
| React Router  | Node.js         | Mongoose |
| Tailwind CSS  | Express Validator |        |

---

## 📁 Folder Structure

```
Workout_Tracker_MERN/
├── spierb_tailwind_frontend/      # React frontend (client)
│   ├── src/
│   ├── public/
│   └── package.json
├── rest_api/                      # Express backend (server)
│   ├── server.mjs
│   ├── exercises_model.mjs
│   └── package.json
├── README.md
```

---

## 📦 Installation

1. **Clone the repository:**

```bash
git clone https://github.com/your-username/Workout_Tracker_MERN.git
cd Workout_Tracker_MERN
```

2. **Install dependencies:**

```bash
# Frontend
cd spierb_tailwind_frontend
npm install

# Backend
cd ../rest_api
npm install
```

3. **Start the backend server:**

```bash
npm start
```

4. **Start the frontend dev server:**

```bash
cd ../spierb_tailwind_frontend
npm start
```

---

## 🌐 Usage

- Navigate to `http://localhost:3000`
- Add a new exercise with name, reps, weight, unit (`lbs` or `kgs`), and date
- Use edit/delete buttons to manage your entries

---

## 📌 Notes

- Make sure MongoDB is running locally or update your connection string in `.env`
- Backend runs on port `5000`, frontend on `3000`
- A proxy is configured in the frontend to forward API requests to the backend

---

## 📃 License

This project is open-source and available under the [MIT License](LICENSE).

---

## ✨ Author

**Brian Spier**  
[GitHub](https://github.com/Bspier) | [Portfolio](https://your-portfolio-site.com)
