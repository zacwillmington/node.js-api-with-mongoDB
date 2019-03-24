exports.getPosts = (req, res) => {
    return res.json({
        posts: [
            {titl: "First post"},
            {title: 'Second post'}
        ]
    }); 
};