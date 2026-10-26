# 🌾 FarmDirect 360 AI

AI-based digital marketplace that connects farmers directly with customers, hotels, restaurants and supermarkets – no middlemen, better prices for farmers, fresh produce for buyers.

**SDGs:** 8 (Decent Work & Economic Growth), 9 (Industry, Innovation & Infrastructure), 12 (Responsible Consumption & Production)

## Features (working prototype)
- 🎙️ Voice-based product listing in Tamil
- 🤖 AI price recommendation
- 🛒 Customer marketplace, cart, simulated online payment
- 📦 Order tracking (Placed -> Picked up -> Delivered)
- 🛵 Delivery partner dashboard with earnings
- ⛈️ Weather alert and 🏛️ government scheme info

## Setup
No installation needed.
1. Download / clone this repository.
2. Open `app/index.html` in Chrome (mobile or desktop). Done.
3. For voice, allow microphone permission. Use the "Demo phrase" button if mic is unavailable.

**Environment variables:** none for the prototype. See `.env.example` for the production plan.

## Run tests
Requires Node.js 16+.
```
node tests/test_logic.js
```

## Project structure
```
app/index.html          working prototype (all 3 roles)
src/logic.js            core logic (parser, price AI, orders)
tests/test_logic.js     test cases
data/                   sample products and voice inputs
docs/architecture.md    architecture diagram
docs/technical_design.md  technical design document
LICENSE                 MIT
```

## Demo flow
Farmer tab -> Demo phrase -> List product -> Customer tab -> Add -> Pay & Order -> Delivery tab -> mark picked up / delivered -> Customer tab shows tracking.

## Roadmap
Image-based crop detection, GPS nearby matching, real payments, live weather, more languages.

## License
MIT – see `LICENSE`.
