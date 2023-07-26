const express = require("express");
const  router = express.Router();
const Restaurant = require("../controller/restaurant.controller");

//Create a new restaurant
//http://localhost:5000/restaurant
router.post("/restaurants",async (req,res)=>{
  try {
    const newRestaurant = req.body;
    const createRestaurant = await Restaurant.create(newRestaurant);
    res.status(201).json(createRestaurant);
  } catch (err) {
    res.status(500).json({error:"Failed to created"})
  }
});

router.get("/Food", async (req,res)=>{
  try {
    console.log("Hello")
    const ShoRestaurant = await Restaurant.getAll();
    res.status(201).json(ShoRestaurant)
  } catch (error) {
    console.log(error);
    res.status(500).json({error : "Failed to Show Restaurant"})
  }
});

router.get("/Food/:id", async (req,res)=>{
  try {
    console.log("Hello")
    const resid = req.params.id
    const ShoRestaurant = await Restaurant.getone(resid)
    res.status(201).json(ShoRestaurant)
  } catch (error) {
    console.log(error);
    res.status(500).json({error : "Failed to Show Restaurant"})
  }
});

router.delete("/Food/:id", async (req,res)=>{
  try {
    console.log("Hello")
    const resid = req.params.id
    const ShoRestaurant = await Restaurant.deletebyid(resid)
    res.status(201).json(ShoRestaurant)
  } catch (error) {
    console.log(error);
    res.status(500).json({error : "Failed to Show Restaurant"})
  }
});

router.post("/Food", async (req,res)=>{
  try {
    console.log("Hello")
    const add = req.body
    const ShoRestaurant = await Restaurant.createrestaurant(add)
    res.status(201).json(ShoRestaurant)
  } catch (error) {
    console.log(error);
    res.status(500).json({error : "Failed to Show Restaurant"})
  }
});

router.put("/Food/:id", async (req,res)=>{
  try {
    console.log("Hello")
    const edit = req.body
    const resid = req.params.id
    const ShoRestaurant = await Restaurant.restaurantupdateid(edit,resid)
    res.status(201).json({message: "success"})
  } catch (error) {
    console.log(error);
    res.status(500).json({error : "Failed to Show Restaurant"})
  }
});


module.exports = router;