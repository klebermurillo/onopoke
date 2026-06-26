const pokeImages = {
  salmonMango: [
    "https://source.unsplash.com/featured/1200x900/?poke,bowl,salmon,mango&sig=101",
    "https://source.unsplash.com/featured/1200x900/?salmon,poke,avocado&sig=102",
    "https://source.unsplash.com/featured/1200x900/?hawaiian,poke,bowl&sig=103",
    "https://source.unsplash.com/featured/1200x900/?fresh,poke,salmon&sig=104"
  ],
  tuna: [
    "https://source.unsplash.com/featured/1200x900/?tuna,poke,bowl&sig=201",
    "https://source.unsplash.com/featured/1200x900/?ahi,tuna,bowl&sig=202",
    "https://source.unsplash.com/featured/1200x900/?poke,cucumber,red,onion&sig=203",
    "https://source.unsplash.com/featured/1200x900/?tuna,avocado,poke&sig=204"
  ],
  shrimp: [
    "https://source.unsplash.com/featured/1200x900/?shrimp,poke,bowl&sig=301",
    "https://source.unsplash.com/featured/1200x900/?prawn,hawaiian,bowl&sig=302",
    "https://source.unsplash.com/featured/1200x900/?shrimp,avocado,bowl&sig=303",
    "https://source.unsplash.com/featured/1200x900/?seafood,poke,plate&sig=304"
  ],
  warm: [
    "https://source.unsplash.com/featured/1200x900/?rice,teriyaki,bowl&sig=401",
    "https://source.unsplash.com/featured/1200x900/?hawaiian,rice,meal&sig=402",
    "https://source.unsplash.com/featured/1200x900/?grilled,protein,bowl&sig=403",
    "https://source.unsplash.com/featured/1200x900/?asian,bowl,lunch&sig=404"
  ],
  dessert: [
    "https://source.unsplash.com/featured/1200x900/?coconut,dessert,tropical&sig=501",
    "https://source.unsplash.com/featured/1200x900/?passionfruit,dessert&sig=502",
    "https://source.unsplash.com/featured/1200x900/?cheesecake,fruit&sig=503",
    "https://source.unsplash.com/featured/1200x900/?dessert,plate,tropical&sig=504"
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

const state = {
  activeView: "home",
  activeCategory: "Todos",
  activeProductId: 1,
  activeImageIndex: 0,
  activeAdminOrderId: "ONO-4201",
  cart: [
    {
      productId: 2,
      name: "Loco Moco da Ilha",
      size: "Individual",
      quantity: 1,
      image: pokeImages.warm[0],
      unitPrice: 68,
      notes: "Molho extra à parte.",
      addons: ["Ovo mollet extra"]
    }
  ],
  checkout: {
    name: "Camila Azevedo",
    phone: "(11) 99888-1122",
    address: "Rua das Acácias, 320 - Jardim Bela Vista"
  }
};

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
    category: "Pratos Quentes",
    name: "Loco Moco da Ilha",
    description: "Arroz branco, hambúrguer artesanal, ovo mollet e molho gravy teriyaki com toque havaiano.",
    detail: "Um clássico comfort food da ilha com acabamento premium. Ideal para quem quer um prato farto, saboroso e com apelo visual caseiro e elegante.",
    price: 68,
    images: pokeImages.warm,
    sizes: [
      { label: "Individual", price: 68 },
      { label: "Duplo", price: 112 },
      { label: "Família", price: 198 }
    ],
    addons: [
      { label: "Ovo mollet extra", price: 9 },
      { label: "Arroz de coco", price: 8 },
      { label: "Molho gravy", price: 7 }
    ],
    featured: true
  },
  {
    id: 3,
    category: "Combos",
    name: "Especial Camarão",
    description: "Camarão grelhado, base leve e molho especial da casa com toque cítrico.",
    detail: "Uma combinação elegante com camarão e ingredientes frescos para quem busca um poke sofisticado, equilibrado e cheio de personalidade.",
    price: 94,
    images: pokeImages.shrimp,
    sizes: [
      { label: "Individual", price: 94 },
      { label: "Duplo", price: 162 },
      { label: "Família", price: 268 }
    ],
    addons: [
      { label: "Bebida hibisco", price: 12 },
      { label: "Chips de batata-doce", price: 10 },
      { label: "Molho extra", price: 6 }
    ],
    featured: true
  },
  {
    id: 4,
    category: "Pratos Quentes",
    name: "Kalua Pork Plate",
    description: "Carne de porco desfiada, arroz de coco, salada de repolho e molho da ilha.",
    detail: "Um prato clássico havaiano com textura suculenta e equilíbrio entre conforto e frescor. Excelente para refeições completas com visual apetitoso.",
    price: 72,
    images: pokeImages.warm,
    sizes: [
      { label: "Individual", price: 72 },
      { label: "Duplo", price: 126 },
      { label: "Família", price: 214 }
    ],
    addons: [
      { label: "Abacaxi grelhado", price: 10 },
      { label: "Arroz de coco", price: 8 },
      { label: "Molho da ilha", price: 6 }
    ],
    featured: true
  },
  {
    id: 5,
    category: "Sobremesas Tropicais",
    name: "Cheesecake de Coco e Maracujá",
    description: "Base crocante, creme leve de coco e calda de maracujá com acabamento tropical.",
    detail: "Uma sobremesa fresca para fechar a refeição com leveza e contraste. Funciona bem para delivery, menu do dia e combos especiais.",
    price: 34,
    images: pokeImages.dessert,
    sizes: [
      { label: "Individual", price: 34 },
      { label: "Duplo", price: 58 },
      { label: "Família", price: 98 }
    ],
    addons: [
      { label: "Coco tostado", price: 6 },
      { label: "Calda extra", price: 5 },
      { label: "Frutas tropicais", price: 9 }
    ]
  },
  {
    id: 6,
    category: "Pokes",
    name: "Tradicional Atum",
    description: "Atum fresco, pepino japonês e cebola roxa com finalização artesanal.",
    detail: "Versão clássica de poke com atum fresco, textura equilibrada e montagem premium para uma refeição tropical e sofisticada.",
    price: 59,
    images: pokeImages.tuna,
    sizes: [
      { label: "Individual", price: 59 },
      { label: "Duplo", price: 102 },
      { label: "Família", price: 176 }
    ],
    addons: [
      { label: "Abacate", price: 10 },
      { label: "Cebola crispy", price: 8 },
      { label: "Molho extra", price: 6 }
    ]
  }
];

