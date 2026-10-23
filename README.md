# Tasty Bakery & Cafe — Digital Menu

A QR-code menu for Tasty Bakery and Cafe, Addis Ababa. Plain HTML, CSS and JavaScript: no backend, no build step, no npm install.

## Files

```
tasty-menu/
├── index.html          page structure
├── css/style.css       look and layout (mobile-first)
├── js/menu-data.js     ← ALL menu items and prices live here
├── js/app.js           builds the menu, category tabs and search
└── assets/             logo, favicon, red brush edge
```

## Changing prices or items

Open `js/menu-data.js`. Each item is one line:

```js
{ am: "ሽሮ", en: "Shiro", price: 250 },
```

- **Change a price:** edit the number after `price:`
- **Add an item:** copy a line, paste it under another, edit it (keep the comma at the end)
- **Remove an item:** delete its line
- **Add a description:** add `desc: "..."` inside the braces
- **Add a whole section:** copy a `{ id: ..., title: ..., icon: ..., items: [ ... ] }` block. Available icons: `breakfast`, `salad`, `soup`, `traditional`, `fish`, `pizza`, `wrap`, `burger`, `drinks`

Save, commit and push. The host redeploys automatically within about a minute.

## Testing locally

Double-click `index.html`, or in VS Code use the **Live Server** extension (right-click `index.html` → *Open with Live Server*).

To test on your phone: run Live Server, make sure the phone is on the same Wi-Fi, and open `http://<your-computer-ip>:5500`.

## Deploying (auto-updates on every `git push`)

1. Create a GitHub repo and push this folder to it.
2. Connect the repo to a static host:
   - **Cloudflare Pages:** Workers & Pages → Create → Pages → Connect to Git → choose the repo. Framework preset: *None*. Build command: *(leave empty)*. Output directory: `/`.
   - **Vercel:** Add New Project → import the repo → Framework: *Other* → Deploy.
3. Every push to the main branch redeploys the site.

## The QR code

Generate it from the final live URL. If you might change hosts later, connect a custom domain first (e.g. `menu.yourcafe.com`) and point the QR code at that, so printed QR codes on the tables never need replacing.
