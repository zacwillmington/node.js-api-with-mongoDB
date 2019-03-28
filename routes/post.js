const express = require('express');
const router = express.Router();
const validator = require('../validator');
const { getPosts, createPost } = require('../controllers/post');

router.get('/', getPosts);
router.post('/post', createPost, validator.createPostValidtor);

module.exports = router; 