const express = require('express');
const router = express.Router();

const { body, param, validationResult } = require('express-validator');  // importing express validator package-library.

const categoryController = require('../controllers/category.controller');
const { error } = require('winston');

// Validators for req/res calls (can be done in a separate file and import / export it).
const idValidator = () => {
  return [
    param('id').isNumeric().withMessage('Enter only numbers')
  ];
};

const nameValidator = () => {
  return [
    body('name').not().isEmpty().withMessage('The field is required'),
    body('name').isString().withMessage('Enter only letters')
  ];
};

const updateValidator = () => {
  return [
    param('id').isNumeric().withMessage('Enter only numbers'),
    body('id').isNumeric().withMessage('Enter only numbers '),
    body('id').not().isEmpty().withMessage('The field is required'),
    body('name').isString().withMessage('Enter only letters'),
    body('name').not().isEmpty().withMessage('The field is required')
  ];
};

router.get('/', categoryController.findAll);
// We can create a new validator file and create these functions inside it, then export it and pass only the function here instead of having all the logic.
router.get('/:id', idValidator(), (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ status: false, data: errors.array() });
  }
  next();
}, categoryController.findOne);

router.post('/', nameValidator(), (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ status: false, data: errors.array() });
  }
  next();
}, categoryController.create);

router.patch('/:id', updateValidator(), (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ status: false, data: errors.array() });
  }
  next();
}, categoryController.update);

router.delete('/:id', idValidator(), (req, res, next) => {
  const errors = validationResult(req);

  if(!errors.isEmpty()) {
    return res.status(400).json({ status: false, data: errors.array() });
  }
  next();
}, categoryController.delete);

module.exports = router;