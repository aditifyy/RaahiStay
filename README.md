# 🌿 RaahiStay

RaahiStay is a full-stack AI-powered eco-stay booking platform that helps users discover beautiful cottages, cabins, forest stays, and nature retreats. It combines stay booking with an AI travel planner to provide a complete travel planning experience.

---

## ✨ Features

- User Registration & Login (JWT Authentication)
- Browse Eco-Friendly Stays
- Search Stays by Name or Location
- View Stay Details
- Add New Stay
- Update Stay
- Delete Stay
- Wishlist (Favorites)
- AI Trip Planner using Google Gemini API
- Responsive User Interface
- Dark / Light Mode
- MongoDB Atlas Integration
- REST API Backend

---

## 🛠 Tech Stack

### Frontend
- React.js
- Vite
- CSS3
- React Router DOM

### Backend
- Node.js
- Express.js

### Database
- MongoDB Atlas
- Mongoose

### AI
- Google Gemini API

### Deployment
- Vercel
- Render

---

## 📂 Project Structure

```text
RaahiStay
│
├── backend
│   ├── middleware
│   ├── models
│   ├── routes
│   ├── server.js
│   └── package.json
│
├── src
│   ├── assets
│   ├── components
│   ├── pages
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
│
├── package.json
└── README.md
```

---

## 🚀 Installation

### Clone Repository

```bash
git clone https://github.com/aditifyy/RaahiStay.git
```

### Install Frontend

```bash
npm install
npm run dev
```

### Install Backend

```bash
cd backend
npm install
npm start
```

---

## 🔑 Environment Variables

Create a `.env` file inside the **backend** folder.

```env
PORT=3001

MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
GEMINI_API_KEY=your_gemini_api_key
---

## 🌐 Live Links

### Frontend

raahi-stay.vercel.app

### Backend

https://raahistay.onrender.com

### GitHub Repository

https://github.com/aditifyy/RaahiStay

---

## 📸 Screenshots

### Home Page

<img width="1146" height="743" alt="image" src="https://github.com/user-attachments/assets/e1508192-7cf2-42ea-8b53-a364f46da771" />


### Stays Page

<img width="1146" height="743" alt="image" src="https://github.com/user-attachments/assets/bda9c95e-0f95-461b-bd85-1613c5e2f675" />


### Dashboard
<img width="1146" height="743" alt="image" src="https://github.com/user-attachments/assets/4cc762d9-9551-43d0-9b8d-8e60b93bcc8c" />



### AI Trip Planner

<img width="1146" height="743" alt="image" src="https://github.com/user-attachments/assets/0dab760c-fe7f-4463-9774-7f6b76f14ce9" />


---

## 🤖 AI Feature

RaahiStay integrates **Google Gemini API** to generate personalized travel itineraries based on the user's destination and travel preferences. The AI planner helps users organize their trips with customized suggestions.

---

## 📡 API Endpoints

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | `/api/stays` | Get all stays |
| GET | `/api/stays/:id` | Get stay by ID |
| POST | `/api/stays` | Add new stay |
| PUT | `/api/stays/:id` | Update stay |
| DELETE | `/api/stays/:id` | Delete stay |
| GET | `/api/search?location=` | Search stays by location |
| POST | `/api/auth/register` | Register user |
| POST | `/api/auth/login` | Login user |
| POST | `/api/ai` | Generate AI travel plan |

---

## 🗄 Database

This project uses **MongoDB Atlas** as the cloud database.

Collections:

### Users

- Name
- Email
- Password

### Stays

- Name
- Location
- Image
- Price
- Rating
- Category
- Description

MongoDB Atlas and Mongoose are used for storing and managing application data.

---

## 📌 HTTP Status Codes

| Code | Meaning |
|------|---------|
| 200 | OK |
| 201 | Created |
| 400 | Bad Request |
| 401 | Unauthorized |
| 404 | Not Found |
| 500 | Internal Server Error |

---

## 👩‍💻 Author

**Aditi**

B.Tech Computer Science Engineering

Graphic Era University

Developed as part of the **AI-Assisted Full Stack Web Development Internship**.

---

## 📜 License

This project is created for educational purposes as part of the internship program.
