# Restaurant Restful API
# Webservices

* ในส่วนตรงนี้ ต้องทำการเปิด xampp ก่อนถ้าไม่งั้นจะไม่สามารถเชื่อมต่อฐานข้อมูลได้ 
  
![image](https://github.com/lNewED/Webapi1/assets/120123210/7d18f332-6135-4977-a333-2a49fc0f0b6b)

# ในส่วนตรงนี้จะเป็นหน้าแสดง หน้าหลักของเว็บ

* ในส่วนตรงนี้จะเป็นหน้าแสดงอาหาร
![image](https://github.com/lNewED/Webapi1/assets/120123210/58b4401c-53fe-4fa4-b3ae-d825ce365a82)

*ส่วนหน้านี้จะเป็นหน้าแอดรายการอาหาร
![image](https://github.com/lNewED/Webapi1/assets/120123210/e19904a7-444f-424e-b837-f3c2a5e3a67c)

*ส่วนหน้านี้จะเป็นหน้าแก้ไขข้อมูลรายกายอาหาร
![image](https://github.com/lNewED/Webapi1/assets/120123210/442e1a1d-b9b1-4ad9-924e-4827ab19e95e)

## Frontend

*HTML เป็นส่วนที่กำหนดโครงสร้างและกำหนดรูปแบบของหน้าเว็บ
![image](https://github.com/lNewED/Webapi1/assets/120123210/7f8ec61b-72f1-4a0e-883f-705c53913da2)

## Backend

# Connect Database
   ส่วนเชื่อมต่อฐานข้อมูล db.config.js
   
    module.exports ={
    HOST:"localhost",
    USER:"root",
    PASSWORD:"",
    DB:"restaurant"}

# Server.js
  เป็นส่วนที่ไว้รันเซิฟเวอร์เชื่อมต่อฐานข้อมูล

      const express = require("express");
    const cors = require("cors");
    const sql = require("./models/db");
    const restaurantRouter = require("./routes/restaurant.router");
    const Restaurant = require("./models/restaurant.model");
    const PORT = 5000;

    //create service
    const app = express();

    //Use middleware
    app.use(cors());
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));
    
    app.get("/", (req, res) => {
      res.send("<h1>Hello World</h1>");
    });
    
    app.use("/", restaurantRouter);
    
    app.listen(PORT, () => {
      console.log("Server connect on http://localhost:" + PORT);
    });

# restaurant.router.js
  router คือ เส้นทางหรือการกำหนด URL หรือ Path ที่ใช้เรียกข้อมูล HTTP request เช่น
  GET POST PUT หรือ DELETE 

      const express = require("express");
    const router = express.Router();
    const Restaurant = require("../controller/restaurant.controller");
    
    //Create a new restaurant
    //http://localhost:5000/restaurant
    router.post("/restaurants", async (req, res) => {
      try {
        const newRestaurant = req.body;
        const createRestaurant = await Restaurant.create(newRestaurant);
        res.status(201).json(createRestaurant);
      } catch (err) {
        res.status(500).json({ error: "Failed to created" })
      }
    });
    
    router.get("/Food", async (req, res) => {
      try {
        console.log("Hello")
        const ShoRestaurant = await Restaurant.getAll();
        res.status(201).json(ShoRestaurant)
      } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Failed to Show Restaurant" })
      }
    });
    
    router.get("/Food/:id", async (req, res) => {
      try {
        console.log("Hello")
        const resid = req.params.id
        const ShoRestaurant = await Restaurant.getone(resid)
        res.status(201).json(ShoRestaurant)
      } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Failed to Show Restaurant" })
      }
    });
    
    router.delete("/Food/:id", async (req, res) => {
      try {
        console.log("Hello")
        const resid = req.params.id
        const ShoRestaurant = await Restaurant.deletebyid(resid)
        res.status(201).json(ShoRestaurant)
      } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Failed to Show Restaurant" })
      }
    });
    
    router.put("/Food/:id", async (req, res) => {
      try {
        console.log("Hello")
        const edit = req.body
        const resid = req.params.id
        const ShoRestaurant = await Restaurant.restaurantupdateid(edit, resid)
        res.status(201).json({ message: "success" })
      } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Failed to Show Restaurant" })
      }
    });
    
    module.exports = router;
    
![image](https://github.com/lNewED/Webapi1/assets/120123210/6b686e9c-2026-4ff2-87f6-b973b4b2dab8)


    


    
  
  
    







