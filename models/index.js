const User = require('./user');
const Blog = require('./blog');

User.hasMany(Blog);
Blog.belongsTo(User);

const syncDatabase = async () => {
  await User.sync({ alter: true, force: true });
  await Blog.sync({ alter: true, force: true });
};

module.exports = {
  Blog,
  User,
  syncDatabase
};