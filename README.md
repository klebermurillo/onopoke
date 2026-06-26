## Sobre o Site

O **Ono Poke** é um site de restaurante especializado em comida havaiana, desenvolvido para proporcionar uma experiência completa de pedidos online. A plataforma apresenta um design moderno e premium, destacando os principais produtos da marca através de uma navegação intuitiva e responsiva.

O sistema é composto por diversas áreas que simulam o fluxo real de compra de um cliente:

- **Página Inicial (Home):** apresenta a marca, pratos em destaque, diferenciais do restaurante e avaliações de clientes.
- **Cardápio Digital:** exibe os produtos organizados por categorias, com sistema de busca e filtros para facilitar a navegação.
- **Página de Produto:** permite visualizar detalhes do prato, selecionar tamanhos, adicionar complementos personalizados e incluir observações.
- **Carrinho de Compras:** reúne os itens selecionados, exibe valores, taxa de entrega e resumo do pedido.
- **Checkout:** coleta informações do cliente, endereço de entrega e forma de pagamento para finalização da compra.
- **Confirmação do Pedido:** apresenta o número do pedido gerado e disponibiliza integração com WhatsApp para contato rápido.
- **Painel Administrativo:** demonstra uma área de gestão contendo métricas, pedidos recentes, cadastro de produtos e estatísticas de vendas.

## Painel para TV (cozinha/retirada)

O projeto agora também possui um painel de TV integrado ao próprio fluxo do site, na aba **Painel TV**, pensado para exibir:

- pedido em destaque (priorizando pedidos prontos);
- próximos pedidos na fila;
- banner de chamada quando um novo pedido entra como pronto.

### Como usar

1. Abra [index.html](index.html) e utilize o painel administrativo para avançar o status dos pedidos.
2. No menu, acesse a aba **Painel TV** (ou use o hash `#tv`).
3. O painel da TV atualiza automaticamente a cada 2 segundos, lendo os pedidos do localStorage.

Observação: [painel-tv.html](painel-tv.html) continua disponível como versão dedicada, caso você prefira abrir o painel em uma rota separada.

O projeto foi desenvolvido com foco em usabilidade, estética premium e experiência do usuário, utilizando uma identidade visual inspirada na cultura havaiana, com elementos tropicais, apresentação sofisticada dos produtos e navegação fluida para dispositivos móveis e desktops.
