const Restaurant = require("../models/restaurant.model");
const router = require("../routes/restaurant.router");
const { route } = require("../routes/restaurant.router");

Restaurant.getAll = async () => {
    console.log("HelloPass1");
    try {
        const restaurants = await Restaurant.findAll({});
        return restaurants
    } catch (error) {
        console.log("err", error);
        throw error;
    }
};

Restaurant.getone = async (resid) => {
    try {
        const restaurant = await Restaurant.findOne({ where: { id: resid } });
        return restaurant
    } catch (error) {
        console.log("err", error);
        throw error;

    }
};

Restaurant.deletebyid = async (resid) => {
    try {
        const restaurant = await Restaurant.destroy({ where: { id: resid } });
        return restaurant
    } catch (error) {
        console.log("err", error);
        throw error;

    }
};

Restaurant.createrestaurant = async (add) => {
    try {
        const restaurant = await Restaurant.create(add)
        return restaurant.toJSON()
    } catch (error) {
        console.log("err", error);
        throw error;

    }
};

Restaurant.restaurantupdateid = async (edit,resid) => {
    try {
        const restaurant = await Restaurant.update(edit,({ where: { id: resid } }))
        return restaurant
    } catch (error) {
        console.log("err", error);
        throw error;

    }
};

module.exports = Restaurant;