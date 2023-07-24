const express = require("express");
const  router = express.Router();
const Restaurant = require("     ")

//Create a new restaurant
//http://localhost:5000/restaurant
router.post("/restaurants", (req,res)=>{
  try {
    const newRestaurant = req.body;
    const createRestaurant = await Restaurant.create(newRestaurant);
    res.status(201).json(createRestaurant);
  } catch (err) {
    res.status(500).json({error:"Failed to created"})
  }
});
module.exports = router;