const testimonials = [
  {
    name: "Renata Prado",
    event: "Almoço de família",
    quote: "O poke chegou lindo, muito fresco e com montagem impecável. Passa uma imagem premium sem perder a sensação caseira.",
    rating: 5
  },
  {
    name: "Larissa Monteiro",
    event: "Pedido corporativo",
    quote: "Os combos foram perfeitos para nosso evento. Entrega pontual e visual que realmente impressiona na apresentação.",
    rating: 5
  },
  {
    name: "Marina Faria",
    event: "Delivery do dia",
    quote: "A comida veio saborosa, leve e muito bem montada. Parece um restaurante de alto padrão desde a embalagem.",
    rating: 5
  }
];

const adminOrders = [
  {
    id: "ONO-4201",
    customer: "Helena Siqueira",
    phone: "(11) 99820-1144",
    items: ["Poke Bowl Maui", "Bebida hibisco"],
    total: "R$ 112,00",
    status: "Em produção",
    channel: "Delivery",
    payment: "Pix",
    mode: "Entrega",
    eta: "12 min"
  },
  {
    id: "ONO-4202",
    customer: "Clara Menezes",
    phone: "(11) 99741-2203",
    items: ["Combo Waikiki", "Chips de batata-doce"],
    total: "R$ 245,00",
    status: "Pronto",
    channel: "App",
    payment: "Cartão",
    mode: "Retirada",
    eta: "Pronto para chamar"
  },
  {
    id: "ONO-4203",
    customer: "Bianca Freitas",
    phone: "(11) 99688-9901",
    items: ["Loco Moco da Ilha"],
    total: "R$ 158,00",
    status: "Saiu para entrega",
    channel: "WhatsApp",
    payment: "Pix",
    mode: "Entrega",
    eta: "5 min"
  },
  {
    id: "ONO-4204",
    customer: "Patrícia Lins",
    phone: "(11) 99555-1040",
    items: ["Frango Huli Huli", "Calda extra"],
    total: "R$ 98,00",
    status: "Novo pedido",
    channel: "Mesa",
    payment: "Dinheiro",
    mode: "Retirada",
    eta: "Aguardando"
  }
];

