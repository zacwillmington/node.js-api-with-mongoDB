
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
    post.save((err, result) => {
        if(err){
            return res.status(400).json({
                error: errr   
            });
        }  
        res.status(200).json({
            post: result
        })
    })
    console.log('creating post', post);   
}