const jwt = require('jsonwebtoken');
const loginRouter = require('express').Router();

const { SECRET } = require('../util/config');
const { User } = require('../models');


loginRouter.post('/', async (req, res) => {
  const { username } = req.body;

  const user = await User.findOne({ where: { username } });
  const passwordCorrect = 
  user == null ? false : await bcrypt.compare(password, user.passwordHash);

    if (!(user && passwordCorrect)) {
    return res.status(401).json({ error: 'invalid username or password' });
  } 

  const userForToken = {
    id: user.id,
    username: user.username
  };

  const token = jwt.sign(userForToken, SECRET);

  res.status(200).send({ token, username: user.username, name: user.name });
});

module.exports = loginRouter;