import { Product } from '../models/product';

export class HttpResponse {
  constructor({ status, msg, body }) {
    this.status = status;
    this.msg = msg;
    this.body = body;
  }
}

export class ProductController {

  async add(body) {

    const errors = [];
    if(!('name' in body)) {
      errors.push('name must be provided');
    }

    if(!('validAt' in body)) {
      errors.push('validAt must be provided');
    }

    if(!('batch' in body)) {
      errors.push('batch must be provided');
    }

    if(!('price' in body)) {
      errors.push('price must be provided');
    }

    if(!('active' in body)) {
      errors.push('active must be provided');
    }

    if(errors.length > 0) {
      return new HttpResponse({
        status: 400,
        msg: errors,
        body: null,
      })
    }

    const result = await Product.create({
      // ...product
      name: body.name,
      validAt: body.validAt,
      batch: body.batch,
      price: body.price,
      active: body.active,
    });

    return new HttpResponse({
      status: 201,
      msg: 'Produtos foram cadastrados com sucesso!',
      body: result
    });
  }
//VERIFICAR como se passa parametros com nodejs
  async getAll() {

    const result = await Product.findAll();

    //se a variavel result não estiver vazia
    return new HttpResponse({
        status: 201,
        msg: 'Produtos localizados com sucesso.',
        body: result
      });
  }

  async getOne(id) {
    //pegando produto pelo id
    const result = await Product.findAll({where: {id: id}});
    return new HttpResponse({
      status: 201,
      msg: 'Produto localizado com sucesso.',
      body: result
    });
  }

  async update() {}

  async deleteById(id) {
    const result = await Product.destroy({where: {id: id}});
    return new HttpResponse({
      status: 200,
      msg: 'Produto excluído com sucesso.',
      body: result
    });
  }
}
