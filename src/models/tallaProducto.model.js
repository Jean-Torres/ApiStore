import mongoose, { Mongoose, Schema, model } from "mongoose";

const productoTallaSchema = new Schema({
    codigo: {
        type: Number,
        unique: true,
        require: [true, 'El campo codigoProductoTalla es requerido'],
        trim: true
    }, referenceProducto: {
        type: mongoose.Schema.Types.ObjectId,ref: 'Productos'
    }, referenceTalla: {
        type: mongoose.Schema.Types.ObjectId, ref: 'tallas'
    }, cantidad: {
        type: Number,
        unique: false,
        require: [true, 'El campo canidad es requerido'],
        trim: true
    }
}, {
    versionKey: false,
    timestamps: true
})

export default model('productoTalla', productoTallaSchema);