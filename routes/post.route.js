const {Router} = require('express');
const router = Router();

router.post('/', async (req, res) => {
    console.log(req.body);

    res.status(200).json({ok: true});
});

module.exports = router;
