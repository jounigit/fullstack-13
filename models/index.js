const User = require('./user');
const Blog = require('./blog');

User.hasMany(Blog);
Blog.belongsTo(User);

User.sync({ alter: true, force: true });
Blog.sync({ alter: true, force: true });

module.exports = {
  Blog,
  User
};