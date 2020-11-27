var User = require('./models.js')

module.exports.insertarRegistro = function(callback) {
    let Mario = new User({ nombre: "Mario", edad: 22, genero: "masculino", estatura: 1.73 })

    Mario.save((error) => {
        if (error) callback(error)
        callback(null, "Registro guardado")
    })
}

module.exports.eliminarRegistro = function(callback) {
    User.remove({ nombre: "Camilo" }, (error) => {
        if (error) callback(error)
        callback(null, "Se elimino el registro correctamente");
    })
}

module.exports.consultarYActualizar = function(callback) {
    User.find({}).exec((error, result) =>{
        if (error)callback(error)
        console.log(result)
	User.update({nombre: "Mario"}, {edad: 44}, (error, result) =>{
            if (error) callback(error)
            callback(null, result)
        })
    })
}

module.exports.ordenarConsulta = function(callback) {
    User.find({}).sort({edad: -1}).exec((error, result) => {
        if (error) callback(error)
        callback(null, result)
    })
}


