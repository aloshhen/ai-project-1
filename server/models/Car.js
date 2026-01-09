import mongoose from 'mongoose';

const carSchema = new mongoose.Schema({
  model: { type: String, required: true },
  price: { type: Number, required: true },
  year: { type: Number, required: true },
  engine: { type: String, required: true },
  power: { type: String, required: true },
  image: { type: String, required: true },
  description: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const Car = mongoose.models.Car || mongoose.model('Car', carSchema);

export default Car;