const express = require('express');
const fs = require('fs');
const csv = require('csv-parser');
const path = require('path');
const mongoose = require('mongoose');
const authRoutes = require('./routes/auth');
require('dotenv').config();
const cors = require('cors');


const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.log('MongoDB connection error:', err));

// Routes
app.use('/api/auth', authRoutes);

// Root route
app.get('/', (req, res) => {
  res.send('Server is running and ready to serve CSV data!');
});

// Serve all data from CSV
app.get('/api/data', (req, res) => {
  const results = [];
  const filePath = path.join(__dirname, 'data.csv');

  fs.createReadStream(filePath)
    .on('error', err => {
      console.error('Error reading file:', err);
      return res.status(500).json({ error: 'Failed to read CSV file', message: err.message });
    })
    .pipe(csv())
    .on('data', data => results.push(data))
    .on('end', () => {
      console.log('CSV data processed successfully');
      res.json(results);
    });
});

// Serve filtered data by city
app.get('/api/hostels/:city', (req, res) => {
  const results = [];
  const requestedCity = req.params.city.toLowerCase().trim();
  const filePath = path.join(__dirname, 'data.csv');

  fs.createReadStream(filePath)
    .on('error', err => {
      console.error('Error reading file:', err);
      return res.status(500).json({ error: 'Failed to read CSV file', message: err.message });
    })
    .pipe(csv())
    .on('data', row => {
      const cityFromData = (row["City"] || "").toLowerCase().trim();
      if (cityFromData === requestedCity) {
        results.push(row);
      }
    })
    .on('end', () => {
      console.log(`Filtered ${results.length} entries for city: ${requestedCity}`);
      res.json(results);
    });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});




// Other routes
app.use('/api/auth', authRoutes);

// 👇 Add this new line
const bookingRoutes = require('./routes/bookings');
app.use('/api/bookings', bookingRoutes);
