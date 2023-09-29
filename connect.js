const typeorm = require('typeorm');
require('dotenv').config();

const CategoryEntity = require('./models/Category').CategoryEntity;
const PostEntity = require('./models/Post').PostEntity;

const dataSource = new typeorm.DataSource({
  type: 'mariadb',
  host: process.env.HOST,
  port: 3306,
  username: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  entities: [ CategoryEntity, PostEntity ],
  synchronize: true
});

dataSource
  .initialize()
  .then(function() {
    console.log('Connection with Database success');
  })
  .catch(function(error) {
    console.log('Problem in connecting with Database', error);
  });

module.exports = { dataSource };