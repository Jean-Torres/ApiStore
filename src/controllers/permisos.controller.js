import pemisosMoel from "../models/permisos.model";

export const findAllpermisos = async (req, res) => {
    try {
        const permisos = await pemisosMoel.find();
        res.json(permisos);
    } catch (error) {
        res.status = 500;
        res.json({
            message: "Something goes wrang creating the tallas"
        })
    }
}

export const createPermiso = async (req, res) => {
    const newPermiso = new pemisosMoel({ codigo: req.body.codigo, nombrePermiso: req.body.nombre })
    const permisoSave = await newPermiso.save();
    res.json({permisoSave});
}

export const findOnePermiso = async (req, res) => {
    const permiso = await pemisosMoel.findById(req.params.id)
    res.json(permiso)
}

export const deletePermiso = async (req, res) => {
    await pemisosMoel.findByIdAndDelete(req.params.id)
    res.json({
        message: `${req.params.id} were deleted successfully`
    })
}

export const updatePermiso = async (req, res) => {
    const updatedPermiso = await pemisosMoel.findByIdAndUpdate(req.params.id, req.body)
    res.json({ updatedPermiso })
}