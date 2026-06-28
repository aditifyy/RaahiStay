const errorHandler = require("./middleware/errorHandler");
const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

// Home Route
app.get("/", (req, res) => {
  res.json({
    message: "RaahiStay Backend Running 🚀",
  });
});

// Sample Data
let stays = [
  {
    id: 1,
    name: "Mountain Cabin",
    location: "Manali",
    price: 2500,
  },
  {
    id: 2,
    name: "Forest Cottage",
    location: "Mussoorie",
    price: 3000,
  },
];

// GET ALL
app.get("/api/stays", (req, res) => {
  res.json(stays);
});

// GET ONE
app.get("/api/stays/:id", (req, res) => {
  const stay = stays.find((s) => s.id == req.params.id);

  if (!stay) {
    return res.status(404).json({
      message: "Stay not found",
    });
  }

  res.json(stay);
});

// POST
app.post("/api/stays", (req, res) => {
  const newStay = {
    id: stays.length + 1,
    ...req.body,
  };

  stays.push(newStay);

  res.status(201).json(newStay);
});

// PUT
app.put("/api/stays/:id", (req, res) => {
  const index = stays.findIndex((s) => s.id == req.params.id);

  if (index === -1) {
    return res.status(404).json({
      message: "Stay not found",
    });
  }

  stays[index] = {
    ...stays[index],
    ...req.body,
  };

  res.json(stays[index]);
});

// DELETE
app.delete("/api/stays/:id", (req, res) => {
  stays = stays.filter((s) => s.id != req.params.id);

  res.json({
    message: "Stay deleted successfully",
  });
});

// SEARCH
app.get("/api/search", (req, res) => {
  const q = req.query.location?.toLowerCase() || "";

  const result = stays.filter((s) =>
    s.location.toLowerCase().includes(q)
  );

  res.json(result);
});

const PORT = process.env.PORT || 3001;
app.use(errorHandler);
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
