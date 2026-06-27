// ========== DADOS DO APLICATIVO ==========
window.pokeImages = {
  salmonMango: [
    "https://emagreceja.com.br/wp-content/uploads/2023/03/mobile-1200-%C3%97-1200-px-1200-%C3%97-628-px-1200-%C3%97-1200-px-1200-%C3%97-1100-px-1200-%C3%97-628-px-1200-%C3%97-1200-px-6.png",
    "https://poke-house.com/wp-content/uploads/2023/06/usa-roasted-salmon.jpg",
    "https://nomeular.com.br/content/images/size/w960/2023/02/poke-1.jpg",
    "https://tse2.mm.bing.net/th/id/OIP.wmu76aBmzcWHz6IpZyf-GgHaGl?w=792&h=704&rs=1&pid=ImgDetMain&o=7&rm=3"
  ],
  tuna: [
    "https://static.wixstatic.com/media/84770f_d6055d34eb504de2b7a7857a016ae82ef003.jpg/v1/fill/w_599,h_599,fp_0.50_0.50,q_90/84770f_d6055d34eb504de2b7a7857a016ae82ef003.jpg",
    "https://tse2.mm.bing.net/th/id/OIP.wmu76aBmzcWHz6IpZyf-GgHaGl?w=792&h=704&rs=1&pid=ImgDetMain&o=7&rm=3",
    "https://tse1.mm.bing.net/th/id/OIP.owHU7mLcHjMfu9PHOXBrdQHaE7?rs=1&pid=ImgDetMain&o=7&rm=3",
    "https://poke-house.com/wp-content/uploads/2023/06/usa-roasted-salmon.jpg"
  ],
  shrimp: [
    "https://tse2.mm.bing.net/th/id/OIP.EJ1O9Tx4rR9xf8Y0Z3vuigHaEK?w=1920&h=1080&rs=1&pid=ImgDetMain&o=7&rm=3",
    "https://nomeular.com.br/content/images/size/w960/2023/02/poke-1.jpg",
    "https://emagreceja.com.br/wp-content/uploads/2023/03/mobile-1200-%C3%97-1200-px-1200-%C3%97-628-px-1200-%C3%97-1200-px-1200-%C3%97-1100-px-1200-%C3%97-628-px-1200-%C3%97-1200-px-6.png",
    "https://static.wixstatic.com/media/84770f_d6055d34eb504de2b7a7857a016ae82ef003.jpg/v1/fill/w_599,h_599,fp_0.50_0.50,q_90/84770f_d6055d34eb504de2b7a7857a016ae82ef003.jpg"
  ],
  warm: [
    "https://poke-house.com/wp-content/uploads/2023/06/usa-roasted-salmon.jpg",
    "https://emagreceja.com.br/wp-content/uploads/2023/03/mobile-1200-%C3%97-1200-px-1200-%C3%97-628-px-1200-%C3%97-1200-px-1200-%C3%97-1100-px-1200-%C3%97-628-px-1200-%C3%97-1200-px-6.png",
    "https://tse1.mm.bing.net/th/id/OIP.owHU7mLcHjMfu9PHOXBrdQHaE7?rs=1&pid=ImgDetMain&o=7&rm=3",
    "https://tse2.mm.bing.net/th/id/OIP.EJ1O9Tx4rR9xf8Y0Z3vuigHaEK?w=1920&h=1080&rs=1&pid=ImgDetMain&o=7&rm=3"
  ],
  dessert: [
    "https://www.corriecooks.com/wp-content/uploads/2023/06/Passion-Fruit-Cheesecake-500x500.jpg",
    "https://i.pinimg.com/originals/c1/f8/0b/c1f80baaa3b20323242b861ab8d7ac69.png",
    "https://i.pinimg.com/736x/a4/7e/9f/a47e9f7b1520c2cbfc481b1e6261957c.jpg",
    "https://www.corriecooks.com/wp-content/uploads/2023/06/Passion-Fruit-Cheesecake-500x500.jpg"
  ]
};

const bestSellerHighlights = [
  {
    emoji: "🥭",
    title: "Tropical Salmão",
    description: "Salmão fresco, manga e molho tropical.",
    image: pokeImages.salmonMango[0]
  },
  {
    emoji: "🐟",
    title: "Tradicional Atum",
    description: "Atum fresco, pepino japonês e cebola roxa.",
    image: pokeImages.tuna[0]
  },
  {
    emoji: "🍤",
    title: "Especial Camarão",
    description: "Camarão grelhado com molho especial da casa.",
    image: pokeImages.shrimp[0]
  }
];

const products = [
  {
    id: 1,
    category: "Pokes",
    name: "Poke Salmão Tropical",
    description: "Salmão fresco, manga, pepino japonês, arroz temperado e molho especial da casa.",
    detail: "Poke fresco com ingredientes selecionados e apresentação premium para uma experiência tropical sofisticada em delivery ou retirada.",
    price: 56,
    images: pokeImages.salmonMango,
    sizes: [
      { label: "Individual", price: 56 },
      { label: "Duplo", price: 94 },
      { label: "Família", price: 168 }
    ],
    addons: [
      { label: "Abacate cremoso", price: 10 },
      { label: "Edamame", price: 8 },
      { label: "Crispy onion", price: 7 }
    ],
    featured: true
  },
  {
    id: 2,
    category: "Pokes",
    name: "Atum Premium",
    description: "Atum fresco em cubos generosos com vegetais crocantes e gergelim torrado.",
    detail: "Uma escolha clássica que destaca a qualidade da proteína com acompanhamentos selecionados.",
    price: 59,
    images: pokeImages.tuna,
    sizes: [
      { label: "Individual", price: 59 },
      { label: "Duplo", price: 99 },
      { label: "Família", price: 178 }
    ],
    addons: [
      { label: "Alga nori", price: 5 },
      { label: "Gergelim branco", price: 4 }
    ],
    featured: false
  },
  {
    id: 3,
    category: "Pratos Quentes",
    name: "Loco Moco da Ilha",
    description: "Arroz, carne moída, ovo mollet, molho especial e hortaliças.",
    detail: "Prato quente havaiano tradicional com apresentação executiva.",
    price: 68,
    images: pokeImages.warm,
    sizes: [
      { label: "Individual", price: 68 },
      { label: "Duplo", price: 114 }
    ],
    addons: [
      { label: "Ovo extra", price: 6 },
      { label: "Bacon crocante", price: 8 }
    ],
    featured: false
  },
  {
    id: 4,
    category: "Combos",
    name: "Combo Tropical Deluxe",
    description: "Poke salmão + prato quente + bebida + sobremesa.",
    detail: "Combinação premium que oferece uma experiência completa da culinária havaiana.",
    price: 189,
    images: pokeImages.salmonMango,
    sizes: [
      { label: "Para 1 pessoa", price: 189 },
      { label: "Para 2 pessoas", price: 359 }
    ],
    addons: [],
    featured: false
  },
  {
    id: 5,
    category: "Sobremesas",
    name: "Cheesecake de Maracujá",
    description: "Cremoso e refrescante com cobertura de frutas tropicais.",
    detail: "Sobremesa gelada perfeita para finalizar a experiência havaiana.",
    price: 32,
    images: pokeImages.dessert,
    sizes: [
      { label: "Porção individual", price: 32 },
      { label: "Porção family", price: 64 }
    ],
    addons: [],
    featured: false
  }
];

