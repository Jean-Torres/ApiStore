import { Router } from 'express'
import *as rolCtrl from '../controllers/rol.controller';

const router = Router();

router.post('/', rolCtrl.createRol);
router.get('/', rolCtrl.findAllRols);
router.get('/:id', rolCtrl.findOneRol);
router.delete('/:id', rolCtrl.deleteRol);
router.put('/:id', rolCtrl.updateRol);

export default router;