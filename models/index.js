const User = require('./user');
const Blog = require('./blog');
const ReadingLists = require('./reading_list');

User.hasMany(Blog);
Blog.belongsTo(User);

User.belongsToMany(Blog, { through: ReadingLists, as: 'readings' });
Blog.belongsToMany(User, { through: ReadingLists, as: 'readers' });

module.exports = {
  Blog,
  User,
  ReadingLists
};