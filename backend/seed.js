require("dotenv").config();
const mongoose = require("mongoose");
const Stay = require("./models/Stay");
let stays = [
  {
    id: 1,
    name: "Himalayan Sunrise Cabin",
    location: "Manali, Himachal Pradesh",
    price: 4800,
    rating: 4.9,
    category: "Mountain Escape",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    description: "Private balcony • Bonfire • Breakfast Included"
  },

  {
    id: 2,
    name: "Cedar Forest Hideaway",
    location: "Mussoorie, Uttarakhand",
    price: 4200,
    rating: 4.8,
    category: "Forest Retreat",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    description: "Among pine trees • Fireplace • Pet Friendly"
  },

  {
    id: 3,
    name: "Riverstone Cottage",
    location: "Rishikesh, Uttarakhand",
    price: 3900,
    rating: 4.8,
    category: "Riverside Stay",
    image: "https://images.unsplash.com/photo-1448375240586-882707db888b",
    description: "River View • Hammock • Nature Trails"
  },

  {
    id: 4,
    name: "Lake Serenity Villa",
    location: "Nainital",
    price: 5600,
    rating: 5.0,
    category: "Luxury Villa",
    image: "https://images.unsplash.com/photo-1494526585095-c41746248156",
    description: "Infinity Deck • Lake View • Fireplace"
  },

  {
    id: 5,
    name: "Valley Glass House",
    location: "Kasol",
    price: 5200,
    rating: 4.9,
    category: "Luxury Cabin",
    image: "https://images.unsplash.com/photo-1464890100898-a385f744067f",
    description: "Glass Walls • Mountain Sunrise • Café"
  },

  {
    id: 6,
    name: "Hidden Pine Chalet",
    location: "Shimla",
    price: 4500,
    rating: 4.7,
    category: "Mountain Chalet",
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e",
    description: "Wood Interiors • Hot Chocolate • Quiet Stay"
  },

  {
    id: 7,
    name: "Tea Garden Retreat",
    location: "Munnar",
    price: 5000,
    rating: 4.9,
    category: "Tea Estate",
    image: "https://images.unsplash.com/photo-1470770903676-69b98201ea1c",
    description: "Tea Plantation • Sunrise View • Garden Café"
  },

  {
    id: 8,
    name: "Coastal Breeze Villa",
    location: "Goa",
    price: 6200,
    rating: 4.9,
    category: "Beach Stay",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    description: "Private Pool • Beach Walk • Sunset Deck"
  },

  {
    id: 9,
    name: "Snow Peak Lodge",
    location: "Auli",
    price: 5800,
    rating: 4.8,
    category: "Snow Escape",
    image: "https://images.unsplash.com/photo-1510798831971-661eb04b3739",
    description: "Snow View • Fireplace • Ski Access"
  },

  {
    id: 10,
    name: "Jungle Nest Cottage",
    location: "Coorg",
    price: 4300,
    rating: 4.7,
    category: "Jungle Stay",
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
    description: "Coffee Estate • Birds • Waterfall Nearby"
  },

  {
    id: 11,
    name: "Lavender Valley House",
    location: "Ooty",
    price: 4700,
    rating: 4.8,
    category: "Hill Escape",
    image: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e",
    description: "Flower Garden • Vintage Rooms • Valley View"
  },

  {
    id: 12,
    name: "Royal Heritage Haveli",
    location: "Udaipur",
    price: 6800,
    rating: 5.0,
    category: "Heritage Stay",
    image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b",
    description: "Courtyard • Royal Interiors • Rooftop Dinner"
  }
];
mongoose
  .connect(process.env.MONGO_URI)
  .then(async () => {
    await Stay.deleteMany();

    await Stay.insertMany(stays);

    console.log("Data Inserted Successfully ✅");

    process.exit();
  })
  .catch((err) => console.log(err));