const testimonials = [
  {
    name: "Marina Costa",
    role: "Gerente de Restaurante",
    text: "Excelente qualidade e atendimento impecável. Já pedi várias vezes e sempre chega fresquinho!",
    rating: 5,
    avatar: "👩‍💼"
  },
  {
    name: "Roberto Silva",
    role: "Executivo",
    text: "Entrega rápida, poke bem montado e ingredientes de primeira qualidade. Virou meu almoço de sexta!",
    rating: 5,
    avatar: "👨‍💼"
  },
  {
    name: "Juliana Lima",
    role: "Estudante",
    text: "Adorei a personalização! Consegui montar exatamente do meu jeito. Recomendo demais!",
    rating: 4,
    avatar: "👩‍🎓"
  }
];

const state = {
  activeView: "login",
  activeCategory: "Todos",
  activeProductId: 1,
  activeImageIndex: 0,
  activeAdminOrderId: "ONO-4201",
  cart: [],
  checkout: {},
  currentUser: null,
  registeredUsers: []
};

// Expor variáveis globalmente
window.state = state;
window.bestSellerHighlights = bestSellerHighlights;
window.testimonials = testimonials;
window.products = products;

// ========== GERENCIAMENTO DE AUTENTICAÇÃO ==========
function login(email, password) {
  const users = {
    admin: {
      email: "admin@onopoke.com",
      password: "admin123",
      name: "Admin Ono Poke",
      role: "admin",
      avatar: "👨‍💼"
    },
    customer: {
      email: "cliente@onopoke.com",
      password: "cliente123",
      name: "João Silva",
      role: "customer",
      avatar: "👤"
    }
  };

  // Verificar usuários hardcoded
  for (const [key, user] of Object.entries(users)) {
    if (user.email === email && user.password === password) {
      state.currentUser = { ...user, loginTime: new Date().toLocaleString('pt-BR') };
      localStorage.setItem('onoPokeSessão', JSON.stringify(state.currentUser));
      setupUIForRole();
      navigateTo(state.currentUser.role === 'admin' ? 'dashboard' : 'home');
      return { success: true };
    }
  }
  
  // Verificar usuários registrados
  const registered = state.registeredUsers.find(u => u.email === email && u.password === password);
  if (registered) {
    state.currentUser = { ...registered, loginTime: new Date().toLocaleString('pt-BR') };
    localStorage.setItem('onoPokeSessão', JSON.stringify(state.currentUser));
    setupUIForRole();
    navigateTo(state.currentUser.role === 'admin' ? 'dashboard' : 'home');
    return { success: true };
  }
  
  return { success: false, error: "Email ou senha inválidos" };
}

function logout() {
  state.currentUser = null;
  localStorage.removeItem('onoPokeSessão');
  state.cart = [];
  state.activeView = "login";
  setupUIForRole();
  navigateTo('login');
}

function checkSession() {
  const saved = localStorage.getItem('onoPokeSessão');
  if (saved) {
    state.currentUser = JSON.parse(saved);
    setupUIForRole();
    navigateTo(state.currentUser.role === 'admin' ? 'dashboard' : 'home');
    return true;
  }
  return false;
}

function setupUIForRole() {
  const header = document.getElementById('siteHeader');
  const footer = document.getElementById('siteFooter');
  const mainNav = document.getElementById('mainNav');
  const mainNavAdmin = document.getElementById('mainNavAdmin');
  const cartButton = document.getElementById('cartShortcut');
  const tvButton = document.getElementById('tvPanelButton');
  const userMenu = document.getElementById('userMenuWrapper');

  if (!state.currentUser) {
    // Não autenticado
    if (header) header.style.display = 'none';
    if (footer) footer.style.display = 'none';
    return;
  }

  // Autenticado
  if (header) header.style.display = '';
  if (footer) footer.style.display = '';

  if (state.currentUser.role === 'admin') {
    // Admin
    if (mainNav) mainNav.style.display = 'none';
    if (mainNavAdmin) mainNavAdmin.style.display = 'flex';
    if (cartButton) cartButton.style.display = 'none';
    if (tvButton) tvButton.style.display = 'block';
  } else {
    // Customer
    if (mainNav) mainNav.style.display = 'flex';
    if (mainNavAdmin) mainNavAdmin.style.display = 'none';
    if (cartButton) cartButton.style.display = 'flex';
    if (tvButton) tvButton.style.display = 'none';
  }

  // Atualizar menu do usuário
  if (userMenu) {
    userMenu.style.display = 'flex';
    document.getElementById('userAvatar').textContent = state.currentUser.avatar;
    document.getElementById('userName').textContent = state.currentUser.name.split(' ')[0];
    document.getElementById('userAvatarLarge').textContent = state.currentUser.avatar;
    document.getElementById('userNameDropdown').textContent = state.currentUser.name;
    document.getElementById('userRoleDropdown').textContent = state.currentUser.role === 'admin' ? 'Administrador' : 'Cliente';
  }
}

