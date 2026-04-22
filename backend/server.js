require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);

// Basic route for testing
app.get('/', (req, res) => {
  res.send('API is running...');
});

// Database Connection
const { MongoMemoryServer } = require('mongodb-memory-server');

const connectDB = async () => {
  try {
    // Try connecting to local MongoDB first
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB Connected to Local Database');
  } catch (err) {
    console.error('Local MongoDB connection failed, falling back to in-memory database...', err.message);
    try {
      const mongoServer = await MongoMemoryServer.create();
      const mongoUri = mongoServer.getUri();
      await mongoose.connect(mongoUri);
      console.log('MongoDB Connected to In-Memory Database (Demo Mode)');
    } catch (inMemoryErr) {
      console.error('Failed to start in-memory database:', inMemoryErr);
    }
  }
};

connectDB();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
