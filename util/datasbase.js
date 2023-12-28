const Sequelize = require("sequelize");

const sequelize = new Sequelize(
  process.env.DATABASE,
  process.env.USER,
  process.env.PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: "mysql",
  }
);

console.log(process.env.DB_HOST);

module.exports = sequelize;
