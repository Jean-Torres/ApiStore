import tallaProductos from '../models/tallaProducto.model'

export const findAllTallaProducto = async (req, res) => {
        const tallaproducto = await tallaProductos.find()
        .populate('referenceProducto referenceTalla');
        res.json(tallaproducto);
}

export const createTallaProducto = async (req, res) => {
    const tallaproducto = new tallaProductos({
         codigo: req.body.codigo, referenceProducto: req.body.referenceProducto, referenceTalla: req.body.referenceTalla,
          cantidad: req.body.cantidad })
    const newTallaProducto = await tallaproducto.save();
    res.json(newTallaProducto);
}

export const findOneTallaProducto = async (req, res) => {
    const tallaProducto = await tallaProductos.findById(req.params.id)
    res.json(tallaProducto)
}

export const deleteTallaProducto = async (req, res) => {
    await tallaProductos.findByIdAndDelete(req.params.id)
    res.json({
        message: `${req.params.id} were deleted successfully`
    })
}

export const updateTallaProducto = async (req, res) => {
    const updatedTallaProducto = await tallaProductos.findByIdAndUpdate(req.params.id, req.body)
    res.json({ updatedTallaProducto })
}