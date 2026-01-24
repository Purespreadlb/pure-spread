let qty = 1;
let currentBundle = "";
let currentPrice = 0;

const modal = document.getElementById("orderModal");
const qtyEl = document.getElementById("qty");
const bundleEl = document.getElementById("selectedBundle");
const totalEl = document.getElementById("totalPrice");
const frame = document.getElementById("tallyFrame");

function openOrder(bundle, price) {
  qty = 1;
  currentBundle = bundle;
  currentPrice = price;

  qtyEl.textContent = qty;
  bundleEl.textContent = bundle;
  if (totalEl) totalEl.textContent = currentPrice * qty;

  modal.style.display = "flex";
  loadTally();
}

function closeOrder() {
  modal.style.display = "none";
}

function changeQty(n) {
  qty = Math.max(1, qty + n);
  qtyEl.textContent = qty;
  if (totalEl) totalEl.textContent = currentPrice * qty;
  loadTally(); // keep form updated when qty changes
}

function resetQty() {
  qty = 1;
  qtyEl.textContent = qty;
  if (totalEl) totalEl.textContent = currentPrice * qty;
  loadTally();
}

function loadTally() {
  const url =
    "https://tally.so/embed/Y50pD0" +
    "?bundle=" + encodeURIComponent(currentBundle) +
    "&price=" + currentPrice +
    "&qty=" + qty +
    "&ts=" + Date.now(); // force refresh

  frame.src = "about:blank";
  setTimeout(() => {
    frame.src = url;
  }, 50);
}

/* Header show on scroll */
window.addEventListener("scroll", () => {
  document.getElementById("header").style.opacity =
    window.scrollY > 200 ? 1 : 0;
});
/* Close modal on outside click */