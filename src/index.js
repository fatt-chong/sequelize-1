const express = require('express');
const app = express();
const { Sequelize } = require('sequelize');
const {test} = require("../config/config.json");

const sequelize = new Sequelize('fatt-test_db', 'fatt-test', 'tuhermanaen-4', {
    host: 'mysql-fatt-test.alwaysdata.net',
    dialect: 'mysql'
});

  
const port = process.env.PORT || 3000;
app.listen(port, async () => {
    console.log("servidor en el puerto: " + port);

    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
});