// ===== DATA =====
const CATEGORIES = ['Barchasi', 'Kompyuterlar', 'Noutbuklar', 'Monitorlar', 'Naushniklar', 'Sichqonchalar', 'Kreslolar', 'Aksessuarlar'];
let products = [
  { id: 1, name: 'Gaming PC Pro', cat: 'Kompyuterlar', price: 12500000, desc: 'Intel i9, RTX 4080, 32GB RAM, 1TB SSD', img: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d8?w=400&h=300&fit=crop' },
  { id: 2, name: 'Office Desktop', cat: 'Kompyuterlar', price: 5200000, desc: 'Intel i5, 16GB RAM, 512GB SSD, ofis uchun', img: 'https://images.unsplash.com/photo-1593062096033-9a26b09da705?w=400&h=300&fit=crop' },
  { id: 3, name: 'MacBook Pro 16"', cat: 'Noutbuklar', price: 28900000, desc: 'M3 Max chip, 36GB RAM, 1TB SSD', img: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=300&fit=crop' },
  { id: 4, name: 'ASUS ROG Laptop', cat: 'Noutbuklar', price: 18500000, desc: 'RTX 4070, i7-13700H, 16GB, 144Hz display', img: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=400&h=300&fit=crop' },
  { id: 5, name: 'Dell XPS 15', cat: 'Noutbuklar', price: 15800000, desc: 'Intel i7, 16GB RAM, OLED 3.5K display', img: 'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=400&h=300&fit=crop' },
  { id: 6, name: 'Samsung 4K Monitor', cat: 'Monitorlar', price: 4800000, desc: '32" 4K UHD, HDR10, IPS Panel', img: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=400&h=300&fit=crop' },
  { id: 7, name: 'LG UltraWide 34"', cat: 'Monitorlar', price: 7200000, desc: '34" QHD, 160Hz, Curved, USB-C', img: 'https://images.unsplash.com/photo-1585792180666-f7347c490ee2?w=400&h=300&fit=crop' },
  { id: 8, name: 'Sony WH-1000XM5', cat: 'Naushniklar', price: 3900000, desc: 'ANC, 30 soat batareya, Hi-Res Audio', img: 'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=400&h=300&fit=crop' },
  { id: 9, name: 'AirPods Pro 2', cat: 'Naushniklar', price: 3200000, desc: 'ANC, Spatial Audio, MagSafe charging', img: 'https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?w=400&h=300&fit=crop' },
  { id: 10, name: 'Logitech MX Master', cat: 'Sichqonchalar', price: 1200000, desc: 'Ergonomik, 8K DPI, USB-C, Bluetooth', img: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&h=300&fit=crop' },
  { id: 11, name: 'Razer DeathAdder', cat: 'Sichqonchalar', price: 850000, desc: 'Gaming, 30K DPI, RGB, 90 soat batareya', img: 'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=400&h=300&fit=crop' },
  { id: 12, name: 'ASUS 27" Gaming', cat: 'Monitorlar', price: 5500000, desc: '27" QHD, 240Hz, 1ms, G-Sync', img: 'https://images.unsplash.com/photo-1616763355548-1b11cea5e30e?w=400&h=300&fit=crop' },
  { id: 13, name: 'DXRacer Master', cat: 'Kreslolar', price: 4500000, desc: 'Premium igravoy kreslo, ergonomik dizayn, 4D podlokotnik', img: 'https://images.unsplash.com/photo-1598550476439-6847785fcea6?w=400&h=300&fit=crop' },
  { id: 14, name: 'Secretlab Titan Evo', cat: 'Kreslolar', price: 6200000, desc: 'Professional geymerlar uchun maxsus kreslo', img: 'https://images.unsplash.com/photo-1616423640778-28d1b53229b4?w=400&h=300&fit=crop' },
  { id: 15, name: 'Razer BlackWidow V4', cat: 'Aksessuarlar', price: 2100000, desc: 'Mexanik klaviatura, RGB, Green Switch', img: 'https://images.unsplash.com/photo-1595225476474-87563907a212?w=400&h=300&fit=crop' },
  { id: 16, name: 'Logitech G PRO X', cat: 'Aksessuarlar', price: 1800000, desc: 'TKL formatli mexanik klaviatura, GX Blue', img: 'https://images.unsplash.com/photo-1555680202-c86f0e12f086?w=400&h=300&fit=crop' },
];
let nextProdId = 17;
let cart = [];
let orders = [
  { id: '#ORD-001', items: 'MacBook Pro 16" x1', total: 28900000, status: 'pending', date: '2026-03-17' },
  { id: '#ORD-002', items: 'Sony WH-1000XM5 x2', total: 7800000, status: 'done', date: '2026-03-16' },
  { id: '#ORD-003', items: 'Gaming PC Pro x1, Razer DeathAdder x1', total: 13350000, status: 'pending', date: '2026-03-18' },
];
let activeCat = 'Barchasi';
let activePanel = 'shop';
let editingProduct = null;
let currentUser = null;
let isLoginMode = true;
let allUsers = [];
let nextUserId = 1;
let activities = [];
let reviews = [];
let favorites = [];

function loadData() {
    try {
        const j = localStorage.getItem('techstore_data_v1');
        if (j) {
            const d = JSON.parse(j);
            if (d.products) products = d.products;
            if (d.orders) orders = d.orders;
            if (d.allUsers) allUsers = d.allUsers;
            if (d.activities) activities = d.activities;
            if (d.reviews) reviews = d.reviews;
            if (d.nextUserId) nextUserId = d.nextUserId;
            if (d.nextProdId) nextProdId = d.nextProdId;
            if (d.favorites) favorites = d.favorites;
            if (d.currentUserEmail) {
                if (d.currentUserEmail === 'admin1@gmail.com') {
                    currentUser = { id: 'admin', name: 'Admin', email: 'admin1@gmail.com' };
                } else {
                    currentUser = allUsers.find(u => u.email === d.currentUserEmail) || null;
                }
            }
        }
    } catch(e) { console.error("Error loading data", e); }

    // Merge new hardcoded products if they were not in the saved localStorage
    const newItems = [
      { id: 13, name: 'DXRacer Master', cat: 'Kreslolar', price: 4500000, desc: 'Premium igravoy kreslo, ergonomik dizayn, 4D podlokotnik', img: 'https://images.unsplash.com/photo-1598550476439-6847785fcea6?w=400&h=300&fit=crop' },
      { id: 14, name: 'Secretlab Titan Evo', cat: 'Kreslolar', price: 6200000, desc: 'Professional geymerlar uchun maxsus kreslo', img: 'https://images.unsplash.com/photo-1616423640778-28d1b53229b4?w=400&h=300&fit=crop' },
      { id: 15, name: 'Razer BlackWidow V4', cat: 'Aksessuarlar', price: 2100000, desc: 'Mexanik klaviatura, RGB, Green Switch', img: 'https://images.unsplash.com/photo-1595225476474-87563907a212?w=400&h=300&fit=crop' },
      { id: 16, name: 'Logitech G PRO X', cat: 'Aksessuarlar', price: 1800000, desc: 'TKL formatli mexanik klaviatura, GX Blue', img: 'https://images.unsplash.com/photo-1555680202-c86f0e12f086?w=400&h=300&fit=crop' }
    ];
    newItems.forEach(ni => {
        if (!products.find(p => p.id === ni.id)) {
            products.push(ni);
            if (nextProdId <= ni.id) nextProdId = ni.id + 1;
        }
    });
}

function saveData() {
    try {
        localStorage.setItem('techstore_data_v1', JSON.stringify({
            products, orders, allUsers, nextUserId, activities, reviews, nextProdId, favorites, currentUserEmail: currentUser ? currentUser.email : null
        }));
    } catch(e) { console.error("Error saving data", e); }
}

loadData();
setInterval(saveData, 1000);
window.addEventListener('beforeunload', saveData);



// ===== FORMAT =====
let activeCurrency = 'UZS';
const RATES = { UZS: 1, USD: 12850, RUB: 142 };

function fmtPrice(p) { 
    if (activeCurrency === 'USD') {
        const usdVal = (p / RATES.USD).toFixed(2);
        return '$' + usdVal.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }
    if (activeCurrency === 'RUB') {
        const rubVal = (p / RATES.RUB).toFixed(2);
        return rubVal.replace(/\B(?=(\d{3})+(?!\d))/g, ' ') + ' ₽';
    }
    return p.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ') + ' so\'m'; 
}

function changeCurrency(val) {
    activeCurrency = val;
    renderProducts();
    if (activePanel === 'favorites') renderFavorites();
    if (activePanel === 'orders') renderOrders();
    if (activePanel === 'productDetail') showProductDetails(currentDetailProductId);
    updateCartBadge();
    if (document.getElementById('cartSidebar').classList.contains('open')) renderCart();
    showToast(`Valyuta o'zgartirildi: ${val}`);
}



// ===== RENDER =====
function renderCategories() {
  const c = document.getElementById('categories');
  c.innerHTML = CATEGORIES.map(cat => `<button class="cat-btn${cat === activeCat ? ' active' : ''}" onclick="filterCat('${cat}')">${cat}</button>`).join('');
}
function filterCat(cat) { activeCat = cat; renderCategories(); renderProducts(); }

function renderProducts() {
  const g = document.getElementById('productsGrid');
  const search = document.getElementById('searchInput').value.toLowerCase();
  const sort = document.getElementById('sortFilter').value;
  let filtered = products.filter(p => {
    const matchCat = activeCat === 'Barchasi' || p.cat === activeCat;
    const matchSearch = p.name.toLowerCase().includes(search) || p.desc.toLowerCase().includes(search);
    return matchCat && matchSearch;
  });
  if (sort === 'low') filtered.sort((a, b) => a.price - b.price);
  else if (sort === 'high') filtered.sort((a, b) => b.price - a.price);
  if (!filtered.length) { g.innerHTML = '<div style="grid-column:1/-1;text-align:center;padding:3rem;color:var(--text2)"><p style="font-size:3rem;margin-bottom:1rem">🔍</p><p>Mahsulot topilmadi</p></div>'; return; }
  g.innerHTML = filtered.map((p, i) => {
    const isFav = favorites.includes(p.id);
    return `
    <div class="product-card fade-in" style="animation-delay:${i * 0.05}s" onclick="showProductDetails(${p.id})">
      <div class="fav-btn${isFav ? ' active' : ''}" onclick="event.stopPropagation(); toggleFavorite(${p.id})">❤️</div>
      <div class="product-img"><img src="${p.img}" alt="${p.name}" onerror="this.parentElement.innerHTML='🖥️'"></div>
      <div class="product-info">
        <h3>${p.name}</h3>
        <p class="desc">${p.desc}</p>
        <div class="price" style="display:flex; flex-direction:column; gap:0.3rem; margin-bottom: 0.8rem;">
          <div class="new-price">${fmtPrice(p.price)}</div>
          <div style="font-size:0.8rem; color:var(--primary); background:rgba(108,92,231,0.1); padding:0.2rem 0.5rem; border-radius:4px; font-weight:600; width:fit-content;">
            Nasiya: 10 oyga ${fmtPrice(Math.round((p.price * 0.7) / 10))} dan (30% oldindan to'lov qilinganda)
          </div>
        </div>
        <button class="buy-btn" onclick="event.stopPropagation(); addToCart(${p.id})">🛒 Sotib olish</button>
      </div>
    </div>`;
  }).join('');
}

// ===== CART =====
function addToCart(id) {
  if (!currentUser) { showToast("Oldin tizimga kiring yoki ro'yxatdan o'ting!"); openAuthModal(); return; }
  const p = products.find(x => x.id === id); if (!p) return;
  const existing = cart.find(x => x.id === id);
  if (existing) {
    existing.qty++;
  } else {
    cart.push({ ...p, price: p.price, originalPrice: p.price, qty: 1 });
  }
  updateCartBadge(); showToast(`${p.name} savatga qo'shildi ✓`);
}
function updateCartBadge() {
  const b = document.getElementById('cartBadge');
  const total = cart.reduce((s, i) => s + i.qty, 0);
  b.textContent = total; b.style.display = total ? 'flex' : 'none';
}
function renderCart() {
  const c = document.getElementById('cartItems');
  if (!cart.length) { c.innerHTML = '<div class="empty-cart"><div class="icon">🛒</div><p>Savat bo\'sh</p></div>'; document.getElementById('cartTotalAmount').textContent = '0 so\'m'; return; }
  c.innerHTML = cart.map(i => `
    <div class="cart-item">
      <img src="${i.img}" alt="${i.name}" onerror="this.src=''">
      <div class="cart-item-info">
        <h4>${i.name}</h4>
        <div class="old-price">${fmtPrice(i.originalPrice || i.price)}</div>
        <div class="price">${fmtPrice(i.price)}</div>
      </div>
      <div class="cart-item-qty">
        <button onclick="changeQty(${i.id},-1)">−</button><span>${i.qty}</span><button onclick="changeQty(${i.id},1)">+</button>
      </div>
      <button class="remove-item" onclick="removeFromCart(${i.id})">✕</button>
    </div>`).join('');
  document.getElementById('cartTotalAmount').textContent = fmtPrice(cart.reduce((s, i) => s + i.price * i.qty, 0));
}
function changeQty(id, d) { const i = cart.find(x => x.id === id); if (!i) return; i.qty += d; if (i.qty <= 0) cart = cart.filter(x => x.id !== id); updateCartBadge(); renderCart(); }
function removeFromCart(id) { cart = cart.filter(x => x.id !== id); updateCartBadge(); renderCart(); }
function toggleCart() { document.getElementById('cartOverlay').classList.toggle('open'); document.getElementById('cartSidebar').classList.toggle('open'); renderCart(); }
function checkout() {
  if (!currentUser) { toggleCart(); showToast("Oldin tizimga kiring yoki ro'yxatdan o'ting!"); openAuthModal(); return; }
  if (!cart.length) return;
  toggleCart();
  document.getElementById('checkoutForm').reset();
  const dpGroup = document.getElementById('downpaymentGroup');
  if(dpGroup) dpGroup.style.display = 'none';
  updateCheckoutSummary();
  openModal('checkoutModal');
}

function toggleDownpaymentInput() {
  const pType = document.getElementById('checkoutPaymentType').value;
  const dpGroup = document.getElementById('downpaymentGroup');
  if(dpGroup) {
      if (pType === 'installment') {
        dpGroup.style.display = 'block';
      } else {
        dpGroup.style.display = 'none';
      }
  }
}

function updateCheckoutSummary() {
  const summary = document.getElementById('checkoutSummary');
  if(!summary) return;
  const paymentTypeSelect = document.getElementById('checkoutPaymentType');
  const paymentType = paymentTypeSelect ? paymentTypeSelect.value : 'full';
  
  const total = cart.reduce((s, i) => s + i.price * i.qty, 0);
  let months = 0;
  let oylik = 0;
  let foiz = 0;
  let oldindan = 0;
  let qoldiq = 0;
  
  let validInstallment = false;
  const downpaymentError = document.getElementById('downpaymentError');
  if(downpaymentError) downpaymentError.style.display = 'none';
  
  if(paymentType === 'installment') {
    oldindan = Number(document.getElementById('installmentDownpayment').value) || 0;
    foiz = (oldindan / total) * 100;
    
    if (foiz >= 20) {
        validInstallment = true;
        if(foiz >= 50) { months = 12; }
        else if (foiz >= 40) { months = 9; }
        else if (foiz >= 30) { months = 6; }
        else if (foiz >= 20) { months = 3; }
        
        qoldiq = total - oldindan;
        oylik = Math.round(qoldiq / months);
    } else if (oldindan > 0) {
        if(downpaymentError) {
          downpaymentError.textContent = `Boshlang'ich to'lov kamida ${fmtPrice(total * 0.2)} bo'lishi kerak!`;
          downpaymentError.style.display = 'block';
        }
    }
  }

  let html = `
    <div class="section-label">🧾 Buyurtma xulosasi</div>
    <div class="summary-items">
      ${cart.map(i => `<div class="summary-item"><span>${i.name} × ${i.qty}</span><span>${fmtPrice(i.price * i.qty)}</span></div>`).join('')}
    </div>
    <div class="summary-total"><span>Jami lmahsulotlar qiymati:</span><span>${fmtPrice(total)}</span></div>
  `;
  
  if(paymentType === 'installment') {
    if (validInstallment) {
        html += `
          <div style="margin-top:0.8rem; background:rgba(108,92,231,0.08); padding:0.8rem; border-radius:8px; border:1px dashed var(--primary);">
            <div style="display:flex; justify-content:space-between; margin-bottom:0.4rem;">
              <span style="color:var(--text2);">Boshlang'ich to'lov (${foiz.toFixed(1)}%):</span><strong>${fmtPrice(oldindan)}</strong>
            </div>
            <div style="display:flex; justify-content:space-between; margin-bottom:0.4rem;">
              <span style="color:var(--text2);">Muddatli to'lov (${months} oy):</span><strong>Qoldiq: ${fmtPrice(qoldiq)}</strong>
            </div>
            <div style="display:flex; justify-content:space-between;">
              <span style="color:var(--text2);">Oylik to'lov:</span><strong style="color:var(--primary); font-size:1.1rem;">${fmtPrice(oylik)} / oy</strong>
            </div>
          </div>
        `;
    } else {
        html += `
          <div style="margin-top:0.8rem; background:rgba(231,76,60,0.08); padding:0.8rem; border-radius:8px; border:1px dashed var(--danger); text-align:center;">
             <span style="color:var(--danger); font-size:0.9rem;">Nasiya shartlarini ko'rish uchun kamida 20% to'lov kiriting</span>
          </div>
        `;
    }
  } else {
    html += `
      <div style="margin-top:0.8rem; display:flex; justify-content:space-between;">
        <span style="color:var(--text2);">Jami to'lov:</span><strong style="color:var(--primary); font-size:1.1rem;">${fmtPrice(total)}</strong>
      </div>
    `;
  }
  
  summary.innerHTML = html;
}

function formatCardNumber(input) {
  let v = input.value.replace(/\D/g, '').substring(0, 16);
  let formatted = '';
  for (let i = 0; i < v.length; i++) {
    if (i > 0 && i % 4 === 0) formatted += ' ';
    formatted += v[i];
  }
  input.value = formatted;
}

function formatExpiry(input) {
  let v = input.value.replace(/\D/g, '').substring(0, 4);
  if (v.length >= 2) v = v.substring(0, 2) + '/' + v.substring(2);
  input.value = v;
}

function processCheckout() {
  const cardNum = document.getElementById('cardNumber').value.replace(/\s/g, '');
  const phone = document.getElementById('checkoutPhone').value;
  const city = document.getElementById('checkoutCity').value;
  const address = document.getElementById('checkoutAddress').value;
  const pTypeSelect = document.getElementById('checkoutPaymentType');
  const paymentType = pTypeSelect ? pTypeSelect.value : 'full';

  if (cardNum.length < 16) { showToast('Karta raqamini to\'liq kiriting!'); return; }
  if (!phone || !city || !address) { showToast('Barcha maydonlarni to\'ldiring!'); return; }

  const oid = '#ORD-' + String(orders.length + 1).padStart(3, '0');
  const total = cart.reduce((s, i) => s + i.price * i.qty, 0);

  let pTypeLabel = '';
  if(paymentType === 'installment') {
      let oldindan = Number(document.getElementById('installmentDownpayment').value) || 0;
      let foiz = (oldindan / total) * 100;
      if (foiz < 20) {
          showToast("Boshlang'ich to'lov yetarli emas!");
          return;
      }
      let mos = 3;
      if(foiz >= 50) mos = 12;
      else if(foiz >= 40) mos = 9;
      else if(foiz >= 30) mos = 6;
      
      const qoldiq = total - oldindan;
      const perMonth = Math.round(qoldiq / mos);
      
      pTypeLabel = ` <br><span style="display:inline-block; margin-top:4px; font-size:0.8rem; padding:2px 8px; background:rgba(108,92,231,0.1); color:var(--primary); border-radius:4px; font-weight:600;">Oldindan: ${fmtPrice(oldindan)} (${foiz.toFixed(1)}%), Nasiya: ${mos} oy (${fmtPrice(perMonth)}/oy)</span>`;
  } else {
      pTypeLabel = ` <br><span style="display:inline-block; margin-top:4px; font-size:0.8rem; padding:2px 8px; background:rgba(46,204,113,0.1); color:#2ecc71; border-radius:4px; font-weight:600;">To'liq to'lov</span>`;
  }

  orders.push({
    id: oid,
    items: cart.map(i => `${i.name} x${i.qty}`).join(', ') + pTypeLabel,
    total: total,
    status: 'pending',
    date: new Date().toISOString().split('T')[0],
    phone: phone,
    city: city,
    address: address,
    card: '****' + cardNum.slice(-4),
    userEmail: currentUser.email
  });
  logActivity(`Yangi buyurtma: ${currentUser.name} (${currentUser.email}) - $${fmtPrice(total)} qiymatida`);
  cart = [];
  updateCartBadge();
  closeModal('checkoutModal');
  showToast(`✅ Buyurtma ${oid} muvaffaqiyatli qabul qilindi!`);
}



// ===== NAVIGATION =====
function showPanel(panel) {
  activePanel = panel;
  document.querySelectorAll('.panel').forEach(p => p.classList.remove('active'));
  document.getElementById(panel + 'Panel').classList.add('active');
  document.querySelectorAll('.nav-links button').forEach(b => b.classList.remove('active'));
  document.querySelector(`.nav-links button[onclick="showPanel('${panel}')"]`)?.classList.add('active');

  if (panel === 'admin') {
    renderAdminProducts();
    renderAdminUsers();
  }
  if (panel === 'orders') renderOrders();
  if (panel === 'favorites') renderFavorites();
  closeMobileNav();
}

function switchAdminTab(tab) {
  document.getElementById('adminTabProdBtn').classList.remove('active');
  document.getElementById('adminTabUsersBtn').classList.remove('active');
  const adminTabReviewsBtn = document.getElementById('adminTabReviewsBtn');
  if(adminTabReviewsBtn) adminTabReviewsBtn.classList.remove('active');

  document.getElementById('adminProductsSection').style.display = 'none';
  document.getElementById('adminUsersSection').style.display = 'none';
  const adminReviewsSection = document.getElementById('adminReviewsSection');
  if(adminReviewsSection) adminReviewsSection.style.display = 'none';

  if (tab === 'products') {
    document.getElementById('adminTabProdBtn').classList.add('active');
    document.getElementById('adminProductsSection').style.display = 'block';
  } else if (tab === 'users') {
    document.getElementById('adminTabUsersBtn').classList.add('active');
    document.getElementById('adminUsersSection').style.display = 'block';
    renderAdminUsers();
  } else if (tab === 'reviews') {
    if(adminTabReviewsBtn) adminTabReviewsBtn.classList.add('active');
    if(adminReviewsSection) adminReviewsSection.style.display = 'block';
    renderAdminReviews();
  }
}

function closeMobileNav() { document.getElementById('mobileNav').classList.remove('open'); }
function toggleMobileNav() { document.getElementById('mobileNav').classList.toggle('open'); }

// ===== ADMIN =====
function renderAdminProducts() {
  document.getElementById('adminTable').innerHTML = products.map(p => `<tr>
    <td><img src="${p.img}" onerror="this.src=''"></td><td>${p.name}</td><td>${p.cat}</td><td>${fmtPrice(p.price)}</td>
    <td><button class="action-btn edit-btn" onclick="openEditProduct(${p.id})">✏️</button><button class="action-btn delete-btn" onclick="deleteProduct(${p.id})">🗑️</button></td>
  </tr>`).join('');
}
function openAddProduct() { 
  editingProduct = null; 
  document.getElementById('modalTitle').textContent = 'Yangi mahsulot'; 
  document.getElementById('prodForm').reset(); 
  document.getElementById('prodImgBase64').value = '';
  document.getElementById('prodImgPreview').style.display = 'none';
  document.getElementById('prodImgPreview').querySelector('img').src = '';
  openModal('productModal'); 
}
function openEditProduct(id) {
  const p = products.find(x => x.id === id); if (!p) return; editingProduct = p;
  document.getElementById('modalTitle').textContent = 'Mahsulotni tahrirlash';
  document.getElementById('prodName').value = p.name; document.getElementById('prodCat').value = p.cat;
  document.getElementById('prodPrice').value = p.price; document.getElementById('prodDesc').value = p.desc;
  
  const base64Input = document.getElementById('prodImgBase64');
  const previewDiv = document.getElementById('prodImgPreview');
  const previewImg = previewDiv.querySelector('img');
  
  if (p.img) {
      base64Input.value = p.img;
      previewImg.src = p.img;
      previewDiv.style.display = 'block';
  } else {
      base64Input.value = '';
      previewImg.src = '';
      previewDiv.style.display = 'none';
  }
  document.getElementById('prodImgFile').value = '';
  openModal('productModal');
}
function saveProduct() {
  const imgSrc = document.getElementById('prodImgBase64').value;
  const data = { name: document.getElementById('prodName').value, cat: document.getElementById('prodCat').value, price: Number(document.getElementById('prodPrice').value), desc: document.getElementById('prodDesc').value, img: imgSrc };
  if (!data.name || !data.price) { showToast('Iltimos, ma\'lumotlarni to\'ldiring'); return; }
  if (editingProduct) { Object.assign(editingProduct, data); } else { products.push({ id: nextProdId++, ...data }); }
  closeModal('productModal'); renderAdminProducts(); renderProducts(); showToast(editingProduct ? 'Mahsulot tahrirlandi ✓' : 'Yangi mahsulot qo\'shildi ✓');
}
function previewProdImage(input) {
    const file = input.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const base64Str = e.target.result;
            document.getElementById('prodImgBase64').value = base64Str;
            const previewDiv = document.getElementById('prodImgPreview');
            const previewImg = previewDiv.querySelector('img');
            previewImg.src = base64Str;
            previewDiv.style.display = 'block';
        };
        reader.readAsDataURL(file);
    }
}

// ===== ORDERS =====
function renderOrders() {
  const list = document.getElementById('ordersList');
  if (!currentUser) {
    list.innerHTML = '<div style="text-align:center;padding:3rem;color:var(--text2)"><p>Buyurtmalarni ko\'rish uchun tizimga kiring</p></div>';
    return;
  }
  const userOrders = orders.filter(o => o.userEmail === currentUser.email);
  if (!userOrders.length) {
    list.innerHTML = '<div style="text-align:center;padding:3rem;color:var(--text2)"><p>Hozircha buyurtmalar yo\'q</p></div>';
    return;
  }
  list.innerHTML = userOrders.map(o => `
    <div class="order-card"><div class="order-head"><span class="order-id">${o.id}</span><span class="order-status status-${o.status}">${o.status === 'pending' ? '⏳ Kutilmoqda' : '✅ Bajarildi'}</span></div>
    <div class="items"><strong>Mahsulotlar:</strong> ${o.items}</div>
    <div style="display:flex;justify-content:space-between;margin-top:.8rem"><span style="color:var(--text2)">${o.date}</span><span style="color:var(--accent);font-weight:700">${fmtPrice(o.total)}</span></div></div>`).join('');
}



// ===== AUTH =====
function openAuthModal() {
  isLoginMode = true;
  updateAuthUI();
  document.getElementById('authForm').reset();
  openModal('authModal');
}

function toggleAuthMode() {
  isLoginMode = !isLoginMode;
  updateAuthUI();
}

function updateAuthUI() {
  const title = document.getElementById('authModalTitle');
  const subtitle = document.getElementById('authModalSubtitle');
  const nameGroup = document.getElementById('regNameGroup');
  const nameInput = document.getElementById('authName');
  const submitBtn = document.getElementById('authSubmitBtn');
  const switchText = document.getElementById('authSwitchText');
  const switchBtn = document.getElementById('authSwitchBtn');

  if (isLoginMode) {
      title.textContent = 'Tizimga kirish';
      subtitle.textContent = "Xarid qilish uchun tizimga kiring";
      nameGroup.style.display = 'none';
      nameInput.required = false;
      submitBtn.textContent = 'Kirish';
      switchText.textContent = "Hali o'z akkauntingiz yo'qmi?";
      switchBtn.textContent = "Ro'yxatdan o'tish";
  } else {
      title.textContent = "Ro'yxatdan o'tish";
      subtitle.textContent = "Yangi akkaunt yarating";
      nameGroup.style.display = 'block';
      nameInput.required = true;
      submitBtn.textContent = "Ro'yxatdan o'tish";
      switchText.textContent = "Akkauntingiz bormi?";
      switchBtn.textContent = "Kirish";
  }
}

function processAuth() {
  const email = document.getElementById('authEmail').value;
  const password = document.getElementById('authPassword').value;

  if (isLoginMode) {
      if (email === 'admin1@gmail.com' && password !== 'admin1') {
          showToast("Xato parol!");
          return;
      }
      if (email === 'admin1@gmail.com') {
          currentUser = { id: 'admin', name: 'Admin', email };
          showToast("Tizimga kirdingiz ✓");
          showPanel('admin');
      } else {
          let user = allUsers.find(u => u.email === email);
          if(!user) {
              const newId = 'M-' + String(nextUserId++).padStart(3, '0');
              user = { id: newId, name: email.split('@')[0], email };
              allUsers.push(user);
          }
          currentUser = user;
          logActivity(`Foydalanuvchi tizimga kirdi: ${user.name} (${user.email})`);
          showToast("Tizimga kirdingiz ✓");
      }
  } else {
      const name = document.getElementById('authName').value;
      if (email === 'admin1@gmail.com') {
          showToast("Bu email tizimda band!");
          return;
      }
      const existing = allUsers.find(u => u.email === email);
      if(existing) {
          showToast("Bu email avval ro'yxatdan o'tgan, iltimos kiring!");
          return;
      }
      const newId = 'M-' + String(nextUserId++).padStart(3, '0');
      const newUser = { id: newId, name, email };
      allUsers.push(newUser);
      currentUser = newUser;
      logActivity(`Yangi foydalanuvchi ro'yxatdan o'tdi: ${name} (${email}) - ID: ${newId}`);
      showToast("Muvaffaqiyatli ro'yxatdan o'tdingiz ✓");
  }
  closeModal('authModal');
  updateNavAuth();
}

function updateNavAuth() {
  const authBtn = document.getElementById('navAuthBtn');
  const mobileAuthBtn = document.getElementById('mobileAuthBtn');
  const navAdminBtn = document.getElementById('navAdminBtn');
  const mobileAdminBtn = document.getElementById('mobileAdminBtn');

  if (currentUser) {
      const initial = currentUser.name ? currentUser.name.charAt(0).toUpperCase() : '?';
      if(authBtn) { authBtn.textContent = '👤 ' + initial; authBtn.onclick = openProfileModal; }
      if(mobileAuthBtn) { mobileAuthBtn.textContent = '👤 ' + initial; mobileAuthBtn.onclick = openProfileModal; }
      
      if (currentUser.email === 'admin1@gmail.com') {
          if (navAdminBtn) navAdminBtn.style.display = 'inline-block';
          if (mobileAdminBtn) mobileAdminBtn.style.display = 'block';
      } else {
          if (navAdminBtn) navAdminBtn.style.display = 'none';
          if (mobileAdminBtn) mobileAdminBtn.style.display = 'none';
      }
  } else {
      if(authBtn) { authBtn.textContent = 'Kirish'; authBtn.onclick = openAuthModal; }
      if(mobileAuthBtn) { mobileAuthBtn.textContent = '👤 Kirish'; mobileAuthBtn.onclick = openAuthModal; }
      if (navAdminBtn) navAdminBtn.style.display = 'none';
      if (mobileAdminBtn) mobileAdminBtn.style.display = 'none';
      if (activePanel === 'admin') showPanel('shop');
  }
}

function openProfileModal() {
    closeMobileNav();
    document.getElementById('profileNameDisplay').textContent = currentUser.name;
    document.getElementById('profileEmailDisplay').textContent = currentUser.email;
    const avatarUrl = currentUser.img || `https://ui-avatars.com/api/?name=${encodeURIComponent(currentUser.name)}&background=random`;
    document.getElementById('profileAvatar').src = avatarUrl;
    document.getElementById('profNameInput').value = currentUser.name;
    switchProfTab('info');
    openModal('profileModal');
}

function switchProfTab(tab) {
    document.getElementById('profTabInfoBtn').classList.remove('active');
    document.getElementById('profTabOrdersBtn').classList.remove('active');
    document.getElementById('profInfoSection').style.display = 'none';
    document.getElementById('profOrdersSection').style.display = 'none';
    if (tab === 'info') {
        document.getElementById('profTabInfoBtn').classList.add('active');
        document.getElementById('profInfoSection').style.display = 'block';
    } else {
        document.getElementById('profTabOrdersBtn').classList.add('active');
        document.getElementById('profOrdersSection').style.display = 'block';
        renderUserOrders();
    }
}

function saveProfile() {
    const name = document.getElementById('profNameInput').value;
    if(!name) { showToast("Ismni kiriting"); return; }
    currentUser.name = name;
    updateNavAuth();
    openProfileModal();
    showToast("Profil tahrirlandi ✓");
}

function renderUserOrders() {
    const c = document.getElementById('userOrdersList');
    const myOrders = orders.filter(o => o.userEmail === currentUser.email);
    if (!myOrders.length) {
        c.innerHTML = '<div style="text-align:center; padding: 2rem; color: var(--text2);">Hali xaridlar mavjud emas</div>';
        return;
    }
    c.innerHTML = myOrders.map(o => {
        const isReviewed = reviews.some(r => r.orderId === o.id);
        const reviewBtn = (o.status === 'done' && !isReviewed) 
            ? `<button class="buy-btn" style="margin-top:0.8rem;font-size:0.85rem;padding:0.5rem;background:linear-gradient(135deg, #f39c12, #e67e22);" onclick="openReviewModal('${o.id}')">⭐ Izoh qoldirish</button>`
            : (isReviewed ? `<div style="margin-top:0.8rem;font-size:0.85rem;color:#e67e22;font-weight:600">⭐ Izoh qoldirildi</div>` : '');
        return `
        <div class="order-card" style="margin-bottom: 1rem;">
            <div class="order-head">
                <span class="order-id">${o.id}</span>
                <span class="order-status status-${o.status}">${o.status === 'pending' ? '⏳ Kutilmoqda' : '✅ Bajarildi'}</span>
            </div>
            <div class="items" style="font-size:0.85rem;"><strong>Mahsulotlar:</strong> ${o.items}</div>
            <div style="display:flex;justify-content:space-between;margin-top:.5rem; font-size:0.85rem;">
                <span style="color:var(--text2)">${o.date}</span>
                <span style="color:var(--accent);font-weight:700">${fmtPrice(o.total)}</span>
            </div>
            ${reviewBtn}
        </div>
        `;
    }).join('');
}

function logoutUser() {
  if(confirm("Tizimdan chiqishni xohlaysizmi?")) {
      closeModal('profileModal');
      currentUser = null;
      updateNavAuth();
      showToast("Tizimdan chiqdingiz");
  }
}

function logActivity(text) {
    const time = new Date().toLocaleTimeString('uz-UZ', { hour12: false });
    activities.unshift({ time, text });
    if(activities.length > 50) activities.pop();
    if(activePanel === 'admin') renderAdminUsers();
}

function renderAdminUsers() {
    const uList = document.getElementById('adminUsersTable');
    if (uList) {
        uList.innerHTML = allUsers.map(u => `<tr><td><span style="background:var(--primary);color:#fff;padding:0.2rem 0.5rem;border-radius:6px;font-size:0.8rem;font-family:monospace">${u.id}</span></td><td>${u.name}</td><td>${u.email}</td></tr>`).join('');
    }
    
    const aList = document.getElementById('adminLogList');
    if (aList) {
        if(!activities.length) {
            aList.innerHTML = `<div style="color:var(--text2);text-align:center;padding:1rem">Hozircha harakatlar yo'q</div>`;
        } else {
            aList.innerHTML = activities.map(a => `<div style="padding: 0.8rem; border-bottom: 1px solid var(--border); font-size: 0.85rem;"><span style="color:var(--text2);margin-right:0.5rem">[${a.time}]</span> ${a.text}</div>`).join('');
        }
    }
}

// ===== REVIEWS =====
let currentReviewOrderId = null;
let currentReviewStars = 5;

// Orders Review Modal
function openReviewModal(orderId) {
    currentReviewOrderId = orderId;
    currentReviewStars = 5;
    const reviewText = document.getElementById('reviewText');
    if(reviewText) reviewText.value = '';
    updateReviewStarsUI();
    openModal('reviewModal');
}

function updateReviewStarsUI() {
    for(let i=1; i<=5; i++) {
        const star = document.getElementById('star-'+i);
        if(!star) continue;
        if(i <= currentReviewStars) {
            star.style.color = '#f39c12';
            star.style.textShadow = '0 0 10px rgba(243, 156, 18, 0.4)';
        } else {
            star.style.color = 'var(--text2)';
            star.style.textShadow = 'none';
        }
    }
}

function setReviewStars(val) {
    currentReviewStars = val;
    updateReviewStarsUI();
}

function submitReview() {
    const text = document.getElementById('reviewText').value;
    if(!text.trim()) { showToast("Iltimos, izoh yozing!"); return; }
    
    reviews.unshift({
        id: 'REV-' + Date.now(),
        orderId: currentReviewOrderId,
        user: currentUser.name,
        userEmail: currentUser.email,
        text: text,
        stars: currentReviewStars,
        date: new Date().toISOString().split('T')[0]
    });
    
    logActivity(`Buyurtmaga izoh qoldirildi: ${currentUser.name} (${currentReviewStars} yulduz)`);
    showToast("Izohingiz qabul qilindi! Rahmat.");
    closeModal('reviewModal');
    
    if(document.getElementById('profileModal').classList.contains('open')) {
        renderUserOrders();
    }
}

// Product Details & Reviews
let currentDetailProductId = null;
let currentPdReviewStars = 5;

function showProductDetails(id) {
    const p = products.find(x => x.id === id);
    if (!p) return;
    currentDetailProductId = id;
    
    showPanel('productDetail');

    document.getElementById('pdLayout').innerHTML = `
        <div class="pd-img-box">
            <img src="${p.img}" onerror="this.style.display='none'">
        </div>
        <div class="pd-info-box">
            <span class="pd-cat">${p.cat}</span>
            <h2>${p.name}</h2>
            <div class="price" style="margin-bottom: 1rem;">
                <div class="pd-price" style="margin-bottom: 0.4rem;">${fmtPrice(p.price)}</div>
                <div style="display: inline-block; padding: 0.5rem 1rem; background: rgba(108,92,231,0.1); color: var(--primary); border-radius: 8px; font-weight: 600; font-size: 1rem; border: 1px solid rgba(108,92,231,0.2);">
                    💸 Muddatli to'lov (10 oy): ${fmtPrice(Math.round((p.price * 0.7) / 10))} / oy (30% oldindan)
                </div>
            </div>
            <p class="pd-desc" style="white-space: pre-wrap;">${p.desc}</p>
            <div style="margin-bottom: 2rem;">
                <button class="buy-btn" style="padding: 1rem; font-size: 1rem;" onclick="addToCart(${p.id})">🛒 Savatga qo'shish</button>
            </div>
            <div style="color: var(--text2); font-size: 0.9rem; border-top: 1px dashed var(--border); padding-top: 1.5rem;">
                <p style="margin-bottom: 0.5rem;">✅ Sifatli mahsulot kafolati</p>
                <p style="margin-bottom: 0.5rem;">🚚 O'zbekiston bo'ylab yetkazib berish mavjud</p>
                <p>🛡️ Xavfsiz xarid</p>
            </div>
        </div>
    `;

    setPdReviewStars(5);
    const pText = document.getElementById('pdReviewText');
    if(pText) pText.value = '';
    renderPdReviews();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function setPdReviewStars(val) {
    currentPdReviewStars = val;
    for(let i=1; i<=5; i++) {
        const star = document.getElementById('pd-star-'+i);
        if(!star) continue;
        if(i <= currentPdReviewStars) {
            star.style.color = '#f39c12';
            star.style.textShadow = '0 0 10px rgba(243, 156, 18, 0.4)';
        } else {
            star.style.color = 'var(--text2)';
            star.style.textShadow = 'none';
        }
    }
}

function submitPdReview() {
    if(!currentUser) {
        showToast("Izoh qoldirish uchun tizimga kiring!");
        return openAuthModal();
    }
    const text = document.getElementById('pdReviewText').value;
    if(!text.trim()) { showToast("Iltimos, izoh yozing!"); return; }
    
    const p = products.find(x => x.id === currentDetailProductId);
    reviews.unshift({
        id: 'REV-PD-' + Date.now(),
        productId: currentDetailProductId,
        productName: p ? p.name : 'Noma\'lum mahsulot',
        user: currentUser.name,
        userEmail: currentUser.email,
        text: text,
        stars: currentPdReviewStars,
        date: new Date().toISOString().split('T')[0]
    });
    
    logActivity(`Mahsulotga izoh qoldirdi: ${currentUser.name} -> ${p.name}`);
    showToast("Izohingiz qabul qilindi! Rahmat.");
    document.getElementById('pdReviewText').value = '';
    setPdReviewStars(5);
    renderPdReviews();
}

function renderPdReviews() {
    const rList = document.getElementById('pdReviewsList');
    if(!rList) return;
    const pdRevs = reviews.filter(r => r.productId === currentDetailProductId);
    
    if(!pdRevs.length) {
        rList.innerHTML = '<div style="color:var(--text2); padding: 1rem 0;">Hozircha izohlar yo\'q. Birinchi bo\'lib izoh qoldiring!</div>';
        return;
    }
    
    rList.innerHTML = pdRevs.map(r => `
        <div style="background: var(--card); border: 1px solid var(--border); border-radius: 12px; padding: 1.2rem; margin-bottom: 1rem;">
            <div style="display:flex; justify-content:space-between; margin-bottom:0.5rem;">
                <strong style="font-size: 1rem;">${r.user}</strong>
                <span style="color:#f39c12; font-size: 1.1rem;">${'★'.repeat(r.stars)}${'☆'.repeat(5-r.stars)}</span>
            </div>
            <p style="font-size:0.95rem; color:var(--text); margin-bottom:0.5rem;">${r.text}</p>
            <div style="font-size:0.8rem; color:var(--text2);">Sana: ${r.date}</div>
        </div>
    `).join('');
}


function renderAdminReviews() {
    const rList = document.getElementById('adminReviewsList');
    if(!rList) return;
    if(!reviews.length) {
        rList.innerHTML = '<div style="text-align:center; padding: 2rem; color: var(--text2);">Hozircha izohlar yo\'q</div>';
        return;
    }
    rList.innerHTML = reviews.map(r => {
        let referenceStr = r.productName ? `Mahsulot: <strong>${r.productName}</strong>` : `Buyurtma: <strong>${r.orderId}</strong>`;
        return `
        <div class="order-card" style="margin-bottom:1rem; padding: 1.2rem; border-left: 4px solid #f39c12;">
            <div style="display:flex; justify-content:space-between; margin-bottom:0.5rem;">
                <strong style="font-size: 1.05rem;">${r.user} <span style="font-weight: normal; font-size: 0.85rem; color: var(--text2);">(${r.userEmail})</span></strong>
                <span style="color:#f39c12; font-size: 1.2rem;">${'★'.repeat(r.stars)}${'☆'.repeat(5-r.stars)}</span>
            </div>
            <p style="font-size:0.95rem; color:var(--text); margin-bottom:0.8rem; line-height: 1.5; background: rgba(108,92,231,0.03); padding: 0.8rem; border-radius: 8px;">"${r.text}"</p>
            <div style="font-size:0.8rem; color:var(--text2); display: flex; justify-content: space-between;">
                <span>Belgilangan xarid: ${referenceStr}</span>
                <span>Sana: ${r.date}</span>
            </div>
        </div>
        `;
    }).join('');
}


// ===== FAVORITES =====
function toggleFavorite(id) {
    if (!currentUser) { showToast("Sevimlilarga qo'shish uchun tizimga kiring!"); openAuthModal(); return; }
    const idx = favorites.indexOf(id);
    if (idx === -1) {
        favorites.push(id);
        showToast("Sevimlilarga qo'shildi ❤️");
    } else {
        favorites.splice(idx, 1);
        showToast("Sevimlilardan olib tashlandi");
    }
    renderProducts();
    if (activePanel === 'favorites') renderFavorites();
}

function renderFavorites() {
    const g = document.getElementById('favoritesGrid');
    if (!favorites.length) {
        g.innerHTML = '<div style="grid-column:1/-1;text-align:center;padding:5rem;color:var(--text2)"><p style="font-size:4rem;margin-bottom:1rem">❤️</p><p>Sevimlilar ro\'yxati bo\'sh</p><button class="buy-btn" style="width:auto;margin-top:1.5rem;padding:0.8rem 2rem" onclick="showPanel(\'shop\')">Xarid qilish</button></div>';
        return;
    }
    const favProds = products.filter(p => favorites.includes(p.id));
    g.innerHTML = favProds.map((p, i) => {
        return `
        <div class="product-card fade-in" style="animation-delay:${i * 0.05}s" onclick="showProductDetails(${p.id})">
          <div class="fav-btn active" onclick="event.stopPropagation(); toggleFavorite(${p.id})">❤️</div>
          <div class="product-img"><img src="${p.img}" alt="${p.name}" onerror="this.parentElement.innerHTML='🖥️'"></div>
          <div class="product-info">
            <h3>${p.name}</h3>
            <p class="desc">${p.desc}</p>
            <div class="price" style="display:flex; flex-direction:column; gap:0.3rem; margin-bottom: 0.8rem;">
              <div class="new-price">${fmtPrice(p.price)}</div>
              <div style="font-size:0.8rem; color:var(--primary); background:rgba(108,92,231,0.1); padding:0.2rem 0.5rem; border-radius:4px; font-weight:600; width:fit-content;">
                Nasiya: 12 oyga ${fmtPrice(Math.round(p.price / 12))} dan
              </div>
            </div>
            <button class="buy-btn" onclick="event.stopPropagation(); addToCart(${p.id})">🛒 Sotib olish</button>
          </div>
        </div>`;
    }).join('');
}

// ===== MODAL =====
function openModal(id) { document.getElementById(id).classList.add('open'); }
function closeModal(id) { document.getElementById(id).classList.remove('open'); }

// ===== PASSWORD TOGGLE =====
function togglePw(inputId, btn) {
    const input = document.getElementById(inputId);
    if (!input) return;
    if (input.type === 'password') {
        input.type = 'text';
        btn.textContent = '👁‍🗨';
        btn.classList.add('active');
        btn.title = 'Parolni yashirish';
    } else {
        input.type = 'password';
        btn.textContent = '👁';
        btn.classList.remove('active');
        btn.title = 'Parolni ko\'rsatish';
    }
    input.focus();
}

// ===== TOAST =====
function showToast(msg) { const t = document.getElementById('toast'); t.textContent = msg; t.classList.add('show'); setTimeout(() => t.classList.remove('show'), 2500); }

// ===== THEME TOGGLE =====
function toggleTheme() {
    const isDark = document.body.classList.toggle('dark-theme');
    localStorage.setItem('techstore_theme', isDark ? 'dark' : 'light');
    const btn = document.getElementById('themeToggle');
    if (btn) btn.textContent = isDark ? '☀️' : '🌙';
    showToast(isDark ? "Tungi rejim yoqildi 🌙" : "Kuzgi rejim yoqildi ☀️");
}

function initTheme() {
    const savedTheme = localStorage.getItem('techstore_theme');
    const btn = document.getElementById('themeToggle');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-theme');
        if (btn) btn.textContent = '☀️';
    } else {
        document.body.classList.remove('dark-theme');
        if (btn) btn.textContent = '🌙';
    }
}



// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
  renderCategories();
  renderProducts();
  updateCartBadge();
  document.getElementById('searchInput').addEventListener('input', renderProducts);
  document.getElementById('sortFilter').addEventListener('change', renderProducts);
  
  updateNavAuth();
  if (currentUser && currentUser.email === 'admin1@gmail.com') {
      showPanel('admin');
  }
  
  initTheme();
});
