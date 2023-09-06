import { Schema, model } from "mongoose";


const tallasSchema = new Schema({
    codigo: {
        type: Number,
        unique: true,
        require: [true, 'El campo codigo es requerido'],
        trim: true
    }, nombre: {
        type: String,
        unique: false,
        require: [true, 'El campo nombre es requerido'],
        trim: true
    }
}, {
    versionKey: false,
    timestamps: true
})

export default model('tallas', tallasSchema);