const CategoryEntity = require('../models/Category').CategoryEntity;
const dataSource = require('../connect').dataSource;

function findAll() {
  const result = dataSource
    .getRepository(CategoryEntity)
    .createQueryBuilder()
    .select('category')   // Alias 
    .from(CategoryEntity, 'category')
    .getMany()

    return result;
}

function create(name) {
  console.log('Service category create');

  const result = dataSource
    .getRepository(CategoryEntity)
    .createQueryBuilder()
    .insert()
    .into(CategoryEntity)
    .values([
      { name: name }
    ])
    .execute()
    .catch(error => console.log(error));

    return result;
}

module.exports = { create, findAll };