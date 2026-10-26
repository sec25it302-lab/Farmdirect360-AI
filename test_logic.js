// Run: node tests/test_logic.js
const assert = require("assert");
const { parse, recommend, placeOrder } = require("../src/logic");
let passed = 0;
function test(name, fn) { fn(); passed++; console.log("PASS:", name); }

test("Tamil voice text is parsed", () => {
  const r = parse("தக்காளி 50 கிலோ 30 ரூபாய்");
  assert.deepStrictEqual(r, { k: "tomato", qty: 50, price: 30 });
});
test("English voice text is parsed", () => {
  assert.strictEqual(parse("onion 100 kg 33").k, "onion");
});
test("Unknown product returns null", () => {
  assert.strictEqual(parse("laptop 5 kg"), null);
});
test("Price recommendation range is ordered", () => {
  const r = recommend("tomato");
  assert.ok(r.lo <= r.fair && r.fair <= r.hi);
});
test("Order reduces stock and calculates total", () => {
  const p = { k: "tomato", qty: 10, price: 30 };
  const o = placeOrder(p, 3);
  assert.strictEqual(p.qty, 7);
  assert.strictEqual(o.total, 90);
});
test("Order cannot exceed available stock", () => {
  const p = { k: "tomato", qty: 2, price: 30 };
  assert.strictEqual(placeOrder(p, 5).qty, 2);
});
console.log(`\nAll ${passed} tests passed`);
