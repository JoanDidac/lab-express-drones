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
 


router.get('/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
});

router.post('/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  // ... your code here
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
