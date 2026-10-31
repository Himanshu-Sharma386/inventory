"use strict";

const seedProducts = [
  { id: "P001", name: "Basmati Rice 5kg", quantity: 24, price: 650, image: "rice.jpg", category: "staples" },
  { id: "P002", name: "Sunflower Oil 1L", quantity: 40, price: 145, image: "cooking-oil.jpg", category: "staples" },
  { id: "P003", name: "Wheat Flour 10kg", quantity: 18, price: 420, image: "flour.jpg", category: "staples" },
  { id: "P004", name: "Sugar 1kg", quantity: 50, price: 48, image: "sugar.jpg", category: "staples" },
  { id: "P005", name: "Tea 500g", quantity: 30, price: 260, image: "tea-leaves.jpg", category: "drinks" },
  { id: "P006", name: "Red Lentils 1kg", quantity: 32, price: 125, image: "lentils.jpg", category: "staples" },
  { id: "P007", name: "Sea Salt 1kg", quantity: 45, price: 35, image: "salt.jpg", category: "staples" },
  { id: "P008", name: "Ground Coffee 250g", quantity: 20, price: 310, image: "ground-coffee.jpg", category: "drinks" },
  { id: "P009", name: "Butter Biscuits 300g", quantity: 28, price: 85, image: "biscuits.jpg", category: "snacks" },
  { id: "P010", name: "Penne Pasta 500g", quantity: 25, price: 110, image: "penne-pasta.jpg", category: "staples" },
  { id: "P011", name: "Whole Milk 1L", quantity: 22, price: 68, image: "milk.jpg", category: "drinks" },
  { id: "P012", name: "Herbal Soap 125g", quantity: 36, price: 55, image: "soap.jpg", category: "personal-care" },
  { id: "P013", name: "Chickpeas 1kg", quantity: 30, price: 140, image: "chickpeas.jpg", category: "staples" },
  { id: "P014", name: "Kidney Beans 1kg", quantity: 26, price: 180, image: "kidney-beans.jpg", category: "staples" },
  { id: "P015", name: "Flattened Rice (Poha) 1kg", quantity: 22, price: 90, image: "poha-rice.jpg", category: "staples" },
  { id: "P016", name: "Chickpea Flour 1kg", quantity: 20, price: 110, image: "chickpea-flour.jpg", category: "staples" },
  { id: "P017", name: "Rolled Oats 1kg", quantity: 18, price: 220, image: "oats.jpg", category: "staples" },
  { id: "P018", name: "Potato Chips 150g", quantity: 35, price: 30, image: "potato-chips.jpg", category: "snacks" },
  { id: "P019", name: "Salted Peanuts 200g", quantity: 28, price: 95, image: "peanuts.jpg", category: "snacks" },
  { id: "P020", name: "Roasted Cashews 200g", quantity: 18, price: 250, image: "cashews.jpg", category: "snacks" },
  { id: "P021", name: "Dark Chocolate 100g", quantity: 24, price: 120, image: "dark-chocolate.jpg", category: "snacks" },
  { id: "P022", name: "Milk Chocolate 100g", quantity: 26, price: 110, image: "milk-chocolate.jpg", category: "snacks" },
  { id: "P023", name: "Popcorn Kernels 500g", quantity: 20, price: 85, image: "popcorn.jpg", category: "snacks" },
  { id: "P024", name: "Masala Namkeen 200g", quantity: 30, price: 75, image: "namkeen.jpg", category: "snacks" },
  { id: "P025", name: "Oat Cookies 250g", quantity: 22, price: 95, image: "oat-cookies.jpg", category: "snacks" },
  { id: "P026", name: "Granola Bars 6-pack", quantity: 18, price: 180, image: "granola-bars.jpg", category: "snacks" },
  { id: "P027", name: "Corn Crackers 200g", quantity: 25, price: 80, image: "crackers.jpg", category: "snacks" },
  { id: "P028", name: "Banana Chips 150g", quantity: 21, price: 70, image: "banana-chips.jpg", category: "snacks" },
  { id: "P029", name: "Orange Juice 1L", quantity: 24, price: 130, image: "orange-juice.jpg", category: "drinks" },
  { id: "P030", name: "Apple Juice 1L", quantity: 20, price: 145, image: "apple-juice.jpg", category: "drinks" },
  { id: "P031", name: "Sparkling Water 750ml", quantity: 32, price: 55, image: "sparkling-water.jpg", category: "drinks" },
  { id: "P032", name: "Mineral Water 1L", quantity: 48, price: 20, image: "mineral-water.jpg", category: "drinks" },
  { id: "P033", name: "Cola 750ml", quantity: 30, price: 45, image: "cola.jpg", category: "drinks" },
  { id: "P034", name: "Lemon Soda 750ml", quantity: 26, price: 40, image: "lemon-soda.jpg", category: "drinks" },
  { id: "P035", name: "Mango Drink 1L", quantity: 22, price: 110, image: "mango-juice.jpg", category: "drinks" },
  { id: "P036", name: "Green Tea 100g", quantity: 18, price: 190, image: "green-tea.jpg", category: "drinks" },
  { id: "P037", name: "Hot Chocolate 200g", quantity: 16, price: 230, image: "hot-chocolate.jpg", category: "drinks" },
  { id: "P038", name: "Shampoo 400ml", quantity: 22, price: 240, image: "shampoo.jpg", category: "personal-care" },
  { id: "P039", name: "Conditioner 400ml", quantity: 18, price: 260, image: "conditioner-bottle.jpg", category: "personal-care" },
  { id: "P040", name: "Toothpaste 150g", quantity: 30, price: 95, image: "toothpaste.jpg", category: "personal-care" },
  { id: "P041", name: "Toothbrush 1pc", quantity: 34, price: 45, image: "toothbrush.jpg", category: "personal-care" },
  { id: "P042", name: "Hand Wash 250ml", quantity: 25, price: 85, image: "hand-wash.jpg", category: "personal-care" },
  { id: "P043", name: "Body Lotion 200ml", quantity: 20, price: 175, image: "body-lotion.jpg", category: "personal-care" },
  { id: "P044", name: "Face Wash 100ml", quantity: 18, price: 130, image: "face-wash.jpg", category: "personal-care" },
  { id: "P045", name: "Deodorant 150ml", quantity: 24, price: 160, image: "deodorant.jpg", category: "personal-care" },
  { id: "P046", name: "Hand Sanitizer 100ml", quantity: 28, price: 60, image: "sanitizer.jpg", category: "personal-care" },
  { id: "P047", name: "Facial Tissues 100 sheets", quantity: 32, price: 70, image: "tissues.jpg", category: "personal-care" },
  { id: "P048", name: "Sunscreen Lotion 100ml", quantity: 16, price: 280, image: "sunscreen.jpg", category: "personal-care" }
];
const fallbackImage = "images/groceries.jpg";
const inventoryStorageKey = "hmart.inventory.v1";
const categoryLabels = {
  staples: "Staples",
  snacks: "Snacks",
  drinks: "Drinks",
  "personal-care": "Personal care"
};

