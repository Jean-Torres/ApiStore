import { Schema, model, modelo } from "mongoose";

const rolXpermisosSchemas = new Schema({
    codigorolXpermiso: {
        type:Number,
        unique: true,
        require: [true, 'El campo codigo es requerido'],
    }, codigoRol: {
        type: Schema.Types.ObjectId,
        ref: 'rol'
    }, codigoPermiso: {
        type: Schema.Types.ObjectId,
        ref: 'permisos'
    }
})

export default model('rolXpermisos', rolXpermisosSchemas)