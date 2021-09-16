const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

const makerSchema = new mongoose.Schema(
	{
		mapId: {
			type: mongoose.SchemaTypes.ObjectId,
			ref: 'maps',
		},
		level: Number,
		posts: [{ type: mongoose.SchemaTypes.ObjectId, ref: 'posts' }],
		coordinateX: Number,
		coordinateY: Number,
	},
	{ timestamps: true }
);

makerSchema.plugin(mongoosePaginate);
const Maker = mongoose.model('makers', makerSchema);

module.exports = { Maker };