const elements = {
  shopTab: document.querySelector("#shopTab"),
  adminTab: document.querySelector("#adminTab"),
  shopView: document.querySelector("#shopView"),
  adminView: document.querySelector("#adminView"),
  categoryStrip: document.querySelector(".category-strip"),
  productGrid: document.querySelector("#productGrid"),
  searchInput: document.querySelector("#searchInput"),
  basketItems: document.querySelector("#basketItems"),
  basketTotal: document.querySelector("#basketTotal"),
  basketBadge: document.querySelector("#basketBadge"),
  checkoutButton: document.querySelector("#checkoutButton"),
  productCount: document.querySelector("#productCount"),
  stockCount: document.querySelector("#stockCount"),
  cartCount: document.querySelector("#cartCount"),
  adminPanel: document.querySelector("#adminPanel"),
  productForm: document.querySelector("#productForm"),
  adminMessage: document.querySelector("#adminMessage"),
  inventoryRows: document.querySelector("#inventoryRows"),
  toast: document.querySelector("#toast"),
  receiptModal: document.querySelector("#receiptModal"),
  receiptNumber: document.querySelector("#receiptNumber"),
  receiptDate: document.querySelector("#receiptDate"),
  receiptRows: document.querySelector("#receiptRows"),
  receiptTotal: document.querySelector("#receiptTotal"),
  printReceiptButton: document.querySelector("#printReceiptButton"),
  closeReceiptButton: document.querySelector("#closeReceiptButton")
};

