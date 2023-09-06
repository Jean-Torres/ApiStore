import rxpModel from "../models/rolXpermisos.model";

export const findAllRolPermisos = async (req, res) => {
    // try {
        const rolPermiso = await rxpModel.find()
        .populate('codigoRol codigoPermiso');
        res.json(rolPermiso);
    // } catch (error) {
    //     res.status = 500;
    //     res.json({
    //         message: "Something goes wrang creating the tallas"
    //     })
    // }
}

export const createRolPermisos = async (req, res) => {
    const newRolPermiso = new rxpModel({ codigo: req.body.codigo, codigoRol: req.body.codigoRol, codigoPermiso: req.body.codigoPermiso })
    const rolPermisoSave = await newRolPermiso.save();
    res.json({rolPermisoSave});
}

export const findOneRolPermiso = async (req, res) => {
    const rolPermiso = await rxpModel.findById(req.params.id)
    res.json(rolPermiso)
}

export const deleteRolPermiso = async (req, res) => {
    await rxpModel.findByIdAndDelete(req.params.id)
    res.json({
        message: `${req.params.id} were deleted successfully`
    })
}

export const updateRolxPermiso = async (req, res) => {
    const updatedRolPermiso = await rxpModel.findByIdAndUpdate(req.params.id, req.body)
    res.json({ updatedRolPermiso })
}