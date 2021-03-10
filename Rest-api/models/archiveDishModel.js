const mongoose = require('mongoose');

const types = mongoose.Schema.Types;

const archiveDishSchema = new mongoose.Schema(
    { type: types.ObjectId, ref: 'dish' } 
);

module.exports = mongoose.model("archiveDish", archiveDishSchema);