# Technical Design Document

## Tech stack (prototype)
HTML + CSS + vanilla JavaScript, Web Speech API, localStorage. No backend needed.

## Tech stack (planned)
React Native app, Node.js API, Firebase/PostgreSQL, TensorFlow Lite (image detection), Weather API, Razorpay.

## Key functions (`src/logic.js`)
- `parse(text)` – extracts product, quantity, price from Tamil/English speech text.
- `recommend(product)` – returns low / fair / high price per kg.
- `placeOrder(product, qty)` – validates stock, reduces it, creates the order.

## Order state machine
Placed -> Picked up -> Delivered

## Limitations
Price AI is rule-based, weather and payment are simulated, image detection is future work.
