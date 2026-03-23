const router = require('express').Router();
const { User } = require('../models');

router.get('/', async (req, res) => {
  try {
    const users = await User.findAll();
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
    const newUser = await User.create(req.body);
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