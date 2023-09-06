import express from 'express';
import morgan from 'morgan';
import categoriaRoutes from './router/categorias.routes';
import productoRoutes from './router/productos.routes';
import tallasRoutes from './router/tallas.routes';
import tallaProductoRoutes from './router/tallaProducto.routes';
import rols from './router/rol.routes';
import permisos from './router/permisos.routes'
import rolPermiso from './router/rolXpermiso.routes'
import usuarios from './router/usuarios.routes'

import cors from 'cors';

const app = express();

// seting
app.set('PORT', process.env.PORT || 8181);

// middlewares
app.use(express.urlencoded({extended: false}));
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

//Routes
app.get('/', (req, res) => {
    res.json({ message: 'Welcome to my web aplication api' });
})

app.use('/api/categorias', categoriaRoutes);
app.use('/api/productos', productoRoutes);
app.use('/api/tallas', tallasRoutes);
app.use('/api/tallaProducto', tallaProductoRoutes);
app.use('/api/rols', rols);
app.use('/api/permisos', permisos);
app.use('/api/rolPer', rolPermiso);
app.use('/api/usuario', usuarios);


export default app;