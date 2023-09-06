import { Router } from 'express'
import *as usuarioCtrl from '../controllers/usuarios.controller';

const router = Router();

router.post('/', usuarioCtrl.createUsuario);
router.get('/', usuarioCtrl.findAllUsuario);
router.get('/:id', usuarioCtrl.findOneUsuario);
router.delete('/:id', usuarioCtrl.deleteUsuario);
router.put('/:id', usuarioCtrl.updateUsuario);

export default router;