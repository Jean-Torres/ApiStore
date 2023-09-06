import { Router } from 'express'
import *as pemisosCtrl from '../controllers/permisos.controller';

const router = Router();

router.post('/', pemisosCtrl.createPermiso);
router.get('/', pemisosCtrl.findAllpermisos);
router.get('/:id', pemisosCtrl.findOnePermiso);
router.delete('/:id', pemisosCtrl.deletePermiso);
router.put('/:id', pemisosCtrl.updatePermiso);

export default router;