const express = require('express');
const router = express.Router();
const validator = require('../validator');

const postController = require('../controllers/post');

router.get('/', postController.getPosts);
router.post('/post', postController.createPost, validator.createPostValidtor);

module.exports = router; 