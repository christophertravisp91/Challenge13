require('dotenv').config();

const Sequelize = require('sequelize');

const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(process.env.DB_NAME = 'ecommerce_db', process.env.DB_USER = 'root', process.env.DB_PW = 'ChPiAr121191$', {
      host: 'localhost',
      username:'root',
      password: 'ChPiAr121191$',
      dialect: 'mysql',
      dialectOptions: {
        decimalNumbers: true,
      },
    });

module.exports = sequelize;
