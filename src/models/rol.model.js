import { Schema, model } from "mongoose";

const rolSchema = new Schema({
    codigo: {
        type: Number,
        unique: true,
        require: [true, 'El campo codigoRol es requerido'],
        trim: true
    }, nombreTipoUsuario: {
        type: String,
        unique: true,
        require: [true, 'El campo nombreTipoUsuario es requerido'],
        trim: true
    }
}, {
    versionKey: false,
    timestamps: true
})

export default model('rol', rolSchema);