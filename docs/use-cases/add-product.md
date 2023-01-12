# Cadastrar produto

1. Recebe uma requisição **POST** na rota **'api/product'**
2. Valida os dados do produto.
3. **Cria** um produto
4. Retorna **201**, com dados.

## Exceções

1. Retorna erro **404** se a API não existir
3. Retorna erro **400** se os dados do produto não forem fornecidos pelo client.
4. Retorna erro **500** se der erro ao tentar criar a produto.