// ========== NAVEGAÇÃO ==========
function showView(viewId) {
  document.querySelectorAll('.view').forEach(view => {
    view.classList.remove('is-active');
  });
  const target = document.getElementById(viewId);
  if (target) {
    target.classList.add('is-active');
    state.activeView = viewId;
  }
}

function navigateTo(view) {
  const viewMap = {
    'login': 'loginView',
    'home': 'homeView',
    'menu': 'menuView',
    'product': 'productView',
    'cart': 'cartView',
    'checkout': 'checkoutView',
    'confirmation': 'confirmationView',
    'tv': 'tvView',
    'dashboard': 'dashboardView',
    'orders': 'ordersView',
    'financial': 'financialView',
    'reports': 'reportsView',
    'customers': 'customersView',
    'products': 'productsView'
  };

  // Verificar permissões
  if (!state.currentUser && view !== 'login') {
    navigateTo('login');
    return;
  }

  if (state.currentUser && view !== 'login' && view !== 'tv') {
    const isAdminView = ['dashboard', 'orders', 'financial', 'reports', 'customers', 'products'].includes(view);
    const isCustomerView = ['home', 'menu', 'product', 'cart', 'checkout', 'confirmation'].includes(view);

    if (isAdminView && state.currentUser.role !== 'admin') {
      navigateTo('home');
      return;
    }

    if (isCustomerView && state.currentUser.role !== 'customer') {
      navigateTo('dashboard');
      return;
    }
  }

  const viewId = viewMap[view];
  if (viewId) {
    showView(viewId);
    
    // Chamar renderização de dados específicos da view
    if (view === 'customers') {
      renderCustomers();
    } else if (view === 'products') {
      renderProducts();
    } else if (view === 'orders') {
      renderOrders();
    } else if (view === 'financial') {
      renderFinancialMetrics();
    }
  }
}

// ========== RENDERIZAÇÃO DE DADOS ==========
function renderBestSellers() {
  const grid = document.getElementById('bestSellersGrid');
  if (!grid) return;

  grid.innerHTML = bestSellerHighlights.map(item => `
    <div class="product-card">
      <div class="product-image-wrap">
        <div class="product-image" style="background-image: url('${item.image}'); background-size: cover; background-position: center;"></div>
      </div>
      <div class="product-card-content">
        <h3>${item.emoji} ${item.title}</h3>
        <div class="product-copy">
          <span>${item.description}</span>
        </div>
      </div>
    </div>
  `).join('');
}

function renderTestimonials() {
  const grid = document.getElementById('testimonialGrid');
  if (!grid) return;

  grid.innerHTML = testimonials.map(t => `
    <article class="testimonial-card">
      <div class="stars">${'⭐'.repeat(t.rating)}</div>
      <p>${t.text}</p>
      <footer>
        <div>
          <strong>${t.name}</strong>
          <small>${t.role}</small>
        </div>
        <span style="font-size: 2rem;">${t.avatar}</span>
      </footer>
    </article>
  `).join('');
}

function renderMenu() {
  const grid = document.getElementById('menuGrid');
  const chips = document.getElementById('categoryChips');
  if (!grid) return;

  // Renderizar categorias
  const categories = ['Todos', ...new Set(products.map(p => p.category))];
  if (chips) {
    chips.innerHTML = categories.map(cat => `
      <button class="chip ${cat === 'Todos' ? 'active' : ''}" data-category="${cat}">${cat}</button>
    `).join('');

    chips.querySelectorAll('.chip').forEach(chip => {
      chip.addEventListener('click', () => {
        chips.querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
        state.activeCategory = chip.dataset.category;
        renderMenu();
      });
    });
  }

  // Renderizar produtos
  const filtered = state.activeCategory === 'Todos'
    ? products
    : products.filter(p => p.category === state.activeCategory);

  grid.innerHTML = filtered.map(product => `
    <div class="product-card" data-product-id="${product.id}">
      <div class="product-image-wrap">
        <div class="product-image" style="background-image: url('${product.images[0]}'); background-size: cover; background-position: center;"></div>
      </div>
      <div class="product-card-content">
        <h3>${product.name}</h3>
        <div class="product-copy">
          <span>${product.description}</span>
        </div>
        <div class="product-card-footer">
          <strong class="product-price">R$ ${product.price.toFixed(2)}</strong>
          <button class="icon-button" data-product-id="${product.id}">
            <i class="fa-solid fa-plus"></i>
          </button>
        </div>
      </div>
    </div>
  `).join('');

  grid.querySelectorAll('.icon-button').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const productId = parseInt(btn.dataset.productId);
      state.activeProductId = productId;
      renderProductDetail();
      navigateTo('product');
    });
  });
}

function renderProductDetail() {
  const product = products.find(p => p.id === state.activeProductId);
  if (!product) return;

  document.getElementById('productCategoryTag').textContent = product.category;
  document.getElementById('productTitle').textContent = product.name;
  document.getElementById('productDescription').textContent = product.detail;
  document.getElementById('productPrice').textContent = `R$ ${product.price.toFixed(2)}`;

  // Imagens
  const mainImage = document.getElementById('productMainImage');
  if (mainImage) {
    mainImage.style.backgroundImage = `url('${product.images[state.activeImageIndex]}')`;
    mainImage.style.backgroundSize = 'cover';
    mainImage.style.backgroundPosition = 'center';
  }

  const thumbRow = document.getElementById('productThumbRow');
  if (thumbRow) {
    thumbRow.innerHTML = product.images.map((img, i) => `
      <button class="thumb-button ${i === state.activeImageIndex ? 'active' : ''}" data-index="${i}">
        <div class="thumb-image" style="background-image: url('${img}'); background-size: cover;"></div>
      </button>
    `).join('');

    thumbRow.querySelectorAll('.thumb-button').forEach(btn => {
      btn.addEventListener('click', () => {
        state.activeImageIndex = parseInt(btn.dataset.index);
        renderProductDetail();
      });
    });
  }

  // Tamanhos
  const sizeOptions = document.getElementById('sizeOptions');
  if (sizeOptions) {
    sizeOptions.innerHTML = product.sizes.map((size, i) => `
      <label class="size-chip ${i === 0 ? 'active' : ''}">
        <input type="radio" name="size" value="${size.label}" ${i === 0 ? 'checked' : ''}>
        <span>${size.label} - R$ ${size.price.toFixed(2)}</span>
      </label>
    `).join('');
  }

  // Adicionais
  const addonList = document.getElementById('addonList');
  if (addonList) {
    if (product.addons && product.addons.length > 0) {
      addonList.innerHTML = product.addons.map(addon => `
        <label class="addon-chip">
          <input type="checkbox" name="addon" value="${addon.label}">
          <span>+ ${addon.label} (R$ ${addon.price.toFixed(2)})</span>
        </label>
      `).join('');
    } else {
      addonList.innerHTML = '<p style="color: #999; font-size: 0.9rem;">Nenhum adicional disponível para este produto</p>';
    }
  }
}

