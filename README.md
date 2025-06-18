# 🧑‍💼 Employment Directory Manager

A full-stack Employee Directory web app where you can **Add**, **Edit**, **Delete**, **Filter**, and **Search** employee records. This project uses:

- ✅ React.js (Frontend)
- ✅ Node.js + Express (Backend API)
- ✅ MongoDB (Database)
- ✅ Bootstrap (UI Styling)

---

## 🚀 Features

- 🔍 Search employees by Name, Email, Role, Team, or Status
- 🗂️ Filter by Team, Role, or Status (Active / Offline / Online)
- ➕ Add new employee records
- ✏️ Edit existing employee details in a modal popup
- 🗑️ Delete employee records
- 📦 Uses `useContext` for global state management
- 📱 Fully responsive and user-friendly design

---

## 📁 Folder Structure

/ReactJs --> Frontend (React App)
/server --> Backend (Node.js API)


---

## 🧪 Getting Started

### 🔧 Backend (Node.js API)

```bash
# Move to backend
cd server

# Install backend dependencies
npm install

# Create a .env file and add:
# PORT=4000
# MONGO_URL=mongodb://localhost:27017/employmentdb

# Start backend server
npm run dev


# Open a new terminal and move to frontend
cd ReactJs

# Install frontend dependencies
npm install

# Start frontend app
npm run dev

# Visit the app at:
http://localhost:5173

📸 UI Highlights
Modal-based Edit Form using react-bootstrap

Grid layout for employee cards

Real-time filtering and searching

🙋‍♂️ Author
👨‍💻 Purnav Bhatt
MERN Stack Developer

📦 Technologies Used
React + React Bootstrap

React Router

Axios

Express

Mongoose

MongoDB

Vite



---

You can copy the entire above content into your `README.md` file, and then use this **one-bash command** to push to GitHub:

```bash
git init
git add .
git commit -m "Initial commit - Employment Directory Manager"
git branch -M main
git remote add origin https://github.com/your-username/employment-directory.git
git push -u origin main
