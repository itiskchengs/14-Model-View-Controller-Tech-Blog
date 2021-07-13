//Import models
const Post = require('./Post');
const User = require('./User');

//Post belongsTo User
Post.belongsTo(User, {
    foreignKey: 'user_id'
});
//User have many Post
User.hasMany(Post, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
});

module.exports = {
    Post,
    User,
};