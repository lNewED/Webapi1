const { DataTypes } = require("sequelize");
const sequelize = require("./db");

//Defind the restaurants model
const Restaurant = sequelize.define("restaurants", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  type: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  imageurl: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: true,
    defaultValue: DataTypes.NOW,
  },
  updatedAt: {
    type: DataTypes.DATE,
    allowNull: true,
    defaultValue: DataTypes.NOW,
  },
});
//Synchronize database
Restaurant.sync({ force: false }).then(() => {
  console.log("Table is Update")
}).catch((error) => {
  console.error("Error Not create table")
})

module.exports = Restaurant;
