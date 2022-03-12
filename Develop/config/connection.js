require('dotenv').config();

const Sequelize = require('sequelize');

const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
      host: 'localhost',
      dialect: 'mysql',
      dialectOptions: {
        decimalNumbers: true,
      },
    });

module.exports = sequelize;

// const Sequelize = require('sequelize');

// let sequelize;

// if(process.env.JAWSDB_URL) {
//     sequelize = new Sequelize(process.env.JAWSDB_URL);
// } else {
//     sequelize = new Sequelize ('ecommerce_db', 'root', 'ChPiAr121191$', {
//     dialect: 'mysql',
//     host: 'localhost',
//     port: process.env.PORT || 3002
//     });
// }
// module.exports = sequelize;