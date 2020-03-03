const express = require('express');
const router = express.Router();
const {User} = require('../db');
const { check, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const auth = require('../middleware/auth.middleware.js');

router.post('/registration', [
    check('userName').isEmail(),
    check('password').isLength({ min: 6 })
], async (req, res) => {
    try{
        const {userName, password} = req.body;

        const user = await User.findOne({userName});
        if(user) {
            res.json({ ok: false, error: 'this login is already busy' });
            return;
        };

        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(422).json({ ok: false, error: 'не коректные данные' });
        };

        const hashedPassword = await bcrypt.hash(password, 12);

        // console.log();
        const createUser = new User({
            userName,
            password: hashedPassword
        });
        await createUser.save();
        
        console.log(createUser._id);

        const token = jwt.sign(
            {userId: createUser._id},
            config.get('jwtSecret'),
            { expiresIn: 30 * 60 }
        );

        res.status(201).json({ok: true, token, userId: createUser.id, message: 'create new user'});
    } catch (err) {
        console.error(err);
        res.json({error: 'server error'});
    }
});

router.post('/authorization',[
    check('userName').isEmail(),
    check('password').isLength({ min: 6 })
], async (req, res) => {
    const {userName, password} = req.body;
    const user = await User.findOne({userName});
    if(!user) {
        res.json({ ok: false, error: 'wrong password or email' });
        return;
    };

    const isMatch = await bcrypt.compare(password, user.password);

    if(!isMatch) {
        return res.status(400).json({ok: false, error: 'Неверный пароль попробуйте снова'});
    }

    const token = jwt.sign(
        {userId: user._id},
        config.get('jwtSecret'),
        { expiresIn: 30 * 60 }
        );
    console.log(token);
    res.json({ok: true, token, userId: user.id});

});

router.get('/checkauth', auth, (req, res) => {
    if(req.user) {
        res.status(200).json({ok: true});
    } else {
        res.status(401).json({ok: false});
    }
});

module.exports = router;
