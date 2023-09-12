import rxpModel from "../models/rolXpermisos.model";

export const findAllRolPermisos = async (req, res) => {
    const datosBuscar = "codigoRol codigoPermiso"
    const rolPermiso = await rxpModel.find({}, datosBuscar)
        .populate('codigoPermiso codigoRol');
    res.json(rolPermiso);

}

export const createRolPermisos = async (req, res) => {
    const newRolPermiso = new rxpModel({ codigo: req.body.codigo, codigoRol: req.body.codigoRol, codigoPermiso: req.body.codigoPermiso })
    const rolPermisoSave = await newRolPermiso.save();
    res.json({ rolPermisoSave });
}

export const findOneRolPermiso = async (req, res) => {
    const datosBuscar = "codigoRol codigoPermiso"
    const rolPermiso = await rxpModel.findById(req.params.id, datosBuscar)
    .populate('codigoPermiso codigoRol')
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