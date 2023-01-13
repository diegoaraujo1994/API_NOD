import { Product } from '../models/product';

export class HttpResponse {
  constructor({ status, msg, body }) {
    this.status = status;
    this.msg = msg;
    this.body = body;
  }
}

export class ProductController {
  // Método para adicionar produtos
  async add(body) {

    const errors = [];
    if (!('name' in body)) {
      errors.push('nome deve ser fornecido');
    }

    if (!('validAt' in body)) {
      errors.push('validade deve ser fornecida');
    }

    if (!('batch' in body)) {
      errors.push('lote deve ser fornecido');
    }

    if (!('price' in body)) {
      errors.push('preço deve ser fornecido');
    }

    if (!('active' in body)) {
      errors.push('ativo deve ser fornecido');
    }

    if (errors.length > 0) {
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
  //Método para pegar todos os produtos
  async getAll() {

    const result = await Product.findAll();

    //se a variavel result não estiver vazia

    if (result.length == 0) {
      return new HttpResponse({
        status: 404,
        msg: 'Produtos não encontrados',
        body: null,
      })

    } else {
      return new HttpResponse({
        status: 200,
        msg: 'Produtos encontrados!',
        body: result
      });

    }

  }

  async getOne(id) {
    //pegando produto pelo id
    const result = await Product.findAll({ where: { id: id } });
    if (result.length == 0) {
      return new HttpResponse({
        status: 404,
        msg: 'Produtos não encontrados',
        body: null,
      })

    } else {
      return new HttpResponse({
        status: 200,
        msg: 'Produtos encontrados!',
        body: result
      });

    }

  }

  async deleteById(id) {
    const result = await Product.destroy({ where: { id: id } });
    return new HttpResponse({
      status: 200,
      msg: 'Produto excluído com sucesso.',
      body: result
    });
  }

  async updateProduct(id, params) {

    const result = await Product.update({
      name: params.name,
      price: params.price,
      validAt: params.validAt,
      batch: params.batch,
      active: params.active

    }, {
      where: { id: id }
    });

    return new HttpResponse({
      status: 200,
      msg: 'Produto atualizado com sucesso.',
      body: result
    });

  }



  // fechamento da classe de produto
}
