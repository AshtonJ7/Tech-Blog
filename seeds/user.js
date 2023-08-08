const { User } = require('../models');

const userData =
[
  {
    "username": "James",
    "email": "james82@gmail.com",
    "password": "akmin12335"
  },
  {
    "username": "Leonard",
    "email": "lennyboy92@hotmail.com",
    "password": "thisisapassword22"
  },
  {
    "username": "Jacob",
    "email": "jacobzelo@gmail.com",
    "password": "jacben43"
  }
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;