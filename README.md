# RaahiStay Backend API

A simple REST API built using Node.js and Express.js for the RaahiStay project.

## Features

- Get all stays
- Get a single stay by ID
- Add a new stay
- Update an existing stay
- Delete a stay
- Search stays by location
- JSON responses
- Proper HTTP status codes
- Environment variable support

## Tech Stack

- Node.js
- Express.js
- CORS
- Dotenv
- Nodemon

## Installation

### 1. Clone the repository

```bash
git clone <repository-url>
```

### 2. Go to backend folder

```bash
cd backend
```

### 3. Install dependencies

```bash
npm install
```

### 4. Create a .env file

```env
PORT=3001
```

### 5. Start the server

```bash
npm run dev
```

Server will run at:

```
http://localhost:3001
```

---

# API Endpoints

## Get All Stays

```
GET /api/stays
```

Response: **200 OK**

---

## Get Stay by ID

```
GET /api/stays/:id
```

Example:

```
GET /api/stays/1
```

Response: **200 OK**

If ID is not found:

```
404 Not Found
```

---

## Add New Stay

```
POST /api/stays
```

Example Body:

```json
{
  "name": "Lake View Villa",
  "location": "Nainital",
  "price": 4500
}
```

Response:

```
201 Created
```

---

## Update Stay

```
PUT /api/stays/:id
```

Example Body:

```json
{
  "price": 3500
}
```

Response:

```
200 OK
```

---

## Delete Stay

```
DELETE /api/stays/:id
```

Example:

```
DELETE /api/stays/2
```

Response:

```
200 OK
```

---

## Search Stay by Location

```
GET /api/search?location=manali
```

Response:

```
200 OK
```

---

## HTTP Status Codes Used

| Status Code | Meaning |
|-------------|---------|
| 200 | OK |
| 201 | Created |
| 404 | Not Found |

---

## Author

Developed as part of the AI-Assisted Full Stack Web Development Internship.