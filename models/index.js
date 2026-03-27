const User = require('./user');
const Blog = require('./blog');
const ReadingList = require('./reading_list');

User.hasMany(Blog);
Blog.belongsTo(User);

User.belongsToMany(Blog, { through: ReadingList, as: 'reading_list' });
Blog.belongsToMany(User, { through: ReadingList, as: 'readers' });

module.exports = {
  Blog,
  User,
  ReadingList
};