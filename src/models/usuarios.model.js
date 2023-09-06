import mongoose, { Schema, model } from "mongoose";

const UsuariosSchema = new Schema({
    usuario: {
        type: String,
        unique: true,
        require: [true, 'El campo usuarios es requerido'],
        trim: true
    }, contrasenha: {
        type: String,
        unique: false,
        require: [true, 'El campo contraseña es requerido'],
        trim: true
    }, correo: {
        type: String,
        unique: true,
        require: [true, 'El campo correo es requerido'],
        trim: true
    }, codigoRolXPermiso: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'rolXpermisos'
    }
}, {
    versionKey: false,
    timestamps: true
})

export default model('usuarios', UsuariosSchema
)