const adminMetrics = [
  { icon: "fa-solid fa-sack-dollar", label: "Faturamento do mês", value: "R$ 18.450" },
  { icon: "fa-solid fa-bag-shopping", label: "Pedidos ativos", value: "32" },
  { icon: "fa-solid fa-circle-check", label: "Pedidos prontos", value: "9" },
  { icon: "fa-solid fa-clock", label: "Tempo médio", value: "24 min" }
];

const adminStatusFlow = ["Novo pedido", "Confirmado", "Em produção", "Pronto", "Saiu para entrega", "Entregue"];

function getStatusClass(status) {
  return status
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, "-");
}

const deliveryFee = 18;
const whatsappPhone = "5519971160068";

const elements = {
  views: [...document.querySelectorAll(".view")],
  navLinks: [...document.querySelectorAll("[data-nav]")],
  menuToggle: document.getElementById("menuToggle"),
  mainNav: document.getElementById("mainNav"),
  heroPhoto: document.getElementById("heroPhoto"),
  bestSellersGrid: document.getElementById("bestSellersGrid"),
  testimonialGrid: document.getElementById("testimonialGrid"),
  categoryChips: document.getElementById("categoryChips"),
  menuGrid: document.getElementById("menuGrid"),
  searchInput: document.getElementById("searchInput"),
  productCategoryTag: document.getElementById("productCategoryTag"),
  productTitle: document.getElementById("productTitle"),
  productDescription: document.getElementById("productDescription"),
  productPrice: document.getElementById("productPrice"),
  productMainImage: document.getElementById("productMainImage"),
  productThumbRow: document.getElementById("productThumbRow"),
  sizeOptions: document.getElementById("sizeOptions"),
  addonList: document.getElementById("addonList"),
  productNotes: document.getElementById("productNotes"),
  addProductButton: document.getElementById("addProductButton"),
  cartItems: document.getElementById("cartItems"),
  cartSubtotal: document.getElementById("cartSubtotal"),
  cartDeliveryFee: document.getElementById("cartDeliveryFee"),
  cartTotal: document.getElementById("cartTotal"),
  cartCount: document.getElementById("cartCount"),
  cartNotes: document.getElementById("cartNotes"),
  goToCheckout: document.getElementById("goToCheckout"),
  checkoutSummary: document.getElementById("checkoutSummary"),
  checkoutForm: document.getElementById("checkoutForm"),
  customerName: document.getElementById("customerName"),
  customerPhone: document.getElementById("customerPhone"),
  customerAddress: document.getElementById("customerAddress"),
  deliveryOptions: document.getElementById("deliveryOptions"),
  paymentOptions: document.getElementById("paymentOptions"),
  orderNumber: document.getElementById("orderNumber"),
  whatsappButton: document.getElementById("whatsappButton"),
  ordersList: document.getElementById("ordersList"),
  adminMetrics: document.getElementById("adminMetrics"),
  trackingPanel: document.getElementById("trackingPanel")
};

