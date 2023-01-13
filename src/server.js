import express from 'express';
import productRouter from './routes/product-router'

import './database'

require('dotenv').config();

// desestruturação de objetos
const { PORT } = process.env;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json()); // response.json() utilizar
app.use('/api', productRouter)

// ouve a porta
app.listen(PORT, () => {
  console.log('listening on port ' + PORT);
}); // 3002