elements.categoryStrip.hidden = !document.body.classList.contains("blinkit-experiment");

let products = [];
let basket = new Map();
let selectedCategory = "all";
let toastTimer;

function loadProducts() {
  const savedInventory = localStorage.getItem(inventoryStorageKey);
  if (savedInventory === null) {
    const initialProducts = seedProducts.map((product) => ({ ...product }));
    saveProducts(initialProducts);
    return initialProducts;
  }

  let savedProducts;
  try {
    savedProducts = JSON.parse(savedInventory);
  } catch {
    throw new Error("Saved inventory is unreadable. Clear this site's browser storage to restore the starter inventory.");
  }
  if (!Array.isArray(savedProducts) || !savedProducts.every(isValidProduct)) {
    throw new Error("Saved inventory has an invalid format. Clear this site's browser storage to restore the starter inventory.");
  }

  const seedProductsById = new Map(seedProducts.map((product) => [product.id.toLocaleLowerCase(), product]));
  return savedProducts.map((product) => {
    const seedProduct = seedProductsById.get(product.id.toLocaleLowerCase());
    return {
      ...seedProduct,
      ...product,
      image: product.image || seedProduct?.image
    };
  });
}

function saveProducts(nextProducts) {
  localStorage.setItem(inventoryStorageKey, JSON.stringify(nextProducts));
}

function isValidProduct(product) {
  return product !== null
    && typeof product === "object"
    && typeof product.id === "string"
    && typeof product.name === "string"
    && Number.isSafeInteger(product.quantity)
    && product.quantity >= 0
    && Number.isSafeInteger(product.price)
    && product.price >= 0;
}

function formatPrice(amount) {
  return `₹${amount.toLocaleString("en-IN")}`;
}

function render() {
  renderProducts(elements.searchInput.value);
  renderBasket();
  renderInventory();
  elements.productCount.textContent = String(products.length);
  elements.stockCount.textContent = String(products.reduce((sum, product) => sum + product.quantity, 0));
}

function renderProducts(query = "") {
  const normalizedQuery = query.trim().toLocaleLowerCase();
  const visibleProducts = products.filter((product) =>
    (selectedCategory === "all" || getCategory(product) === selectedCategory)
    && (product.name.toLocaleLowerCase().includes(normalizedQuery)
      || product.id.toLocaleLowerCase().includes(normalizedQuery))
  );
  elements.productGrid.replaceChildren();

  if (visibleProducts.length === 0) {
    const empty = document.createElement("p");
    empty.className = "empty-results";
    empty.textContent = "No products match your search.";
    elements.productGrid.append(empty);
    return;
  }

  visibleProducts.forEach((product) => {
    const card = document.createElement("article");
    card.className = "product-card";

    const art = document.createElement("div");
    art.className = `product-art art-${products.indexOf(product) % 5}`;
    const image = document.createElement("img");
    image.src = product.image ? `images/${product.image}` : fallbackImage;
    image.alt = `Photo of ${product.name}`;
    image.loading = "lazy";
    image.addEventListener("error", () => {
      image.src = fallbackImage;
    }, { once: true });
    art.append(image);

    const meta = document.createElement("div");
    meta.className = "product-meta";
    const name = document.createElement("h3");
    name.textContent = product.name;
    const id = document.createElement("span");
    id.className = "product-id";
    id.textContent = product.id;
    meta.append(name, id);

    const stock = document.createElement("p");
    stock.className = "product-stock";
    stock.textContent = product.quantity > 0 ? `${product.quantity} in stock` : "Out of stock";

    const bottom = document.createElement("div");
    bottom.className = "product-bottom";
    const price = document.createElement("span");
    price.className = "product-price";
    price.textContent = formatPrice(product.price);
    const addButton = document.createElement("button");
    addButton.className = "add-cart";
    addButton.type = "button";
    addButton.disabled = product.quantity === 0;
    addButton.textContent = product.quantity === 0 ? "Sold out" : "+ Add";
    addButton.setAttribute("aria-label", `Add ${product.name} to basket`);
    addButton.addEventListener("click", () => addToBasket(product.id));
    bottom.append(price, addButton);

    card.append(art, meta, stock, bottom);
    elements.productGrid.append(card);
  });
}

