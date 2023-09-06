import { Router } from "express";

import * as productosDetallCtrl from '../controllers/tallaProducto.controller'

const router = Router();

router.post('/', productosDetallCtrl.createTallaProducto);
router.get('/', productosDetallCtrl.findAllTallaProducto);
router.get('/:id', productosDetallCtrl.findOneTallaProducto);
router.delete('/:id', productosDetallCtrl.deleteTallaProducto);
router.put('/:id', productosDetallCtrl.updateTallaProducto);

export default router;