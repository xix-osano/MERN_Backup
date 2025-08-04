// Ipmort necessary modules
const express = require('express');
const mongoose = require('mongoose');
const taskRoutes = require('./routes');

// create express server & set up middleware
const app = express();
app.use(express.json());

// Conatsnts
const PORT = 3000;
const MONGO_URI = 'mongodb://localhost:27017/taskdb';

// Connect to MongoDB
mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB');
}).catch(err => {
    console.error('MongoDB connection error:', err);
});

// Use task routes
app.use('/', taskRoutes);

// Fire up the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});