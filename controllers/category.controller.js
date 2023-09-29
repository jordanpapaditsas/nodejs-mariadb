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

exports.create = async(req, res) => {
  console.log('Insert new category name');
  const name = req.body.name;

  try {
    const result = await categoryService.create(name);
    res.status(200).json({ status: true, data: result });
    console.log('Success in saving category'); 
  } catch(error) {
    res.status(400).json({ status: false, data: error });
    console.log('Problem in saving category');
  }
};