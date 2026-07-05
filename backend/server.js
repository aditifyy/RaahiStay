const express = require("express");
const Stay = require("./models/Stay");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

// Home Route
app.get("/api/stays", async (req, res) => {
  try {
    const stays = await Stay.find();
    res.json(stays);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET ONE
app.get("/api/stays/:id", async (req, res) => {
  try {
    const stay = await Stay.findById(req.params.id);

    if (!stay) {
      return res.status(404).json({
        message: "Stay not found",
      });
    }

    res.json(stay);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
});

// POST
app.post("/api/stays", async (req, res) => {
  try {
    const stay = await Stay.create(req.body);

    res.status(201).json(stay);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
});
// PUT
app.put("/api/stays/:id", async (req, res) => {
  try {
    const stay = await Stay.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!stay) {
      return res.status(404).json({
        message: "Stay not found",
      });
    }

    res.json(stay);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
});

// DELETE
app.delete("/api/stays/:id", async (req, res) => {
  try {
    const stay = await Stay.findByIdAndDelete(req.params.id);

    if (!stay) {
      return res.status(404).json({
        message: "Stay not found",
      });
    }

    res.json({
      message: "Stay deleted successfully",
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
});
// SEARCH
app.get("/api/search", async (req, res) => {
  try {
    const q = req.query.location || "";

    const result = await Stay.find({
      location: {
        $regex: q,
        $options: "i",
      },
    });

    res.json(result);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
});
const PORT = process.env.PORT || 3001;

console.log("Before listen");

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

console.log("After listen");
const mongoose = require("mongoose");

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected ✅"))
  .catch((err) => console.log(err));