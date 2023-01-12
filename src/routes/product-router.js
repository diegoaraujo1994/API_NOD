import { Router } from 'express';
import { ProductController } from '../controllers/product-controller';

const router = new Router();
const ctrl = new ProductController();

router.post('/product', async (req, res) => {
  const { body } = req;

  const httpResponse = await ctrl.add(body);
  res.status(httpResponse.status).json(httpResponse);
});

router.get('/product', async (req, res) => {
  //pega a resposta
  const { body } = res;
  //metodo de procurar produtos
  const httpResponse = await ctrl.getAll(body);
  res.status(httpResponse.status).json(httpResponse);
});

//pegando produto pelo id
router.get('/product/:id', async (req, res) => {
  const { id } = req.params;
  const httpResponse = await ctrl.getOne(id);
  res.status(httpResponse.status).json(httpResponse);
});

router.delete('/product/:id', async (req, res) => {
  const { id } = req.params;
  const httpResponse = await ctrl.deleteById(id);
  res.status(httpResponse.status).json(httpResponse);
})

export default router;
