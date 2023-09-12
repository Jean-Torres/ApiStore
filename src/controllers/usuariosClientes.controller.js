import usuarioModel from "../models/usuarios.model";

export const findAllUsuario = async (req, res) => {
    try {
        const usuarios = await usuarioModel.find()
            .populate('datosPersonales');
        res.json(usuarios);
    } catch (error) {
        res.status = 500;
        res.json({
            message: "Something goes wrang creating the tallas"
        })
    }
}

export const findOneUsuario = async (req, res) => {
    const usuario = await usuarioModel.findOne()
        .populate('datosPersonales');
    res.json(usuario)
}

export const createUsuario = async (req, res) => {
    const newUsuario = new usuarioModel({
        cedula: req.body.cedula, nombres: req.body.nombres, apellidos: req.body.apellidos, fechaNacimiento: req.body.fechaNacimiento, datosPersonales: req.body.datosPersonales
    })
    const usuarioSave = await newUsuario.save();
    res.json({ usuarioSave });
}

export const deleteUsuario = async (req, res) => {
    await usuarioModel.findOneAndDelete(req.body.id)
    res.json({
        message: `${req.params.id} were deleted successfully`
    })
}

export const updateUsuario = async (req, res) => {
    try {
        const usuarioActualizado = await usuarioModel.findOneAndUpdate(
            { cedula: req.body.cedula },
            req.body.newContrasenha,
            { new: true }
        );
        if (usuarioActualizado) {
            res.sendStatus(205);
        } else {
            res.sendStatus(404);
        }
    } catch (error) {
        res.sendStatus(500);
    }
};