function renderCart() {
  const container = document.getElementById('cartItems');
  const subtotal = document.getElementById('cartSubtotal');
  const total = document.getElementById('cartTotal');

  if (state.cart.length === 0) {
    container.innerHTML = '<div class="empty-state"><i class="fa-solid fa-bag-shopping"></i><p>Seu carrinho está vazio</p></div>';
    if (subtotal) subtotal.textContent = 'R$ 0,00';
    if (total) total.textContent = 'R$ 0,00';
    return;
  }

  let totalValue = 0;
  container.innerHTML = state.cart.map((item, idx) => {
    const itemTotal = item.unitPrice * item.quantity;
    totalValue += itemTotal;
    return `
      <div class="cart-item">
        <div class="cart-item-image" style="background-image: url('${item.image}');"></div>
        <div>
          <h3>${item.name}</h3>
          <div class="product-copy">
            <span>${item.size} • ${item.quantity}x R$ ${item.unitPrice.toFixed(2)}</span>
          </div>
          <div style="margin-top: 0.8rem;">
            <div class="quantity-controls">
              <button onclick="updateCartQuantity(${idx}, -1)">−</button>
              <span>${item.quantity}</span>
              <button onclick="updateCartQuantity(${idx}, 1)">+</button>
            </div>
            <button onclick="removeFromCart(${idx})" style="margin-left: 0.5rem; color: var(--accent); font-size: 0.9rem;"><i class="fa-solid fa-trash"></i></button>
          </div>
        </div>
        <div style="text-align: right;">
          <strong>R$ ${itemTotal.toFixed(2)}</strong>
        </div>
      </div>
    `;
  }).join('');

  const deliveryFee = 18;
  const finalTotal = totalValue + deliveryFee;

  if (subtotal) subtotal.textContent = `R$ ${totalValue.toFixed(2)}`;
  if (total) total.textContent = `R$ ${finalTotal.toFixed(2)}`;
}

function updateCartQuantity(idx, change) {
  state.cart[idx].quantity += change;
  if (state.cart[idx].quantity <= 0) {
    removeFromCart(idx);
  } else {
    renderCart();
  }
}

function removeFromCart(idx) {
  state.cart.splice(idx, 1);
  renderCart();
  document.getElementById('cartCount').textContent = state.cart.length;
}

function addProductToCart() {
  const product = products.find(p => p.id === state.activeProductId);
  const sizeInput = document.querySelector('input[name="size"]:checked');
  const size = sizeInput ? sizeInput.value : product.sizes[0].label;
  const quantity = 1;

  state.cart.push({
    productId: product.id,
    name: product.name,
    size: size,
    quantity: quantity,
    image: product.images[0],
    unitPrice: product.price
  });

  document.getElementById('cartCount').textContent = state.cart.length;
  alert(`${product.name} adicionado ao carrinho!`);
}

// ========== RENDERIZAÇÃO ADMIN ==========
function renderDashboardMetrics() {
  const container = document.getElementById('dashboardMetrics');
  if (!container) return;

  container.innerHTML = `
    <article class="metric-card">
      <i class="fa-solid fa-shopping-bag"></i>
      <strong>245</strong>
      <span>Pedidos hoje</span>
    </article>
    <article class="metric-card">
      <i class="fa-solid fa-dollar-sign"></i>
      <strong>R$ 12.450</strong>
      <span>Faturamento hoje</span>
    </article>
    <article class="metric-card">
      <i class="fa-solid fa-users"></i>
      <strong>180</strong>
      <span>Clientes ativos</span>
    </article>
    <article class="metric-card">
      <i class="fa-solid fa-star"></i>
      <strong>4.8</strong>
      <span>Avaliação média</span>
    </article>
  `;
}

function renderOrders() {
  const container = document.getElementById('ordersTableBody');
  if (!container) return;

  const mockOrders = [
    { id: 'ONO-5234', customer: 'João Silva', date: '10:30', value: 156.50, status: 'novo' },
    { id: 'ONO-5233', customer: 'Maria Santos', date: '10:15', value: 89.90, status: 'preparando' },
    { id: 'ONO-5232', customer: 'Carlos Costa', date: '09:45', value: 234.80, status: 'pronto' },
    { id: 'ONO-5231', customer: 'Ana Lima', date: '09:20', value: 112.40, status: 'entregue' }
  ];

  container.innerHTML = mockOrders.map(order => `
    <tr>
      <td><strong>${order.id}</strong></td>
      <td>${order.customer}</td>
      <td>${order.date}</td>
      <td>R$ ${order.value.toFixed(2)}</td>
      <td>
        <span class="status-badge status-${order.status}">
          ${order.status === 'novo' ? '🆕 Novo' : order.status === 'preparando' ? '👨‍🍳 Preparando' : order.status === 'pronto' ? '✅ Pronto' : '🚚 Entregue'}
        </span>
      </td>
      <td>
        <div class="table-action-buttons">
          <button class="btn-table-action" data-action="edit-order" data-order-id="${order.id}" title="Editar"><i class="fa-solid fa-pencil"></i></button>
          <button class="btn-table-action" data-action="view-order" data-order-id="${order.id}" title="Detalhes"><i class="fa-solid fa-eye"></i></button>
        </div>
      </td>
    </tr>
  `).join('');
}

