import datoSesion from '../models/datosDeSesion.model'

export const findAlldatopersonal = async (req, res) => {
    const datopersonal = await datoSesion.find()
    res.json(datopersonal);
}

export const createdatopersonal = async (req, res) => {
    const datopersonal = new datoSesion({
        correoElectronico: req.body.correoElectronico, telefono: req.body.telefono, direccion: req.body.direccion
    })
    const newdatopersonal = await datopersonal.save();
    res.json(newdatopersonal);
}

export const findOnedatopersonal = async (req, res) => {
    const datopersonal = await datoSesion.findById(req.params.id)
    res.json(datopersonal);
}

export const deletedatopersonal = async (req, res) => {
    await datoSesion.findByIdAndDelete(req.params.id);
    res.json({
        message: `${req.params.id} were datopersonal deleted`
    })
}

export const updatedatopersonal = async (req, res) => {
    const updatedDatopersonal = await datoSesion.findByIdAndUpdate(req.params.id, req.body)
    res.json({ updatedDatopersonal })
}