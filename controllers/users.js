const router = require('express').Router();
const bcrypt = require('bcrypt');
const { User, Blog } = require('../models');

router.get('/', async (req, res) => {
  try {
    const users = await User.findAll({
      include: {
        model: Blog,
        attributes: { exclude: ['userId'] }
      }
    });
    res.json(users);
  } catch (err) {
    console.error('Error:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.get('/:username', async (req, res) => {
  try {
    const user = await User.findOne({ where: { username: req.params.username } });
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json(user);
  } catch (err) {
    console.error('Error:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.post('/', async (req, res, next) => {
  try {
    const { username, name, password } = req.body;
    if (!password || password.length < 3) {
      return res.status(400).json({ error: 'Password must be at least 3 characters long' });
    }
    const saltRounds = 10;
    const passwordHash = await bcrypt.hash(password, saltRounds);

    const newUser = await User.create({
      username,
      name,
      passwordHash
    });

    return res.status(201).json(newUser);
  } catch (err) {
    console.error('Error:', err);
    next(err);
  }
});

router.put('/:username', async (req, res, next) => {
        try {
        const user = await User.findOne({ where: { username: req.params.username } });
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        user.name = req.body.name;
        await user.save();
        res.json(user);
    } catch (err) {
        console.error('Error:', err);
        next(err);
    }
}); 

module.exports = router;