function renderFinancialMetrics() {
  const container = document.getElementById('financialMetrics');
  if (!container) return;

  container.innerHTML = `
    <article class="metric-card">
      <i class="fa-solid fa-money-bill-wave"></i>
      <strong>R$ 45.890</strong>
      <span>Receita mês</span>
    </article>
    <article class="metric-card">
      <i class="fa-solid fa-trending-up"></i>
      <strong>+12.5%</strong>
      <span>Crescimento</span>
    </article>
    <article class="metric-card">
      <i class="fa-solid fa-receipt"></i>
      <strong>R$ 187.40</strong>
      <span>Ticket médio</span>
    </article>
    <article class="metric-card">
      <i class="fa-solid fa-credit-card"></i>
      <strong>68%</strong>
      <span>Cartão/PIX</span>
    </article>
  `;
}

function renderProducts() {
  const container = document.getElementById('productsGrid');
  if (!container) return;

  container.innerHTML = products.map(p => `
    <div class="product-card-admin">
      <div class="product-card-admin-image">
        <img src="${p.images[0]}" alt="${p.name}" style="width: 100%; height: 100%; object-fit: cover;">
      </div>
      <div class="product-card-admin-content">
        <h4>${p.name}</h4>
        <div class="product-card-admin-meta">
          <span class="product-card-admin-category">${p.category}</span>
          <span class="product-card-admin-price">R$ ${p.price.toFixed(2)}</span>
        </div>
        <div class="product-card-admin-actions">
          <button title="Editar">✏️ Editar</button>
          <button title="Deletar">🗑️ Deletar</button>
        </div>
      </div>
    </div>
  `).join('');
}

function renderCustomers() {
  const container = document.getElementById('customersTableBody');
  if (!container) return;

  const mockCustomers = [
    { name: 'João Silva', email: 'joao@email.com', phone: '(11) 99999-1111', orders: 15, spent: 1850, avg: 123.33 },
    { name: 'Maria Santos', email: 'maria@email.com', phone: '(11) 99999-2222', orders: 8, spent: 956, avg: 119.50 },
    { name: 'Carlos Costa', email: 'carlos@email.com', phone: '(11) 99999-3333', orders: 23, spent: 2780, avg: 120.87 }
  ];

  // Combinar com usuários registrados
  const allCustomers = [
    ...mockCustomers,
    ...state.registeredUsers
  ];

  container.innerHTML = allCustomers.map(c => `
    <tr>
      <td><strong>${c.name}</strong></td>
      <td>${c.email}</td>
      <td>${c.phone}</td>
      <td>${c.orders}</td>
      <td>R$ ${c.spent.toFixed(2)}</td>
      <td>R$ ${c.avg.toFixed(2)}</td>
      <td>
        <div class="table-action-buttons">
          <button class="btn-table-action" data-action="view-customer" data-customer-name="${c.name}" title="Ver detalhes"><i class="fa-solid fa-eye"></i></button>
        </div>
      </td>
    </tr>
  `).join('');
}

// ========== FUNÇÕES DE AÇÃO ADMIN ==========
function viewOrder(orderId) {
  // Encontrar pedido nos dados mock
  const mockOrders = [
    { id: 'ONO-5234', customer: 'João Silva', date: '10:30', value: 156.50, status: 'novo', items: [{ name: 'Poke Salmão Tropical', qty: 1, price: 45.90 }, { name: 'Refrigerante', qty: 1, price: 8.50 }, { name: 'Sobremesa Premium', qty: 1, price: 28.00 }], address: 'Rua das Palmeiras, 214 - Apto 302', subtotal: 82.40, delivery: 10.00 },
    { id: 'ONO-5233', customer: 'Maria Santos', date: '10:15', value: 89.90, status: 'preparando', items: [{ name: 'Atum Premium', qty: 1, price: 42.90 }, { name: 'Sushi Combo', qty: 1, price: 35.50 }], address: 'Av. Paulista, 1000 - Apto 1200', subtotal: 78.40, delivery: 11.50 },
    { id: 'ONO-5232', customer: 'Carlos Costa', date: '09:45', value: 234.80, status: 'pronto', items: [{ name: 'Loco Moco', qty: 2, price: 38.90 }, { name: 'Combo Tropical', qty: 1, price: 156.00 }], address: 'Rua Augusta, 500 - Apto 512', subtotal: 233.80, delivery: 15.00 },
    { id: 'ONO-5231', customer: 'Ana Lima', date: '09:20', value: 112.40, status: 'entregue', items: [{ name: 'Cheesecake', qty: 2, price: 28.90 }], address: 'Rua Bandeira, 800', subtotal: 57.80, delivery: 12.00 }
  ];
  
  const order = mockOrders.find(o => o.id === orderId);
  if (order) {
    // Preencher modal
    document.getElementById('viewOrderTitle').textContent = `Pedido ${order.id}`;
    document.getElementById('viewOrderId').textContent = order.id;
    document.getElementById('viewOrderDate').textContent = order.date;
    document.getElementById('viewOrderCustomer').textContent = order.customer;
    document.getElementById('viewOrderStatus').textContent = order.status === 'novo' ? '🆕 Novo' : order.status === 'preparando' ? '👨‍🍳 Preparando' : order.status === 'pronto' ? '✅ Pronto' : '🚚 Entregue';
    document.getElementById('viewOrderAddress').textContent = order.address;
    
    // Timeline
    document.querySelectorAll('.timeline-item').forEach(item => {
      item.classList.remove('active', 'completed');
    });
    const statusOrder = { novo: 0, preparando: 1, pronto: 2, entregue: 3 };
    const currentStatus = statusOrder[order.status];
    document.querySelectorAll('.timeline-item').forEach((item, idx) => {
      if (idx <= currentStatus) {
        if (idx === currentStatus) item.classList.add('active');
        else item.classList.add('completed');
      }
    });
    
    // Itens
    const itemsHtml = order.items.map(item => `
      <div class="order-item">
        <div class="order-item-info">
          <div class="order-item-name">${item.name}</div>
          <div class="order-item-qty">Quantidade: ${item.qty}</div>
        </div>
        <div class="order-item-price">R$ ${item.price.toFixed(2)}</div>
      </div>
    `).join('');
    document.getElementById('viewOrderItems').innerHTML = itemsHtml;
    
    // Valores
    document.getElementById('viewOrderSubtotal').textContent = `R$ ${order.subtotal.toFixed(2)}`;
    document.getElementById('viewOrderDelivery').textContent = `R$ ${order.delivery.toFixed(2)}`;
    document.getElementById('viewOrderTotal').textContent = `R$ ${order.value.toFixed(2)}`;
    
    // Mostrar modal
    document.getElementById('viewOrderModal').style.display = 'flex';
  }
}

