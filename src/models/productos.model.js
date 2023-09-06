import { text } from 'express';
import mongoose, { model, Schema } from 'mongoose';

const ProductoSchema = new Schema({
    codigo: {
        type: String,
        unique: true,
        require: [true, 'El campo codigo es requerido'],
        trim: true
    }, nombre: {
        type: String,
        unique: false,
        require: [true, 'El campo nombre es requerido'],
        trim: true
    }, descripcion: {
        type: String,
        unique: false,
        require: [true, 'El campo nombre es requerido'],
        trim: true
    }, cantidad: {
        type: Number,
        unique: false,
        require: [true, 'El campo nombre es requerido'],
        trim: true
    }, valorUnitario: {
        type: Number,
        unique: false,
        require: [true, 'El campo valorUnitario es requerido'],
        trim: true
    }, estadoProducto: {
        type: Boolean,
        unique: false,
        require: [true, 'El campo nombre es requerido'],
        trim: true
    }, categoria: {
        type: mongoose.Schema.Types.ObjectId, ref: 'categorias'
    }
}, {
    versionKey: false,
    timestamps: true
})

export default model('Productos', ProductoSchema);