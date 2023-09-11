import usuarioModel from "../models/usuarios.model";

export const findAllUsuario = async (req, res) => {
    try {
        const usuarios = await usuarioModel.find()
            .populate('codigoRolXPermiso');
        res.json(usuarios);
    } catch (error) {
        res.status = 500;
        res.json({
            message: "Something goes wrang creating the tallas"
        })
    }
}

export const createUsuario = async (req, res) => {
    const newUsuario = new usuarioModel({ usuario: req.body.usuario, contrasenha: req.body.contrasenha, correo: req.body.correo, codigoRolXPermiso: req.body.codigoRolXPermiso })
    const usuarioSave = await newUsuario.save();
    res.json({ usuarioSave });
}

export const findOneUsuario = async (req, res) => {
    const usuario = await usuarioModel.findOne({ usuario: req.query.usuario, contrasenha: req.query.contrasenha })
        .populate('codigoRolXPermiso');
    res.json(usuario)
}

export const deleteUsuario = async (req, res) => {
    await usuarioModel.findOneAndDelete({ usuario: req.body.usuario, contrasenha: req.body.contrasenha })
    res.json({
        message: `${req.params.id} were deleted successfully`
    })
}

export const updateUsuario = async (req, res) => {
    const updatedUsuario = await usuarioModel.findOneAndUpdate({ usuario: req.body.usuario, contrasenha: req.body.contrasenha }, req.body)
    res.json({ updatedUsuario })
}