function formatPrice(value) {
  return value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

function getCategories() {
  return ["Todos", ...new Set(products.map((product) => product.category))];
}

function getActiveProduct() {
  return products.find((product) => product.id === state.activeProductId) || products[0];
}

function getSelectedSize(product) {
  const selected = product.sizes.find((size) => size.label === state.selectedSize);
  return selected || product.sizes[0];
}

function setupInitialState() {
  const featuredProduct = products.find((product) => product.featured) || products[0];
  state.activeProductId = featuredProduct.id;
  state.selectedSize = featuredProduct.sizes[0].label;
  state.selectedAddons = [];
  state.cart = state.cart.map((item) => {
    const product = products.find((productEntry) => productEntry.id === item.productId);
    return product ? { ...item, image: product.images[0] } : item;
  });
  elements.heroPhoto.style.backgroundImage = `url(${featuredProduct.images[0]})`;
  elements.customerName.value = state.checkout.name;
  elements.customerPhone.value = state.checkout.phone;
  elements.customerAddress.value = state.checkout.address;
  elements.cartDeliveryFee.textContent = formatPrice(deliveryFee);
}

function renderBestSellers() {
  elements.bestSellersGrid.innerHTML = bestSellerHighlights
    .map((item) => createBestSellerCard(item))
    .join("");
}

function createBestSellerCard(item) {
  return `
    <article class="product-card">
      <div class="product-image-wrap">
        <div class="product-image" style="background-image: url('${item.image}')"></div>
      </div>
      <div class="product-card-content">
        <div class="product-copy">
          <span class="product-tag">${item.emoji} Mais pedido</span>
          <h3>${item.title}</h3>
          <p>${item.description}</p>
        </div>
      </div>
    </article>
  `;
}

function renderTestimonials() {
  elements.testimonialGrid.innerHTML = testimonials
    .map(
      (testimonial) => `
        <article class="testimonial-card">
          <div class="stars">${'<i class="fa-solid fa-star"></i>'.repeat(testimonial.rating)}</div>
          <p>“${testimonial.quote}”</p>
          <footer>
            <div>
              <strong>${testimonial.name}</strong>
              <span>${testimonial.event}</span>
            </div>
            <i class="fa-solid fa-heart"></i>
          </footer>
        </article>
      `
    )
    .join("");
}

function renderCategoryChips() {
  elements.categoryChips.innerHTML = getCategories()
    .map(
      (category) => `
        <button class="chip ${category === state.activeCategory ? "active" : ""}" data-category="${category}">
          ${category}
        </button>
      `
    )
    .join("");
}

function createProductCard(product, compact = false) {
  return `
    <article class="product-card" data-product-id="${product.id}">
      <div class="product-image-wrap">
        <div class="product-image" style="background-image: url('${product.images[0]}')"></div>
      </div>
      <div class="product-card-content">
        <div class="product-copy">
          <span class="product-tag">${product.category}</span>
          <h3>${product.name}</h3>
          <p>${product.description}</p>
        </div>
        <div class="product-card-footer">
          <div>
            <span class="product-tag">A partir de</span>
            <div class="product-price">${formatPrice(product.price)}</div>
          </div>
          <div class="hero-actions">
            <button class="icon-button" data-open-product="${product.id}" aria-label="Ver produto">
              <i class="fa-solid fa-eye"></i>
            </button>
            <button class="btn ${compact ? "btn-secondary" : "btn-primary"}" data-add-quick="${product.id}">
              <i class="fa-solid fa-bag-shopping"></i>
              Adicionar ao Carrinho
            </button>
          </div>
        </div>
      </div>
    </article>
  `;
}

function renderMenuGrid() {
  const query = elements.searchInput.value.trim().toLowerCase();
  const filtered = products.filter((product) => {
    const matchesCategory = state.activeCategory === "Todos" || product.category === state.activeCategory;
    const matchesSearch = [product.name, product.description, product.category].join(" ").toLowerCase().includes(query);
    return matchesCategory && matchesSearch;
  });

  elements.menuGrid.innerHTML = filtered.length
    ? filtered.map((product) => createProductCard(product)).join("")
    : '<div class="empty-state">Nenhum produto encontrado para os filtros atuais.</div>';
}

function setActiveProduct(productId) {
  const product = products.find((item) => item.id === productId);
  if (!product) return;

  state.activeProductId = productId;
  state.selectedSize = product.sizes[0].label;
  state.selectedAddons = [];
  state.activeImageIndex = 0;
  elements.productNotes.value = "";
  renderProductDetail();
}

function renderProductDetail() {
  const product = getActiveProduct();
  const selectedSize = getSelectedSize(product);

  elements.productCategoryTag.textContent = product.category;
  elements.productTitle.textContent = product.name;
  elements.productDescription.textContent = product.detail;
  elements.productPrice.textContent = formatPrice(selectedSize.price);
  elements.productMainImage.style.backgroundImage = `url(${product.images[state.activeImageIndex]})`;

  elements.productThumbRow.innerHTML = product.images
    .map(
      (image, index) => `
        <button class="thumb-button ${index === state.activeImageIndex ? "active" : ""}" data-thumb-index="${index}">
          <div class="thumb-image" style="background-image: url('${image}')"></div>
        </button>
      `
    )
    .join("");

  elements.sizeOptions.innerHTML = product.sizes
    .map(
      (size) => `
        <label class="size-chip ${size.label === selectedSize.label ? "active" : ""}">
          <input type="radio" name="productSize" value="${size.label}" ${size.label === selectedSize.label ? "checked" : ""}>
          <span>${size.label} · ${formatPrice(size.price)}</span>
        </label>
      `
    )
    .join("");

  elements.addonList.innerHTML = product.addons
    .map(
      (addon) => `
        <label class="addon-chip ${state.selectedAddons.includes(addon.label) ? "active" : ""}">
          <input type="checkbox" value="${addon.label}" ${state.selectedAddons.includes(addon.label) ? "checked" : ""}>
          <span>${addon.label} · +${formatPrice(addon.price)}</span>
        </label>
      `
    )
    .join("");
}

function calculateCartTotals() {
  const subtotal = state.cart.reduce((total, item) => total + item.unitPrice * item.quantity, 0);
  const total = subtotal + (state.cart.length ? deliveryFee : 0);
  return { subtotal, total };
}

function renderCart() {
  elements.cartCount.textContent = state.cart.reduce((count, item) => count + item.quantity, 0);

  if (!state.cart.length) {
    elements.cartItems.innerHTML = '<div class="empty-state">Seu carrinho está vazio. Explore o cardápio e adicione produtos para continuar.</div>';
  } else {
    elements.cartItems.innerHTML = state.cart
      .map(
        (item, index) => `
          <article class="cart-item">
            <div class="cart-item-image" style="background-image: url('${item.image}')"></div>
            <div class="cart-item-content">
              <div class="order-item-head">
                <div>
                  <h3>${item.name}</h3>
                  <span>${item.size}</span>
                </div>
                <strong>${formatPrice(item.unitPrice * item.quantity)}</strong>
              </div>
              <p>${item.addons.length ? `Adicionais: ${item.addons.join(", ")}.` : "Sem adicionais."} ${item.notes || ""}</p>
              <div class="cart-item-footer">
                <div class="quantity-controls">
                  <button data-qty-action="decrease" data-cart-index="${index}">-</button>
                  <strong>${item.quantity}</strong>
                  <button data-qty-action="increase" data-cart-index="${index}">+</button>
                </div>
                <button class="icon-button" data-remove-cart="${index}" aria-label="Remover item">
                  <i class="fa-solid fa-trash"></i>
                </button>
              </div>
            </div>
          </article>
        `
      )
      .join("");
  }

  const totals = calculateCartTotals();
  elements.cartSubtotal.textContent = formatPrice(totals.subtotal);
  elements.cartTotal.textContent = formatPrice(totals.total);
}

function renderCheckoutSummary() {
  const totals = calculateCartTotals();

  elements.checkoutSummary.innerHTML = `
    ${state.cart
      .map(
        (item) => `
          <div class="checkout-summary-item">
            <strong>${item.quantity}x ${item.name}</strong>
            <span>${item.size}</span>
            <div class="summary-line">
              <span>${item.addons.length ? item.addons.join(", ") : "Sem adicionais"}</span>
              <strong>${formatPrice(item.unitPrice * item.quantity)}</strong>
            </div>
          </div>
        `
      )
      .join("")}
    <div class="summary-line">
      <span>Subtotal</span>
      <strong>${formatPrice(totals.subtotal)}</strong>
    </div>
    <div class="summary-line">
      <span>Entrega</span>
      <strong>${formatPrice(state.cart.length ? deliveryFee : 0)}</strong>
    </div>
    <div class="summary-line total-line">
      <span>Total</span>
      <strong>${formatPrice(totals.total)}</strong>
    </div>
  `;
}

function renderAdmin() {
  elements.adminMetrics.innerHTML = adminMetrics
    .map(
      (metric) => `
        <article class="metric-card">
          <i class="${metric.icon}"></i>
          <span>${metric.label}</span>
          <strong>${metric.value}</strong>
        </article>
      `
    )
    .join("");

  elements.ordersList.innerHTML = adminOrders
    .map(
      (order) => `
        <div class="order-item admin-order-card ${order.id === state.activeAdminOrderId ? "active" : ""}">
          <div class="order-item-head">
            <div>
              <strong>#${order.id}</strong>
              <span>${order.customer} · ${order.channel}</span>
            </div>
            <span class="order-status status-${getStatusClass(order.status)}">${order.status}</span>
          </div>
          <div class="admin-order-details">
            <span>${order.items.join(", ")}</span>
            <strong>${order.total}</strong>
          </div>
          <div class="admin-order-meta">
            <span><i class="fa-solid fa-user"></i> ${order.customer}</span>
            <span><i class="fa-solid fa-phone"></i> ${order.phone}</span>
            <span><i class="fa-solid fa-credit-card"></i> ${order.payment}</span>
            <span><i class="fa-solid fa-motorcycle"></i> ${order.mode}</span>
          </div>
          <div class="order-progress" aria-hidden="true">
            <span style="width: ${Math.max(18, (adminStatusFlow.indexOf(order.status) / (adminStatusFlow.length - 1)) * 100)}%"></span>
          </div>
          <div class="order-action-row">
            <button type="button" class="btn btn-secondary btn-small" data-admin-select="${order.id}">Ver pedido</button>
            <button type="button" class="btn btn-primary btn-small" data-admin-advance="${order.id}">Avançar status</button>
          </div>
        </div>
      `
    )
    .join("");

  const activeOrder = adminOrders.find((order) => order.id === state.activeAdminOrderId) || adminOrders[0];
  const activeStatusIndex = Math.max(adminStatusFlow.indexOf(activeOrder.status), 0);

  elements.trackingPanel.innerHTML = `
    <div class="tracking-header">
      <div>
        <span class="eyebrow">Acompanhamento do cliente</span>
        <h3>${activeOrder.customer}</h3>
      </div>
      <span class="order-status status-${getStatusClass(activeOrder.status)}">${activeOrder.status}</span>
    </div>
    <div class="tracking-order-number">${activeOrder.id}</div>
    <div class="tracking-summary">
      <div>
        <span>Itens</span>
        <strong>${activeOrder.items.join(", ")}</strong>
      </div>
      <div>
        <span>Previsão</span>
        <strong>${activeOrder.eta}</strong>
      </div>
      <div>
        <span>Pagamento</span>
        <strong>${activeOrder.payment}</strong>
      </div>
      <div>
        <span>Contato</span>
        <strong>${activeOrder.phone}</strong>
      </div>
    </div>
    <div class="tracking-timeline">
      ${adminStatusFlow
        .map(
          (status, index) => `
            <div class="tracking-step ${index < activeStatusIndex ? "done" : ""} ${index === activeStatusIndex ? "current" : ""}">
              <span></span>
              <div>
                <strong>${status}</strong>
                <small>${index === activeStatusIndex ? "Etapa atual" : index < activeStatusIndex ? "Concluída" : "Pendente"}</small>
              </div>
            </div>
          `
        )
        .join("")}
    </div>
    <div class="tracking-note ${activeOrder.status === "Pronto" ? "ready" : ""}">
      ${activeOrder.status === "Pronto" ? "Pedido pronto para retirada ou despacho." : `Pedido em ${activeOrder.status.toLowerCase()}.`}
    </div>
  `;
}

function renderAll() {
  renderBestSellers();
  renderTestimonials();
  renderCategoryChips();
  renderMenuGrid();
  renderProductDetail();
  renderCart();
  renderCheckoutSummary();
  renderAdmin();
}

function toggleNav(forceOpen) {
  const shouldOpen = typeof forceOpen === "boolean" ? forceOpen : !elements.mainNav.classList.contains("is-open");
  elements.mainNav.classList.toggle("is-open", shouldOpen);
}

function setActiveView(viewName) {
  state.activeView = viewName;
  elements.views.forEach((view) => view.classList.toggle("is-active", view.dataset.view === viewName));
  document.querySelectorAll(".main-nav a").forEach((link) => {
    link.classList.toggle("is-current", link.dataset.nav === viewName);
  });
  toggleNav(false);
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function quickAddProduct(productId) {
  const product = products.find((item) => item.id === productId);
  if (!product) return;
  const defaultSize = product.sizes[0];
  const existingItem = state.cart.find((item) => item.productId === product.id && item.size === defaultSize.label && item.addons.length === 0);

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    state.cart.push({
      productId: product.id,
      name: product.name,
      size: defaultSize.label,
      quantity: 1,
      image: product.images[0],
      unitPrice: defaultSize.price,
      notes: "",
      addons: []
    });
  }

  renderCart();
  renderCheckoutSummary();
}

function addConfiguredProductToCart() {
  const product = getActiveProduct();
  const size = getSelectedSize(product);
  const selectedAddonData = product.addons.filter((addon) => state.selectedAddons.includes(addon.label));
  const addonsTotal = selectedAddonData.reduce((total, addon) => total + addon.price, 0);

  state.cart.push({
    productId: product.id,
    name: product.name,
    size: size.label,
    quantity: 1,
    image: product.images[0],
    unitPrice: size.price + addonsTotal,
    notes: elements.productNotes.value.trim(),
    addons: selectedAddonData.map((addon) => addon.label)
  });

  renderCart();
  renderCheckoutSummary();
  setActiveView("cart");
}

function handleCartQuantity(index, action) {
  const item = state.cart[index];
  if (!item) return;

  if (action === "increase") {
    item.quantity += 1;
  }

  if (action === "decrease") {
    item.quantity -= 1;
    if (item.quantity <= 0) {
      state.cart.splice(index, 1);
    }
  }

  renderCart();
  renderCheckoutSummary();
}

function removeCartItem(index) {
  state.cart.splice(index, 1);
  renderCart();
  renderCheckoutSummary();
}

function selectAdminOrder(orderId) {
  state.activeAdminOrderId = orderId;
  renderAdmin();
}

function advanceAdminOrder(orderId) {
  const order = adminOrders.find((item) => item.id === orderId);
  if (!order) return;

  const currentIndex = adminStatusFlow.indexOf(order.status);
  const nextIndex = Math.min(currentIndex + 1, adminStatusFlow.length - 1);
  order.status = adminStatusFlow[nextIndex];
  state.activeAdminOrderId = order.id;
  renderAdmin();
}

function updateOptionPills(container) {
  container.querySelectorAll(".pill-option").forEach((pill) => {
    const input = pill.querySelector("input");
    pill.classList.toggle("active", input.checked);
  });
}

function buildWhatsappLink(orderId) {
  const deliveryMode = document.querySelector('input[name="deliveryMode"]:checked')?.value || "entrega";
  const paymentMethod = document.querySelector('input[name="paymentMethod"]:checked')?.value || "Pix";

  const customerAddress = elements.customerAddress.value.trim();
  const cartNotes = elements.cartNotes.value.trim();

  const summaryText = state.cart
    .map((item) => {
      const addonsText = item.addons.length
        ? ` | Adicionais: ${item.addons.join(", ")}`
        : "";

      const notesText = item.notes
        ? ` | Obs: ${item.notes}`
        : "";

      return `${item.quantity}x ${item.name} (${item.size}) - ${formatPrice(item.unitPrice * item.quantity)}${addonsText}${notesText}`;
    })
    .join("\n");

  const message = [
    `Olá! Segue o pedido ${orderId}.`,
    "",
    `Cliente: ${elements.customerName.value.trim()}`,
    `Telefone: ${elements.customerPhone.value.trim()}`,
    customerAddress ? `Endereço: ${customerAddress}` : null,
    `Recebimento: ${deliveryMode}`,
    `Pagamento: ${paymentMethod}`,
    cartNotes ? `Observações gerais: ${cartNotes}` : null,
    "",
    "Itens:",
    summaryText || "Carrinho vazio"
  ]
    .filter(Boolean)
    .join("\n");

  return `https://wa.me/${whatsappPhone}?text=${encodeURIComponent(message)}`;
}

function syncWhatsappLink() {
  const orderId = elements.orderNumber.textContent?.trim() || "#DEC-0000";
  elements.whatsappButton.href = buildWhatsappLink(orderId);
}

function submitCheckout(event) {
  event.preventDefault();

  if (!state.cart.length) {
    setActiveView("menu");
    return;
  }

  state.checkout = {
    name: elements.customerName.value.trim(),
    phone: elements.customerPhone.value.trim(),
    address: elements.customerAddress.value.trim()
  };

  const orderId = `#DEC-${Math.floor(1000 + Math.random() * 9000)}`;
  elements.orderNumber.textContent = orderId;
  elements.whatsappButton.href = buildWhatsappLink(orderId);
  setActiveView("confirmation");
}

function bindEvents() {
  elements.menuToggle.addEventListener("click", () => toggleNav());

  elements.navLinks.forEach((element) => {
    element.addEventListener("click", (event) => {
      const viewName = element.dataset.nav;
      if (!viewName) return;
      event.preventDefault();
      setActiveView(viewName);
    });
  });

  elements.searchInput.addEventListener("input", renderMenuGrid);

  elements.categoryChips.addEventListener("click", (event) => {
    const target = event.target.closest("[data-category]");
    if (!target) return;
    state.activeCategory = target.dataset.category;
    renderCategoryChips();
    renderMenuGrid();
  });

  document.body.addEventListener("click", (event) => {
    const adminSelectButton = event.target.closest("[data-admin-select]");
    if (adminSelectButton) {
      selectAdminOrder(adminSelectButton.dataset.adminSelect);
      return;
    }

    const adminAdvanceButton = event.target.closest("[data-admin-advance]");
    if (adminAdvanceButton) {
      advanceAdminOrder(adminAdvanceButton.dataset.adminAdvance);
      return;
    }

    const openProductButton = event.target.closest("[data-open-product]");
    if (openProductButton) {
      setActiveProduct(Number(openProductButton.dataset.openProduct));
      setActiveView("product");
      return;
    }

    const addQuickButton = event.target.closest("[data-add-quick]");
    if (addQuickButton) {
      quickAddProduct(Number(addQuickButton.dataset.addQuick));
      return;
    }

    const thumbButton = event.target.closest("[data-thumb-index]");
    if (thumbButton) {
      state.activeImageIndex = Number(thumbButton.dataset.thumbIndex);
      renderProductDetail();
      return;
    }

    const qtyButton = event.target.closest("[data-qty-action]");
    if (qtyButton) {
      handleCartQuantity(Number(qtyButton.dataset.cartIndex), qtyButton.dataset.qtyAction);
      return;
    }

    const removeButton = event.target.closest("[data-remove-cart]");
    if (removeButton) {
      removeCartItem(Number(removeButton.dataset.removeCart));
    }
  });

  elements.sizeOptions.addEventListener("change", (event) => {
    const input = event.target.closest('input[name="productSize"]');
    if (!input) return;
    state.selectedSize = input.value;
    renderProductDetail();
  });

  elements.addonList.addEventListener("change", (event) => {
    const input = event.target.closest('input[type="checkbox"]');
    if (!input) return;

    if (input.checked) {
      state.selectedAddons.push(input.value);
    } else {
      state.selectedAddons = state.selectedAddons.filter((addon) => addon !== input.value);
    }

    renderProductDetail();
  });

  elements.addProductButton.addEventListener("click", addConfiguredProductToCart);
  elements.goToCheckout.addEventListener("click", () => setActiveView("checkout"));
  elements.checkoutForm.addEventListener("submit", submitCheckout);
  elements.checkoutForm.addEventListener("input", syncWhatsappLink);
  elements.cartNotes.addEventListener("input", syncWhatsappLink);

  elements.deliveryOptions.addEventListener("change", () => {
    updateOptionPills(elements.deliveryOptions);
    syncWhatsappLink();
  });

  elements.paymentOptions.addEventListener("change", () => {
    updateOptionPills(elements.paymentOptions);
    syncWhatsappLink();
  });

  document.addEventListener("click", (event) => {
    if (!event.target.closest(".header-inner")) {
      toggleNav(false);
    }
  });
}

setupInitialState();
renderAll();
bindEvents();
setActiveView("home");
updateOptionPills(elements.deliveryOptions);
updateOptionPills(elements.paymentOptions);
syncWhatsappLink();
