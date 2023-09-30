const { dataSource } = require('../connect');
const PostEntity = require('../models/Post').PostEntity;

function findAll() {
  const result = dataSource
   .getRepository(PostEntity)
   .createQueryBuilder('post')
   .leftJoinAndSelect('post.categories', 'category')
   .getMany()

  return result; 
}

function findOne(id) {
  const result = dataSource
    .getRepository(PostEntity)
    .createQueryBuilder('post')
    .leftJoinAndSelect('post.categories', 'category')
    .where('post.id = :id', { id: id })
    .getOne()

  return result;
}

function create(data) {
  const result = dataSource
   .getRepository(PostEntity)
   .save(data)
   .catch((error) => console.log('Problem in saving post', error))

  return result;
}

function updatePost(data) {
  const result = dataSource
    .getRepository(PostEntity)
    .createQueryBuilder()
    .update(PostEntity)
    .set({
      title: data.title,
      text: data.text
    })
    .where('id = :id', { id: id })
    .execute()

  return result; 
}

async function updateCategory(data) {
  const actualRelationships = await dataSource
    .getRepository(PostEntity)
    .createQueryBuilder()
    .relation(PostEntity, 'categories')
    .of(data.id)
    .loadMany()

  const result = await dataSource
    .getRepository(PostEntity)
    .createQueryBuilder()
    .relation(PostEntity, 'categories')
    .of(data.id)
    .addAndRemove(data.categories, actualRelationships)
    .catch((error) => console.log('Cannot update categories', error))

  return result;  
}

function deletePost(id) {
  const result = dataSource
    .getRepository(PostEntity)
    .createQueryBuilder()
    .delete()
    .from(PostEntity)
    .where('id = :id', { id: id })
    .execute()
    
  return result;
}

function deleteCategory(data) {
  const result = dataSource
    .getRepository(PostEntity)
    .createQueryBuilder()
    .relation(PostEntity, 'categories')
    .of(data)
    .remove(data.categories)

  return result;  
}

module.exports = { findAll, findOne, create, updatePost, updateCategory, deletePost, deleteCategory };