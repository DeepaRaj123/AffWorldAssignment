//Import modules
const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const path = require('path');
const authRoutes = require('./routes/authRoutes');
const taskRoutes = require('./routes/taskRoutes');
const postRoutes = require('./routes/postRoutes');

const cors = require('cors');

dotenv.config();

// Connect to MongoDB database
connectDB();

// Middleware
const app = express();
app.use(express.json());
app.use(cors());
app.use(bodyParser.json({limit : "25mb"}));
app.use(bodyParser.urlencoded({extended: true, limit : "25mb"}));

// Import routes
app.use('/api/auth', authRoutes);
app.use('/api/tasks', taskRoutes);
app.use('/api/posts', postRoutes);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// Serve static files for the frontend in production
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../frontend/build')));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, '../frontend/build', 'index.html'));
    });
}
