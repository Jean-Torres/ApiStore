import { Schema, model } from "mongoose"

const datosPersonalesSchema = new Schema({
    correoElectronico: {
        type: String,
        unique: false,
    }, telefono: {
        type: Number,
        unique: false,
    }, direccion: {
        type: String,
        unique: false,
    }
})

export default model('datosPersonales', datosPersonalesSchema)