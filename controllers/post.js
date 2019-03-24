
const Post = require('../models/post');

exports.getPosts = (req, res) => {
    return res.json({
        posts: [
            {titl: "First post"},
            {title: 'Second post'}
        ]
    }); 
};

exports.createPost = (req, res) => {
    const post = new Post(req.body) 
    console.log('creating post', req.body);   
}