function editOrder(orderId) {
  // Mostrar modal
  const modal = document.getElementById('editOrderModal');
  const modalOrderId = document.getElementById('modalOrderId');
  const statusSelect = document.getElementById('orderStatus');
  const notesInput = document.getElementById('orderNotes');
  
  modalOrderId.textContent = orderId;
  statusSelect.value = 'novo'; // valor padrão
  notesInput.value = '';
  
  modal.style.display = 'flex';
  
  // Armazenar o orderId para quando salvar
  modal.dataset.currentOrderId = orderId;
}

function viewCustomer(customerName) {
  const mockCustomers = [
    { name: 'João Silva', email: 'joao@email.com', phone: '(11) 99999-1111', orders: 15, spent: 1850, avg: 123.33, lastOrder: '2026-06-27', history: [
      { order: 'ONO-5234', date: '2026-06-27' },
      { order: 'ONO-5220', date: '2026-06-26' },
      { order: 'ONO-5210', date: '2026-06-25' }
    ]},
    { name: 'Maria Santos', email: 'maria@email.com', phone: '(11) 99999-2222', orders: 8, spent: 956, avg: 119.50, lastOrder: '2026-06-26', history: [
      { order: 'ONO-5233', date: '2026-06-26' },
      { order: 'ONO-5225', date: '2026-06-24' },
      { order: 'ONO-5215', date: '2026-06-20' }
    ]},
    { name: 'Carlos Costa', email: 'carlos@email.com', phone: '(11) 99999-3333', orders: 23, spent: 2780, avg: 120.87, lastOrder: '2026-06-27', history: [
      { order: 'ONO-5232', date: '2026-06-27' },
      { order: 'ONO-5230', date: '2026-06-25' },
      { order: 'ONO-5228', date: '2026-06-23' }
    ]},
    ...state.registeredUsers
  ];
  
  const customer = mockCustomers.find(c => c.name === customerName);
  if (customer) {
    // Preencher modal
    document.getElementById('viewCustomerName').textContent = customer.name;
    document.getElementById('viewCustomerStatus').textContent = '✅ Cliente ativo';
    document.getElementById('viewCustomerEmail').textContent = customer.email;
    document.getElementById('viewCustomerPhone').textContent = customer.phone;
    document.getElementById('viewCustomerOrders').textContent = customer.orders;
    document.getElementById('viewCustomerSpent').textContent = `R$ ${customer.spent.toFixed(2)}`;
    document.getElementById('viewCustomerAverage').textContent = `R$ ${customer.avg.toFixed(2)}`;
    document.getElementById('viewCustomerLast').textContent = customer.lastOrder;
    
    // Histórico
    const historyHtml = customer.history.map(item => `
      <div class="history-item">
        <div class="history-icon">📦</div>
        <div class="history-content">
          <div class="history-order">${item.order}</div>
          <div class="history-date">${item.date}</div>
        </div>
      </div>
    `).join('');
    document.getElementById('viewCustomerHistory').innerHTML = historyHtml;
    
    // Mostrar modal
    document.getElementById('viewCustomerModal').style.display = 'flex';
  }
}

// ========== RECUPERAR DADOS DO LOCALSTORAGE ==========
// Recuperar usuários registrados (armazenados separadamente)
const savedRegisteredUsers = localStorage.getItem('onoPoke_registeredUsers');
if (savedRegisteredUsers) {
  try {
    state.registeredUsers = JSON.parse(savedRegisteredUsers);
  } catch (e) {
    console.log('Erro ao recuperar usuários registrados');
  }
}

// Recuperar sessão atual do usuário
const savedSessionData = localStorage.getItem('onoPokeSessão');
if (savedSessionData) {
  try {
    state.currentUser = JSON.parse(savedSessionData);
  } catch (e) {
    console.log('Erro ao recuperar sessão');
  }
}

// ========== CATEGORIAS E BEBIDAS ==========
// Armazenar categorias em estado
if (!state.categories) {
  state.categories = [
    { id: 1, name: 'Pokes', description: 'Bowls tropicais frescos' },
    { id: 2, name: 'Pratos Quentes', description: 'Pratos quentes sazonados' },
    { id: 3, name: 'Combos', description: 'Combinações e promoções' },
    { id: 4, name: 'Sobremesas Tropicais', description: 'Doces frescos e gelados' }
  ];
  state.nextCategoryId = 5;
}

// Produtos de Bebidas
const beverageProducts = [
  // Águas
  {
    id: 101,
    category: 'Bebidas',
    name: 'Água',
    description: 'Escolha entre água mineral ou com gás.',
    price: 4.00,
    images: ['./img/water.jpg'],
    sizes: [
      { label: 'Água Mineral', price: 4.00 },
      { label: 'Água com Gás', price: 5.00 }
    ],
    featured: false
  },
  // Refrigerantes
  {
    id: 102,
    category: 'Bebidas',
    name: 'Refrigerante',
    description: 'Escolha entre os principais refrigerantes gelados.',
    price: 7.00,
    images: ['./img/soda.jpg'],
    sizes: [
      { label: 'Coca-Cola', price: 7.00 },
      { label: 'Coca-Cola Zero', price: 7.00 },
      { label: 'Guaraná', price: 7.00 },
      { label: 'Guaraná Zero', price: 7.00 }
    ],
    featured: false
  },
  // Sucos
  {
    id: 103,
    category: 'Bebidas',
    name: 'Suco Natural',
    description: 'Escolha entre nossos sucos naturais frescos.',
    price: 9.00,
    images: ['./img/juice.jpg'],
    sizes: [
      { label: 'Laranja Natural', price: 9.00 },
      { label: 'Maracujá', price: 9.00 },
      { label: 'Limão', price: 9.00 },
      { label: 'Tropical', price: 10.00 },
      { label: 'Suco Verde', price: 10.00 }
    ],
    featured: false
  }
];

