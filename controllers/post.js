
const Post = require('../models/post');

exports.getPosts = (req, res) => {
    console.log("get post controller");
    return res.json({
        posts: [
            {titl: "First post"},
            {title: 'Second post'}
        ]
    }); 
};

exports.createPost = (req, response) => { 
    const post = new Post(req.body);
    post.save().then((res) => res.status(200).json({
        post: result
    })).catch( err => console.log(err));
}