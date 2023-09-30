const express = require('express');
const router = express.Router();

const postController = require('../controllers/post.controller');

router.post('/', postController.create);
router.get('/', postController.findAll);
router.get('/:id', postController.findOne);
router.patch('/:id', postController.updatePost);
router.patch('/:id/categories', postController.updateCategory);
router.delete('/:id', postController.deletePost);
router.delete('/:id/categories', postController.deleteCategory);

module.exports = router;