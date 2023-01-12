# Atualizar produto

1. Recebe uma requisição **UPDATE** na rota **'api/product/{:id}'**
2. **Valida** o id do produto.
3. **Deleta** o produto com base no id.
4. Retorna **204**, sem dados.

> ## Exceções

1. ✅ Retorna erro **404** se a API não existir.
2. ✅ Retorna erro **400** se o id do produto for invalido.
4. ✅ Retorna erro **500** se der erro ao tentar criar a enquete.
