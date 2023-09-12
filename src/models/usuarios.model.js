import mongoose, { Mongoose, Schema, model } from "mongoose";

const UsuariosSchema = new Schema({
    cedula: {
        type: Number,
        unique: true,
        require: [true, 'El campo cedula es requerido']
    }, nombres: {
        type: String,
        unique: false,
        require: [true, 'El campo nombres es requerido']
    }, apellidos: {
        type: String,
        unique: false,
        require: [true, 'El campo apellidos es requerido']
    }, fechaNacimiento: {
        type: Date,
        unique: false,
        require: [true, 'El campo nacimiento es requerido']
    }, datosPersonales: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'datosPersonales'
    },

})

export default model('usuarios', UsuariosSchema);