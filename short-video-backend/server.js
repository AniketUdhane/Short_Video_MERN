import express from 'express';
import mongoose from 'mongoose';
import Videos from './dbModel.js';
import Cors from 'cors';
import dotenv from 'dotenv';
import 'dotenv/config';
// import './.env';

// Load environment variables
dotenv.config();

//App Config
const app = express();
const port = process.env.PORT || 9000;
const connection_url =
  'mongodb+srv://<username>:<password>@cluster0.e5o1k.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

//Middleware
app.use(express.json());
app.use(Cors());
//DB config
mongoose
  .connect(connection_url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // serverSelectionTimeoutMS: 30000, // Increase timeout to 30 seconds
    // socketTimeoutMS: 45000, // 45 seconds
  })
  .then(() => console.log('MongoDB connected successfully'))
  .catch((err) => console.error('MongoDB connection failed:', err));

// API endpoints
app.get('/', (req, res) => res.status(200).send('Hello, TheWebDev! 🚀'));

// Create video
app.post('/v2/posts', async (req, res) => {
  try {
    const video = await Videos.create(req.body);
    res.status(201).json(video);
  } catch (error) {
    console.error('Error creating video:', error);
    res.status(500).json({ error: 'Failed to create video' });
  }
});

// Get all videos
app.get('/v2/posts', async (req, res) => {
  try {
    const videos = await Videos.find();
    res.status(200).json(videos);
  } catch (error) {
    console.error('Error fetching videos:', error);
    res.status(500).json({ error: 'Failed to retrieve videos' });
  }
});

//Listner
app.listen(port, () =>
  console.log(`Server running on http://localhost:${port}`)
);
