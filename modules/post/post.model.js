const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

const postSchema = new mongoose.Schema(
	{
		name: String,
		content: String,
		makerId: {
			type: mongoose.SchemaTypes.ObjectId,
			ref: 'makers',
		},
	},
	{ timestamps: true }
);

postSchema.plugin(mongoosePaginate);
const Post = mongoose.model('posts', postSchema);

module.exports = { Post };
