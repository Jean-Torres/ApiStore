import { Router } from 'express'
import *as rxpCtrl from '../controllers/rolXpermisos.controller';

const router = Router();

router.post('/', rxpCtrl.createRolPermisos);
router.get('/', rxpCtrl.findAllRolPermisos);
router.get('/:id', rxpCtrl.findOneRolPermiso);
router.delete('/:id', rxpCtrl.deleteRolPermiso);
router.put('/:id', rxpCtrl.updateRolxPermiso);

export default router;