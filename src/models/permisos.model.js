import { Schema, model } from "mongoose";

const permisosSchema = new Schema({
    codigo: {
        type: Number,
        unique: true,
        require: [true, 'El campo codigoRol es requerido'],
        trim: true
    }, nombrePermiso: {
        type: String,
        unique: true,
        require: [true, 'El campo nombrePermiso es requerido'],
        trim: true
    }
}, {
    versionKey: false,
    timestamps: true
})

export default model('permisos', permisosSchema);