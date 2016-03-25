var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CharacterPlodSchema = new Schema({
    character: {type: Schema.Types.ObjectId, ref: 'Character'},
    plod: {type: Number},           //% likelihood of death
    date: {type: Date},				// It allows a timeline, if necessary
    algorithm: {type: String}     // Group B6, Group B7, Method XYZ
});

module.exports = mongoose.model('CharacterPlod', CharacterPlodSchema);