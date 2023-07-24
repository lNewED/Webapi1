const { Sequelize } = require("sequelize");
const dbConfig = require("../config/db.config");
//Create sequalize
const Sequelize = new Sequalize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: "mysql",
});

//Test the database connection
async function testConnection() {
  try {
    await Sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}
testConnection();
module.exports = Sequelize;
