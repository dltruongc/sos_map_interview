const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

const mapSchema = new mongoose.Schema(
	{
		zoomLevel: Number,
		makerCount: Number,
		makers: [{ type: mongoose.SchemaTypes.ObjectId, ref: 'makers' }],
		zoomRatio: Number,
		unit: { type: String, enum: ['cm', 'dm', 'm', 'km'], default: 'cm' },
		/** including X axis and Y axis */
		dimension: {
			type: mongoose.SchemaTypes.Mixed,
		},
	},
	{ timestamps: true }
);

mapSchema.plugin(mongoosePaginate);
const Map = mongoose.model('maps', mapSchema);

module.exports = { Map };
