// Iteration #1
// seeds/drones.seeds.js
const mongoose = require('mongoose');
const Drone = require('../models/Drone.model');

const drones = [
  { name: "Creeper XL 500", propellers: 3, maxSpeed: 12 },
  { name: "Racer 57", propellers: 4, maxSpeed: 20 },
  { name: "Courier 3000i", propellers: 6, maxSpeed: 18 }
];

mongoose
  .connect('mongodb://localhost:27017/dronesDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log('Connected to the database');
    return Drone.create(drones);
  })
  .then(insertedDrones => {
    console.log(`Inserted ${insertedDrones.length} drones`);
    mongoose.connection.close();
  })
  .catch(error => {
    console.log('Error seeding the database', error);
  });
