const express = require('express');
const router = express.Router();
const Drone = require('../models/Drone.model');



  // Iteration #3: Add a new drone

  router.get('/create', (req, res, next) => {
    res.render('drones/create-form');
  });
  
  router.post('/create', (req, res, next) => {
    const { name, propellers, maxSpeed } = req.body;
    Drone.create({ name, propellers, maxSpeed })
      .then(() => {
        res.redirect('/drones');
      })
      .catch(error => {
        console.log('Error creating drone', error);
        res.render('drones/create-form', { errorMessage: 'Error creating drone' });
      });
  });
 

// Update the drone
  router.get('/:id/edit', (req, res, next) => {
    Drone.findById(req.params.id)
      .then(drone => {
        res.render('drones/update-form', { drone });
      })
      .catch(error => {
        console.log('Error finding drone to edit', error);
        next(error);
      });
  });
  router.post('/:id/edit', (req, res, next) => {
    const { name, propellers, maxSpeed } = req.body;
    Drone.findByIdAndUpdate(req.params.id, { name, propellers, maxSpeed }, { new: true, runValidators: true })
      .then(() => {
        res.redirect('/drones');
      })
      .catch(error => {
        console.log('Error updating drone', error);
        res.render('drones/update-form', { drone: { _id: req.params.id, name, propellers, maxSpeed } });
      });
  });
  

  router.post('/:id/delete', (req, res, next) => {
    // Iteration #5: Delete the drone
    Drone.findByIdAndDelete(req.params.id)
      .then(() => {
        res.redirect('/drones');
      })
      .catch(error => {
        console.log('Error deleting drone', error);
        next(error);
      });
  });
  

router.get('/', (req, res, next) => { 
  console.log('Getting drones');
  Drone.find()
    .then(drones => {
      console.log(drones);
      res.render('drones/list', { drones });
    })
    .catch(error => {
      console.log('Error getting drones', error);
      next(error);
    });
});

module.exports = router;
