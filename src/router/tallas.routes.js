import { Router } from 'express'
import *as tallaCtrl from '../controllers/tallas.controller';

const router = Router();

router.post('/', tallaCtrl.createTalla);
router.get('/', tallaCtrl.findAllTalla);
router.get('/:id', tallaCtrl.findOneTalla);
router.delete('/:id', tallaCtrl.deleteTalla);
router.put('/:id', tallaCtrl.updateTalla);

export default router;