const sequelize = require('../config/connection');
const { User, Blog, Comment } = require('../models');

const userData = require('./userData.json');
const postData = require('./postData.json');
const commentData = require('./commentData.json');

const seedDatabase = async () => {

  await sequelize.sync({ force: true });
    await userData();
    await postData();
    await commentData();
    process.exit(0);
};
seedDatabase();