// Adicionar bebidas aos produtos
if (!products.some(p => p.category === 'Bebidas')) {
  products.push(...beverageProducts);
}

// ========== FUNÇÕES DE CATEGORIAS ==========
function addCategory(name, description) {
  const newCategory = {
    id: state.nextCategoryId++,
    name: name,
    description: description
  };
  state.categories.push(newCategory);
  renderCategories();
  updateCategorySelects();
  return newCategory;
}

function deleteCategory(categoryId) {
  const index = state.categories.findIndex(c => c.id === categoryId);
  if (index > -1) {
    state.categories.splice(index, 1);
    renderCategories();
    updateCategorySelects();
  }
}

function renderCategories() {
  const container = document.getElementById('categoriesList');
  if (!container) return;
  
  container.innerHTML = state.categories.map(cat => `
    <div class="category-item">
      <div class="category-info">
        <div class="category-name">${cat.name}</div>
        <div class="category-desc">${cat.description}</div>
      </div>
      <div class="category-actions">
        <button class="category-btn" onclick="editCategory(${cat.id})" title="Editar">Editar</button>
        <button class="category-btn delete" onclick="deleteCategory(${cat.id})" title="Deletar">Deletar</button>
      </div>
    </div>
  `).join('');
}

function updateCategorySelects() {
  const select = document.getElementById('productCategorySelect');
  if (!select) return;
  
  const currentValue = select.value;
  select.innerHTML = '<option value="">Selecione uma categoria...</option>' + 
    state.categories.map(cat => `<option value="${cat.name}">${cat.name}</option>`).join('');
  select.value = currentValue;
}

function editCategory(categoryId) {
  const cat = state.categories.find(c => c.id === categoryId);
  if (cat) {
    const newName = prompt('Novo nome da categoria:', cat.name);
    if (newName) {
      cat.name = newName;
      renderCategories();
      updateCategorySelects();
    }
  }
}

// ========== FUNÇÕES DE AUTH ==========
function toggleAuthTab(tab) {
  // Atualizar abas
  document.querySelectorAll('.auth-tab').forEach(t => {
    t.classList.remove('active');
    if (t.dataset.tab === tab) {
      t.classList.add('active');
    }
  });
  
  // Mostrar/ocultar forms
  document.querySelectorAll('[data-auth-form]').forEach(form => {
    form.style.display = form.dataset.authForm === tab ? 'grid' : 'none';
  });
  
  // Limpar erros
  document.getElementById('loginError').style.display = 'none';
  document.getElementById('signupError').style.display = 'none';
  document.getElementById('signupSuccess').style.display = 'none';
}

function signup(name, email, password, phone) {
  // Validações básicas
  if (!name || !email || !password) {
    document.getElementById('signupError').textContent = 'Preencha todos os campos obrigatórios!';
    document.getElementById('signupError').style.display = 'block';
    return false;
  }
  
  if (password.length < 6) {
    document.getElementById('signupError').textContent = 'Senha deve ter pelo menos 6 caracteres!';
    document.getElementById('signupError').style.display = 'block';
    return false;
  }
  
  // Verificar se email já existe
  const emailExists = state.registeredUsers.some(u => u.email === email);
  if (emailExists) {
    document.getElementById('signupError').textContent = 'Este email já está registrado!';
    document.getElementById('signupError').style.display = 'block';
    return false;
  }
  
  // "Registrar" usuário (em um app real, seria via API)
  const newUser = {
    email: email,
    password: password,
    name: name,
    phone: phone || '',
    role: 'customer',
    avatar: '👤',
    registeredAt: new Date().toLocaleString('pt-BR'),
    orders: 0,
    spent: 0,
    avg: 0,
    lastOrder: null,
    history: []
  };
  
  // Salvar usuário registrado
  state.registeredUsers.push(newUser);
  localStorage.setItem('onoPoke_registeredUsers', JSON.stringify(state.registeredUsers));
  
  // Mostrar mensagem de sucesso
  document.getElementById('signupError').style.display = 'none';
  document.getElementById('signupSuccess').textContent = `✅ Conta criada com sucesso! Você pode fazer login agora.`;
  document.getElementById('signupSuccess').style.display = 'block';
  
  // Limpar form
  document.getElementById('signupForm').reset();
  
  // Voltar para login após 2 segundos
  setTimeout(() => {
    toggleAuthTab('login');
  }, 2000);
  
  return true;
}

