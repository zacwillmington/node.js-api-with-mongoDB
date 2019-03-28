
const Post = require('../models/post');

exports.getPosts = (req, res) => {
    const posts = Post.find()
    .select('_id title body')
    .then((posts) => {
        return res.status(200).json({posts: posts});
    }).catch( err => console.log(err))
};

exports.createPost = (req, response) => { 
    const post = new Post(req.body);
    post.save().then((res) => res.status(200).json({
        post: result
    })).catch( err => console.log(err));
}