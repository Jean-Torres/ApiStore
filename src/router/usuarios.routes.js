import { Router } from 'express'
import *as usuarioCtrl from '../controllers/usuarios.controller';

const router = Router();

router.post('/', usuarioCtrl.createUsuario);
router.get('/userOne', usuarioCtrl.findOneUsuario);
router.get('/userAll', usuarioCtrl.findAllUsuario);
router.delete('/', usuarioCtrl.deleteUsuario);
router.put('/', usuarioCtrl.updateUsuario);

export default router;