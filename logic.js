// Core business logic of FarmDirect 360 AI (same logic is used in app/index.html)
const MARKET = {
  tomato:  { ta: "தக்காளி",   p: 28 },
  onion:   { ta: "வெங்காயம்", p: 35 },
  banana:  { ta: "வாழை",      p: 40 },
  brinjal: { ta: "கத்தரி",    p: 30 },
  coconut: { ta: "தேங்காய்",  p: 25 },
  rice:    { ta: "அரிசி",     p: 52 },
};

// Voice text -> product details. Example: "தக்காளி 50 கிலோ 30 ரூபாய்"
function parse(text) {
  text = (text || "").toLowerCase();
  let k = null;
  for (const key in MARKET) {
    if (text.includes(key) || text.includes(MARKET[key].ta)) { k = key; break; }
  }
  const n = text.match(/\d+/g) || [];
  return k ? { k, qty: +n[0] || 10, price: n[1] ? +n[1] : null } : null;
}

// AI price recommendation (rule-based demo using market reference prices)
function recommend(k) {
  const p = MARKET[k].p;
  return { lo: Math.round(p * 0.95), fair: Math.round(p * 1.05), hi: Math.round(p * 1.12) };
}

// Place an order: reduce stock, create order with status 0 (Placed)
function placeOrder(product, qty) {
  const q = Math.min(qty, product.qty);
  product.qty -= q;
  return { k: product.k, qty: q, total: q * product.price, st: 0, paid: true };
}

module.exports = { MARKET, parse, recommend, placeOrder };
