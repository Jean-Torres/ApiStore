import { Router } from 'express'
import *as dpCtrl from '../controllers/datosPersonales.controller';

const router = Router();

router.post('/', dpCtrl.createdatopersonal);
router.get('/', dpCtrl.findAlldatopersonal);
router.get('/:id', dpCtrl.findOnedatopersonal);
router.delete('/:id', dpCtrl.deletedatopersonal);
router.put('/:id', dpCtrl.updatedatopersonal);

export default router;