const User = require('./User');
const Project = require('./Project');
const Post = require('./Post');
const Comment = require('./Comment')


Post.belongsTo(User, {
  foreignKey: 'user_id'
});

Post.hasMany(Comment, {
  foreignKey: 'post_id',
  onDelete: 'CASCADE',
});

Comment.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { User, Project };
