import mongoose from 'mongoose';

const shortVideoSchema = new mongoose.Schema({
  url: {
    type: String,
    required: true,
    trim: true,
  },
  channel: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    trim: true,
  },
  song: {
    type: String,
    trim: true,
  },
  likes: {
    type: Number,
    default: 0,
    min: 0,
  },
  shares: {
    type: Number,
    default: 0,
    min: 0,
  },
  messages: {
    type: Number,
    default: 0,
    min: 0,
  },
});

export default mongoose.model('ShortVideo', shortVideoSchema);
