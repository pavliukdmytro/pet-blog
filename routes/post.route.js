const {Router} = require('express');
const auth =  require('../middleware/auth.middleware');
const {Post} = require('../db');
const router = Router();

router.post('/', auth, async (req, res) => {
    try {
        const {title, body} = req.body;
        const {userId} = req.user;
    
        if(title.trim() === '' && body.trim === '') {
            res.status(400).json({ok: false, error: 'all fields must be filled'})
        }
        if(!userId) {
            res.status(400).json({ok: false, error: 'user not found'})
        }
        
        const post = new Post({
            title,
            body,
            owner: userId
        })
        await post.save();
        
        res.status(200).json({ok: true, post: post._doc});
    } catch (err) {
        console.error(err);
        res.status(500).json({ok: false, error: 'server error'})
    }
});

router.get('/',  async (req, res) => {
    const posts = await Post.find()
    .populate('owner');
    res.status(200).json(posts);
});

module.exports = router;
