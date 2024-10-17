// server.js
const express = require('express');
// const connectDB = require('./config/db');
const dotenv = require('dotenv');
const authRoutes = require('./auth');
const mongoose = require('mongoose');
dotenv.config();

const app = express();
const connectDB = async () => {
    try {
      await mongoose.connect('mongodb+srv://A123:A123%40123@cluster0.hd7pf.mongodb.net/keydata', {
       
      });
      console.log('MongoDB connected...');
    } catch (err) {
      console.error(err.message);
      process.exit(1);
    }
  };
  


connectDB();




app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.get('/',(req,res)=>{
    res.status(200).json({messages:'serverwordking'})
})

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