function getCategory(product) {
  if (product.category) return product.category;
  const name = product.name.toLocaleLowerCase();
  if (/soap|shampoo|toothpaste/.test(name)) return "personal-care";
  if (/biscuit|cookie|snack|chips/.test(name)) return "snacks";
  if (/tea|coffee|milk|juice|drink/.test(name)) return "drinks";
  return "staples";
}

function renderBasket() {
  elements.basketItems.replaceChildren();
  let totalItems = 0;
  let totalPrice = 0;

  if (basket.size === 0) {
    const empty = document.createElement("div");
    empty.className = "empty-basket";
    empty.innerHTML = "<div><span aria-hidden=\"true\">🧺</span>Your basket is waiting.<br>Add something you love.</div>";
    elements.basketItems.append(empty);
  } else {
    basket.forEach((quantity, id) => {
      const product = products.find((item) => item.id === id);
      if (!product) return;
      totalItems += quantity;
      totalPrice += quantity * product.price;

      const item = document.createElement("div");
      item.className = "basket-item";
      const details = document.createElement("div");
      const name = document.createElement("h3");
      name.textContent = product.name;
      const itemControls = document.createElement("div");
      itemControls.className = "basket-item-controls";
      const decreaseButton = document.createElement("button");
      decreaseButton.className = "quantity-button";
      decreaseButton.type = "button";
      decreaseButton.textContent = "−";
      decreaseButton.setAttribute("aria-label", `Remove one ${product.name} from basket`);
      decreaseButton.addEventListener("click", () => changeBasketQuantity(id, -1));
      const quantityText = document.createElement("span");
      quantityText.className = "basket-quantity";
      quantityText.textContent = String(quantity);
      quantityText.setAttribute("aria-label", `Quantity: ${quantity}`);
      const increaseButton = document.createElement("button");
      increaseButton.className = "quantity-button";
      increaseButton.type = "button";
      increaseButton.textContent = "+";
      increaseButton.disabled = quantity >= product.quantity;
      increaseButton.setAttribute("aria-label", `Add one ${product.name} to basket`);
      increaseButton.addEventListener("click", () => changeBasketQuantity(id, 1));
      itemControls.append(decreaseButton, quantityText, increaseButton);
      const quantityTextLine = document.createElement("p");
      quantityTextLine.className = "basket-unit-price";
      quantityTextLine.textContent = `${formatPrice(product.price)} each`;
      const removeButton = document.createElement("button");
      removeButton.className = "remove-item";
      removeButton.type = "button";
      removeButton.textContent = "Remove item";
      removeButton.setAttribute("aria-label", `Remove ${product.name} from basket`);
      removeButton.addEventListener("click", () => {
        basket.delete(id);
        render();
      });
      details.append(name, itemControls, quantityTextLine, removeButton);
      const lineTotal = document.createElement("strong");
      lineTotal.textContent = formatPrice(quantity * product.price);
      item.append(details, lineTotal);
      elements.basketItems.append(item);
    });
  }

  elements.basketTotal.textContent = formatPrice(totalPrice);
  elements.basketBadge.textContent = String(totalItems);
  elements.cartCount.textContent = `${totalItems} ${totalItems === 1 ? "item" : "items"}`;
  elements.checkoutButton.disabled = totalItems === 0;
}

