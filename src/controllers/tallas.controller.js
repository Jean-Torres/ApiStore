import tallasModel from "../models/tallas.model";

export const findAllTalla = async (req, res) => {
    try {
        const tallas = await tallasModel.find();
        res.json(tallas);
    } catch (error) {
        res.status = 500;
        res.json({
            message: "Something goes wrang creating the tallas"
        })
    }
}

export const createTalla = async (req, res) => {
    const newTalla = new tallasModel({ codigo: req.body.codigo, nombre: req.body.nombre })
    const tallaSave = await newTalla.save();
    res.json({tallaSave});
}

export const findOneTalla = async (req, res) => {
    const tallas = await tallasModel.findById(req.params.id)
    res.json(tallas)
}

export const deleteTalla = async (req, res) => {
    await tallasModel.findByIdAndDelete(req.params.id)
    res.json({
        message: `${req.params.id} were deleted successfully`
    })
}

export const updateTalla = async (req, res) => {
    const updateTalla = await tallasModel.findByIdAndUpdate(req.params.id, req.body)
    res.json({ updateTalla })
}