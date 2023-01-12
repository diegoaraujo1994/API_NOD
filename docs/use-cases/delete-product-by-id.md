# Atualizar produto

1. Recebe uma requisição **DELETE** na rota **'api/product/{:id}'**
2. **Valida** o id do produto.
2. **Valida** os dados do produto.
3. **Atualiza** o produto com base no id.
4. Retorna **204**, sem dados.

> ## Exceções

1. ✅ Retorna erro **404** se a API não existir
3. ✅ Retorna erro **400** se os dados do produto não forem fornecidos pelo cliente.
4. ✅ Retorna erro **500** se der erro ao tentar criar a enquete.
