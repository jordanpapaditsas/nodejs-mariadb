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

function findOne(id) {
  const result = dataSource
    .getRepository(CategoryEntity)
    .createQueryBuilder()
    .select('ct')
    .from(CategoryEntity, 'ct')
    .where('ct.id = :id', { id: id })
    .getOne()

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

function update(data) {
  const result = dataSource
    .getRepository(CategoryEntity)
    .createQueryBuilder()
    .update(CategoryEntity)
    .set({name: data.name})
    .where('id = :id', { id: data.id })
    .execute()
    .catch(error => console.log(error))

  return result;
}

function deleteCategory(id) {
  const result = dataSource
    .getRepository(CategoryEntity)
    .createQueryBuilder()
    .delete()
    .from(CategoryEntity)
    .where('id = :id', { id: id })
    .execute()
    .catch(error => console.log(error))

  return result;
}

module.exports = { create, findAll, findOne, update, deleteCategory };