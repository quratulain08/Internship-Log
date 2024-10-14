const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  role: { 
    type: String, 
    enum: ['student', 'faculty', 'site-supervisor', 'au-placement', 'dic'], 
    required: true 
  },
  isApproved: { 
    type: Boolean, 
    default: false,
  },
  createdAt: { 
    type: Date, 
    default: Date.now
  }
});

export default mongoose.models.User || mongoose.model('User', userSchema);