function renderInventory() {
  elements.inventoryRows.replaceChildren();
  products.forEach((product) => {
    const row = document.createElement("tr");
    const category = categoryLabels[getCategory(product)] || "Other";
    [product.id, product.name, category, String(product.quantity), formatPrice(product.price)].forEach((value) => {
      const cell = document.createElement("td");
      cell.textContent = value;
      row.append(cell);
    });
    const actions = document.createElement("td");
    const deleteButton = document.createElement("button");
    deleteButton.className = "text-button";
    deleteButton.type = "button";
    deleteButton.textContent = "Delete";
    deleteButton.setAttribute("aria-label", `Delete ${product.name}`);
    deleteButton.addEventListener("click", () => deleteProduct(product.id));
    actions.append(deleteButton);
    row.append(actions);
    elements.inventoryRows.append(row);
  });
}

async function deleteProduct(id) {
  const product = products.find((item) => item.id === id);
  if (!product || !window.confirm(`Delete ${product.name} from the inventory?`)) return;
  try {
    const nextProducts = products.filter((item) => item.id !== id);
    saveProducts(nextProducts);
    products = nextProducts;
    basket.delete(id);
    elements.adminMessage.textContent = `${product.name} was deleted and saved in this browser.`;
    elements.adminMessage.classList.remove("error");
    render();
  } catch (error) {
    console.error("Could not delete the product.", error);
    elements.adminMessage.textContent = error.message;
    elements.adminMessage.classList.add("error");
  }
}

function addToBasket(id) {
  const product = products.find((item) => item.id === id);
  if (!product) return;
  const quantityInBasket = basket.get(id) || 0;
  if (quantityInBasket >= product.quantity) {
    showToast("There is not enough stock for another item.");
    return;
  }
  basket.set(id, quantityInBasket + 1);
  render();
}

function changeBasketQuantity(id, change) {
  const product = products.find((item) => item.id === id);
  const currentQuantity = basket.get(id);
  if (!product || currentQuantity === undefined) return;

  const nextQuantity = currentQuantity + change;
  if (nextQuantity <= 0) {
    basket.delete(id);
  } else if (nextQuantity <= product.quantity) {
    basket.set(id, nextQuantity);
  } else {
    return;
  }
  render();
}

function showToast(message) {
  elements.toast.textContent = message;
  elements.toast.classList.add("visible");
  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => elements.toast.classList.remove("visible"), 2800);
}

function showView(view) {
  const isShop = view === "shop";
  elements.shopView.classList.toggle("hidden", !isShop);
  elements.adminView.classList.toggle("hidden", isShop);
  elements.shopTab.classList.toggle("active", isShop);
  elements.adminTab.classList.toggle("active", !isShop);
}

elements.shopTab.addEventListener("click", () => showView("shop"));
elements.adminTab.addEventListener("click", () => showView("admin"));
elements.searchInput.addEventListener("input", () => renderProducts(elements.searchInput.value));
elements.categoryStrip.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-category]");
  if (!button) return;
  selectedCategory = button.dataset.category;
  elements.categoryStrip.querySelectorAll("button[data-category]").forEach((categoryButton) => {
    const isSelected = categoryButton === button;
    categoryButton.classList.toggle("active", isSelected);
    categoryButton.setAttribute("aria-pressed", String(isSelected));
  });
  renderProducts(elements.searchInput.value);
});

