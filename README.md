## 🚀 Sobre o Site

O **Ono Poke** é um site de restaurante especializado em comida havaiana, desenvolvido para proporcionar uma experiência completa de pedidos online. A plataforma apresenta um design moderno e premium, destacando os principais produtos da marca através de uma navegação intuitiva e responsiva.

**Status: ✅ 100% Funcional**

O sistema é composto por diversas áreas que simulam o fluxo real de compra de um cliente:

### 👤 Visão do Cliente (100% Funcional)
- **Autenticação:** Login com credenciais de teste ou cadastro de novos usuários
- **Página Inicial (Home):** apresenta a marca, pratos em destaque, diferenciais do restaurante e avaliações de clientes
- **Cardápio Digital:** 8 produtos organizados em 5 categorias (Pokes, Pratos Quentes, Combos, Sobremesas, Bebidas)
- **Página de Produto:** permite visualizar detalhes, selecionar tamanhos, adicionar complementos e incluir observações
- **Carrinho de Compras:** reúne os itens selecionados, exibe valores, taxa de entrega (R$ 18,00) e resumo do pedido
- **Checkout:** coleta informações do cliente, endereço de entrega e forma de pagamento
- **Confirmação do Pedido:** apresenta o número do pedido e integração com WhatsApp

### 👨‍💼 Painel Administrativo (100% Funcional)
- **Dashboard:** métricas de vendas, pedidos hoje, produtos mais vendidos, faturamento
- **Gestão de Clientes:** lista de clientes mock + usuários registrados dinamicamente
- **Visualização de Clientes:** modal com perfil completo, histórico de pedidos e estatísticas
- **Gestão de Pedidos:** tabela com status, valores e ações administrativas
- **Gestão de Produtos:** visualização de 8 produtos cadastrados com categorias e preços
- **Relatórios Financeiros:** métricas de faturamento por período

### 🔐 Sistema de Usuários
- **Contas Padrão:**
  - Admin: `admin@onopoke.com` / `admin123`
  - Cliente: `cliente@onopoke.com` / `cliente123`
- **Cadastro Dinâmico:** novos usuários podem se registrar e os dados persistem no `localStorage`
- **Usuários Registrados:** 
  - Bruno Costa (bruno.costa@email.com)
  - Fernanda Lima (fernanda.lima@email.com)

## 📺 Painel para TV (Cozinha/Retirada)

O projeto possui um painel de TV integrado ao fluxo do site, na aba **Painel TV**, para exibir:

- Pedido em destaque (priorizando pedidos prontos)
- Próximos pedidos na fila
- Banner de chamada quando um novo pedido fica pronto

**Como usar:**
1. Abra [index.html](index.html) e utilize o painel administrativo para avançar o status dos pedidos
2. No menu, acesse a aba **Painel TV** (ou use o hash `#tv`)
3. O painel atualiza automaticamente a cada 2 segundos, lendo os pedidos do `localStorage`

Observação: [painel-tv.html](painel-tv.html) continua disponível como versão dedicada.

## 🌐 GitHub Pages

O projeto está publicado no GitHub Pages: **https://klebermurillo.github.io/onopoke/**

A cada commit na branch `main`, o site é automaticamente publicado via GitHub Actions.

## 🛠️ Tecnologias

- **Frontend:** HTML5, CSS3, JavaScript (ES6+)
- **Arquitetura:** Single Page Application (SPA) com roteamento por hash
- **Estado:** Gerenciamento em memória com persistência em `localStorage`
- **Ícones:** Font Awesome 6.5.2
- **Sem dependências externas:** código puro, sem frameworks

## 📁 Estrutura do Projeto

```
/
├── index.html           # Aplicação principal (SPA)
├── painel-tv.html       # Painel de TV dedicado
├── script.js            # Lógica da aplicação (login, admin, cliente)
├── style.css            # Estilos CSS completos
├── README.md            # Documentação
└── .github/workflows/   # CI/CD com GitHub Actions
```

O projeto foi desenvolvido com foco em usabilidade, estética premium e experiência do usuário, utilizando uma identidade visual inspirada na cultura havaiana, com elementos tropicais, apresentação sofisticada dos produtos e navegação fluida para dispositivos móveis e desktops.