// ========== EVENT LISTENERS ==========
document.addEventListener('DOMContentLoaded', () => {
  // Inicialização
  checkSession();

  // Login Form
  const loginForm = document.getElementById('loginForm');
  if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = document.getElementById('loginEmail').value;
      const password = document.getElementById('loginPassword').value;
      const result = login(email, password);

      if (!result.success) {
        const error = document.getElementById('loginError');
        if (error) {
          error.textContent = result.error;
          error.style.display = 'block';
        }
      }
    });
  }

  // Auth Tabs Toggle
  document.querySelectorAll('.auth-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      toggleAuthTab(tab.dataset.tab);
    });
  });

  // Signup Form
  const signupForm = document.getElementById('signupForm');
  if (signupForm) {
    signupForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('signupName').value;
      const email = document.getElementById('signupEmail').value;
      const password = document.getElementById('signupPassword').value;
      const phone = document.getElementById('signupPhone').value;
      signup(name, email, password, phone);
    });
  }

  // Add Category Form
  const addCategoryForm = document.getElementById('addCategoryForm');
  if (addCategoryForm) {
    addCategoryForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('categoryName').value;
      const desc = document.getElementById('categoryDesc').value;
      if (name && desc) {
        addCategory(name, desc);
        addCategoryForm.reset();
      }
    });
  }

  // Renderizar categorias na primeira carga
  renderCategories();
  updateCategorySelects();

  // Demo buttons
  document.querySelectorAll('.login-demo-card').forEach(btn => {
    btn.addEventListener('click', () => {
      const demo = btn.dataset.demo;
      const creds = {
        admin: { email: 'admin@onopoke.com', password: 'admin123' },
        customer: { email: 'cliente@onopoke.com', password: 'cliente123' }
      };
      if (creds[demo]) {
        login(creds[demo].email, creds[demo].password);
      }
    });
  });

  // Logout
  const logoutBtn = document.getElementById('logoutButton');
  if (logoutBtn) {
    logoutBtn.addEventListener('click', (e) => {
      e.preventDefault();
      logout();
    });
  }

  // User menu toggle
  const userMenuToggle = document.getElementById('userMenuToggle');
  const userMenuWrapper = document.getElementById('userMenuWrapper');
  if (userMenuToggle) {
    userMenuToggle.addEventListener('click', () => {
      userMenuWrapper.classList.toggle('active');
    });

    document.addEventListener('click', (e) => {
      if (!userMenuWrapper.contains(e.target)) {
        userMenuWrapper.classList.remove('active');
      }
    });
  }

  // Navegação
  document.querySelectorAll('[data-nav]').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const nav = link.dataset.nav;
      navigateTo(nav);
    });
  });

  // Ações de tabela (Editar/Visualizar Pedidos e Clientes)
  document.addEventListener('click', (e) => {
    if (e.target.closest('.btn-table-action')) {
      const btn = e.target.closest('.btn-table-action');
      const action = btn.dataset.action;
      
      if (action === 'view-order') {
        const orderId = btn.dataset.orderId;
        viewOrder(orderId);
      } else if (action === 'edit-order') {
        const orderId = btn.dataset.orderId;
        editOrder(orderId);
      } else if (action === 'view-customer') {
        const customerName = btn.dataset.customerName;
        viewCustomer(customerName);
      }
    }
  });

  // Add to cart
  const addBtn = document.getElementById('addProductButton');
  if (addBtn) {
    addBtn.addEventListener('click', addProductToCart);
  }

  // Go to checkout
  const checkoutBtn = document.getElementById('goToCheckout');
  if (checkoutBtn) {
    checkoutBtn.addEventListener('click', () => {
      if (state.cart.length > 0) {
        navigateTo('checkout');
      } else {
        alert('Adicione itens ao carrinho');
      }
    });
  }

  // Checkout form
  const checkoutForm = document.getElementById('checkoutForm');
  if (checkoutForm) {
    checkoutForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const orderNum = `#DEC-${Math.floor(Math.random() * 9000) + 1000}`;
      document.getElementById('orderNumber').textContent = orderNum;
      navigateTo('confirmation');
    });
  }

  // Renderizar conteúdo inicial
  if (state.currentUser && state.currentUser.role === 'customer') {
    renderBestSellers();
    renderTestimonials();
    renderMenu();
  } else if (state.currentUser && state.currentUser.role === 'admin') {
    renderDashboardMetrics();
    renderOrders();
    renderFinancialMetrics();
    renderProducts();
    renderCustomers();
  }

  // Modal de editar pedido
  const editOrderModal = document.getElementById('editOrderModal');
  const closeEditModal = document.getElementById('closeEditModal');
  const cancelEditBtn = document.getElementById('cancelEditBtn');
  const saveEditBtn = document.getElementById('saveEditBtn');
  
  if (closeEditModal) {
    closeEditModal.addEventListener('click', () => {
      editOrderModal.style.display = 'none';
    });
  }
  
  if (cancelEditBtn) {
    cancelEditBtn.addEventListener('click', () => {
      editOrderModal.style.display = 'none';
    });
  }
  
  if (saveEditBtn) {
    saveEditBtn.addEventListener('click', () => {
      const orderId = editOrderModal.dataset.currentOrderId;
      const newStatus = document.getElementById('orderStatus').value;
      const notes = document.getElementById('orderNotes').value;
      
      alert(`✅ Pedido ${orderId} atualizado!\n\nNovo Status: ${newStatus}\nObservações: ${notes || 'Nenhuma'}`);
      editOrderModal.style.display = 'none';
    });
  }
  
  // Fechar modal ao clicar fora
  if (editOrderModal) {
    editOrderModal.addEventListener('click', (e) => {
      if (e.target === editOrderModal) {
        editOrderModal.style.display = 'none';
      }
    });
  }

  // Modals de visualização customizados
  const viewOrderModal = document.getElementById('viewOrderModal');
  const closeViewOrderModal = document.getElementById('closeViewOrderModal');
  const viewCustomerModal = document.getElementById('viewCustomerModal');
  const closeViewCustomerModal = document.getElementById('closeViewCustomerModal');

  if (closeViewOrderModal) {
    closeViewOrderModal.addEventListener('click', () => {
      viewOrderModal.style.display = 'none';
    });
  }

  if (viewOrderModal) {
    viewOrderModal.addEventListener('click', (e) => {
      if (e.target === viewOrderModal) {
        viewOrderModal.style.display = 'none';
      }
    });
  }

  if (closeViewCustomerModal) {
    closeViewCustomerModal.addEventListener('click', () => {
      viewCustomerModal.style.display = 'none';
    });
  }

  if (viewCustomerModal) {
    viewCustomerModal.addEventListener('click', (e) => {
      if (e.target === viewCustomerModal) {
        viewCustomerModal.style.display = 'none';
      }
    });
  }

  // TV Clock
  const tvClock = document.getElementById('tvClock');
  if (tvClock) {
    setInterval(() => {
      const now = new Date();
      tvClock.textContent = now.toLocaleTimeString('pt-BR');
    }, 1000);
  }
});
