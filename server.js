const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('dist/portfolio'));

// MongoDB Connection
const mongoURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/portfolio';
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.log('MongoDB connection error:', err));

// Routes
app.use('/api/projects', require('./backend/routes/projects'));
app.use('/api/skills', require('./backend/routes/skills'));
app.use('/api/experience', require('./backend/routes/experience'));
app.use('/api/contact', require('./backend/routes/contact'));

// Serve Angular app
app.get('*', (req, res) => {
  res.sendFile('dist/portfolio/index.html', { root: __dirname });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
