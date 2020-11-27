var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var userSchema = new Schema({
    nombre: { type: String, required: true },
	edad: { type: Number, required: true },
    genero: { type: String, required: true },
	estatura: { type: Number, required: true }
})


var User = mongoose.model('User', userSchema);

module.exports = User;