elements.productForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(elements.productForm);
  const product = {
    id: String(formData.get("id")).trim(),
    name: String(formData.get("name")).trim(),
    category: String(formData.get("category")),
    quantity: Number(formData.get("quantity")),
    price: Number(formData.get("price"))
  };

  if (!product.id || !product.name || !categoryLabels[product.category]
      || !Number.isSafeInteger(product.quantity) || product.quantity < 1
      || !Number.isSafeInteger(product.price) || product.price < 1) {
    elements.adminMessage.textContent = "Enter a product name and ID, and positive whole-number quantity and price.";
    elements.adminMessage.classList.add("error");
    return;
  }
  if (products.some((item) => item.id.toLocaleLowerCase() === product.id.toLocaleLowerCase())) {
    elements.adminMessage.textContent = "A product with this ID already exists.";
    elements.adminMessage.classList.add("error");
    return;
  }
  try {
    const nextProducts = [...products, { ...product, image: fallbackImage }];
    saveProducts(nextProducts);
    products = nextProducts;
    elements.productForm.reset();
    elements.adminMessage.textContent = `${product.name} was added and saved in this browser.`;
    elements.adminMessage.classList.remove("error");
    render();
  } catch (error) {
    console.error("Could not add the product.", error);
    elements.adminMessage.textContent = error.message;
    elements.adminMessage.classList.add("error");
  }
});

elements.checkoutButton.addEventListener("click", () => {
  if (basket.size === 0) return;
  try {
    const quantities = new Map(basket);
    const receiptItems = products
      .filter((product) => quantities.has(product.id))
      .map((product) => ({
        name: product.name,
        quantity: quantities.get(product.id),
        price: product.price
      }));
    const nextProducts = products.map((product) => {
      const purchasedQuantity = quantities.get(product.id) || 0;
      if (purchasedQuantity > product.quantity) {
        throw new Error(`Not enough stock remains for ${product.name}.`);
      }
      return { ...product, quantity: product.quantity - purchasedQuantity };
    });
    const total = products.reduce((sum, product) =>
      sum + (quantities.get(product.id) || 0) * product.price, 0);
    saveProducts(nextProducts);
    products = nextProducts;
    basket.clear();
    render();
    showReceipt(receiptItems, total);
    showToast(`Purchase complete — ${formatPrice(total)}. Thank you!`);
  } catch (error) {
    console.error("Could not complete the purchase.", error);
    showToast(error.message);
  }
});

function showReceipt(items, total) {
  const now = new Date();
  const billNumber = `HM-${now.toISOString().replace(/\D/g, "").slice(0, 14)}`;
  elements.receiptNumber.textContent = billNumber;
  elements.receiptDate.textContent = now.toLocaleString("en-IN");
  elements.receiptRows.replaceChildren();

  items.forEach((item) => {
    const row = document.createElement("tr");
    [item.name, String(item.quantity), formatPrice(item.price), formatPrice(item.quantity * item.price)]
      .forEach((value) => {
        const cell = document.createElement("td");
        cell.textContent = value;
        row.append(cell);
      });
    elements.receiptRows.append(row);
  });

  elements.receiptTotal.textContent = formatPrice(total);
  elements.receiptModal.classList.remove("hidden");
  elements.closeReceiptButton.focus();
}

elements.printReceiptButton.addEventListener("click", () => window.print());
elements.closeReceiptButton.addEventListener("click", () => {
  elements.receiptModal.classList.add("hidden");
});
elements.receiptModal.addEventListener("click", (event) => {
  if (event.target === elements.receiptModal) elements.receiptModal.classList.add("hidden");
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") elements.receiptModal.classList.add("hidden");
});

function initialize() {
  try {
    products = loadProducts();
    render();
  } catch (error) {
    console.error("Could not load the saved inventory.", error);
    elements.adminMessage.textContent = error.message;
    elements.adminMessage.classList.add("error");
    showToast("Could not load inventory. See the admin message for details.");
  }
}

initialize();
