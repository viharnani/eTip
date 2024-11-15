require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const tippingRoutes = require('./routes/tipping');
const reviewRoutes = require('./routes/reviews');
const userRoutes = require('./routes/users');
const qrcodeRoutes = require('./routes/qrcode');

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());

// Routes
app.use('/api/tipping', tippingRoutes);
app.use('/api/reviews', reviewRoutes);
app.use('/api/users', userRoutes);
app.use('/api/qrcode', qrcodeRoutes);

module.exports = app;
