import { Router } from 'express'
import *as usuarioCtrl from '../controllers/usuarios.controller';

const router = Router();

router.post('/', usuarioCtrl.createUsuario);
router.get('/', usuarioCtrl.findAllUsuario);
router.get('/:usuario/:contrasenha', usuarioCtrl.findOneUsuario);
router.delete('/:usuario/:contrasenha', usuarioCtrl.deleteUsuario);
router.put('/:usuario/:contrasenha', usuarioCtrl.updateUsuario);

export default router;