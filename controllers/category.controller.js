const categoryService = require('../services/category.services');

exports.findAll = async(req, res) => {
  console.log('Find all categories');

  try {
    const result = await categoryService.findAll();
    res.status(200).json({ status: true, data: result });
    console.log('Success in finding all categories');
  } catch(error) {
    res.status(400).json({ status: false, data: error });
    console.log('Problem in finding all categories');
  }
};

exports.findOne = async(req, res) => {
  const id = req.params.id;
  console.log('Find category with id', id);

  try {
    const result = await categoryService.findOne(id);
    res.status(200).json({ status: true, data: result });
    console.log('Success in finding category with id: ', id);
  } catch(error) {
    res.status(400).json({ status: false, data: error });
    console.log('Problem in finding category with id: ', id);
  }
};

exports.create = async(req, res) => {
  const name = req.body.name;
  console.log('Insert new category name');

  try {
    const result = await categoryService.create(name);
    res.status(200).json({ status: true, data: result });
    console.log('Success in saving category'); 
  } catch(error) {
    res.status(400).json({ status: false, data: error });
    console.log('Problem in saving category');
  }
};

exports.update = async(req, res) => {
  const id = req.params.id;
  console.log('Update category with id: ', id);

  try {
    const result = await categoryService.update(req.body);
    res.status(200).json({ status: true, data: result });
    console.log('Success in updating category with id: ', id); 
  } catch(error) {
    res.status(400).json({ status: false, data: error });
    console.log('Problem in updating category');
  }
};

exports.delete = async(req, res) => {
  const id = req.params.id;

  try {
    const result = await categoryService.deleteCategory(id);
    res.status(200).json({ status: true, data: result });
    console.log('Success in deleting category with id: ', id); 
  } catch(error) {
    res.status(400).json({ status: false, data: error });
    console.log('Problem in deleting category');
  }
};