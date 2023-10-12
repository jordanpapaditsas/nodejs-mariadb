const express = require('express');
const router = express.Router();

const { body, param, validationResult } = require('express-validator');   // importing express validator package-library.
const postController = require('../controllers/post.controller');

const textTitleValidator = () => {
  return [
    body('title').not().isEmpty().withMessage('The field is required'),
    body('title').isString().withMessage('Enter only letters'),
    body('text').not().isEmpty().withMessage('The field is required'),
    body('text').isString().withMessage('Enter only letters')
  ];
};

router.post('/', textTitleValidator(), (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ status: false, data: errors.array() });
  }
  next();

}, postController.create);


router.get('/', postController.findAll);
router.get('/:id', postController.findOne);
router.patch('/:id', postController.updatePost);
router.patch('/:id/categories', postController.updateCategory);
router.delete('/:id', postController.deletePost);
router.delete('/:id/categories', postController.deleteCategory);

module.exports = router;