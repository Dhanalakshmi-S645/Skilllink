# SkillLink

SkillLink is a MERN stack-based user authentication web application that allows users to **register** and **log in** securely. This project demonstrates a basic user auth flow with a clean and responsive UI.

---

## 🚀 Features

- 🔐 User registration with name, email, and password
- 🔑 User login functionality
- 💾 Stores user details securely in MongoDB
- ⚛️ Frontend built with React
- 🌐 Backend using Node.js, Express
- 📦 Data handling with MongoDB (via Mongoose)

- ## 🏁 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/skilllink.git
cd skilllink

Install Backend Dependencies
cd backend
npm install

 Install Frontend Dependencies
cd ../frontend
npm install

Start the Development Servers
Backend (port 5000):
  cd backend
  node index.js
Frontend (port 3000):
  cd frontend
  npm start

Environment Variables
Create a .env file in the backend/ folder:
  PORT=5000
MONGO_URL=your_mongodb_connection_string

Folder Structure
  skilllink/
├── frontend/
│   └── src/
│       └── components/
│           ├── Register.jsx
│           └── Login.jsx
├── backend/
│   ├── index.js
│   └── models/User.js
└── README.md

👩‍💻 Author
Dhanalakshmi S

Future Enhancements
✅ Add password encryption (bcrypt)

✅ Add JWT-based session handling

⏳ Form validations and error messages

⏳ Profile dashboard after login

