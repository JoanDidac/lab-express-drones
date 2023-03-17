// Iteration #1
// models/Drone.model.js
const mongoose = require('mongoose');

const DroneSchema = new mongoose.Schema({
  name: String,
  propellers: Number,
  maxSpeed: Number
});

const Drone = mongoose.model('Drone', DroneSchema);

module.exports = Drone;
