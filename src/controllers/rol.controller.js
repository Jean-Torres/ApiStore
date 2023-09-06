import rolModel from "../models/rol.model";

export const findAllRols = async (req, res) => {
    try {
        const rols = await rolModel.find();
        res.json(rols);
    } catch (error) {
        res.status = 500;
        res.json({
            message: "Something goes wrang creating the tallas"
        })
    }
}

export const createRol = async (req, res) => {
    const newRol = new rolModel({ codigo: req.body.codigo, nombreTipoUsuario: req.body.nombre})
    const rolSave = await newRol.save();
    res.json({rolSave});
}

export const findOneRol = async (req, res) => {
    const rol = await rolModel.findById(req.params.id)
    res.json(rol)
}

export const deleteRol = async (req, res) => {
    await rolModel.findByIdAndDelete(req.params.id)
    res.json({
        message: `${req.params.id} were deleted successfully`
    })
}

export const updateRol = async (req, res) => {
    const updateRol = await rolModel.findByIdAndUpdate(req.params.id, req.body)
    res.json({ updateRol })
}