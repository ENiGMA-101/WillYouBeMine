# 💗 Will You Be Mine?

<p align="center">
  <img src="./assets/love-sparkles.gif" width="560" alt="Will You Be Mine animated preview">
</p>

<p align="center">
  <b>A playful interactive love-question website built with pure HTML, CSS & JavaScript.</b>
</p>

<p align="center">
  <a href="https://github.com/ENiGMA-101/WillYouBeMine">Repository</a>
  ·
  <a href="https://enigma-101.github.io/WillYouBeMine/">Live Demo</a>
</p>

---

## 💌 About

**Will You Be Mine?** is a lightweight interactive web experience built around one simple question:

> 💗 **Will you be mine?**

Choose **Yes** and the page reveals a cute animated celebration.

Try to choose **No** and the button keeps its distance. 😄

The project uses no framework, backend, database, or build process.

## ✨ Features

- 💗 Romantic glassmorphism UI
- 🎞️ Full-frame local GIF animations
- 🏃 Runaway **No** button
- 🚫 No button cannot be clicked or tapped
- 🎉 Animated Yes/celebration flow
- 📱 Responsive desktop and mobile layout
- ⚡ Lightweight front-end
- 🌐 GitHub Pages ready
- 🧩 Pure HTML, CSS and JavaScript

## 🎬 Preview

<p align="center">
  <img src="./assets/love-sparkles.gif" width="560" alt="Animated Will You Be Mine preview">
</p>

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| HTML5 | Structure and content |
| CSS3 | UI, responsive layout and animations |
| JavaScript | Interaction and button behavior |
| GIF | Local animated visuals |
| GitHub Pages | Static deployment |

## 📁 Project Structure

```text
WillYouBeMine/
├── assets/
│   ├── heart-loading.gif
│   ├── love-celebration.gif
│   └── love-sparkles.gif
├── index.html
├── do_you_love_me.css
├── do_you_love_me.js
├── README.md
├── LICENSE
└── .gitignore
```

## 🚀 Run Locally

```bash
git clone https://github.com/ENiGMA-101/WillYouBeMine.git
cd WillYouBeMine
```

Open `index.html`, or run:

```bash
python -m http.server 5500
```

Then visit:

```text
http://localhost:5500
```

## 🌐 GitHub Pages

1. Open **Settings → Pages**.
2. Choose **Deploy from a branch**.
3. Select `main`.
4. Select `/ (root)`.
5. Save.

Live site:

```text
https://enigma-101.github.io/WillYouBeMine/
```

## 🎨 Customize

### Question

Edit the heading in `index.html`:

```html
<h1>Will you be mine?</h1>
```

### Theme

Edit the CSS variables:

```css
:root{
  --pink:#f44f7a;
  --pink-light:#ff7198;
  --deep:#6b3046;
}
```

### Final message

Edit the result section in `index.html`.

### GIFs

Replace the files inside:

```text
assets/
```

The page uses `object-fit: contain`, so the full GIF frame remains visible instead of being cropped.

## 🧠 Interaction Details

The **No** button is intentionally separated from the **Yes** button.

It also has:

```css
pointer-events:none;
```

Therefore it cannot receive a click or touch event.

JavaScript watches the surrounding interaction area and moves the button when the pointer gets close.

This makes the interaction much more reliable on both desktop and touch devices.

## 📌 Future Ideas

- 🎵 Optional background music
- 💌 Personalized name input
- 📸 Personalized final message
- 🎊 More celebration effects
- 🌙 Dark romantic theme
- 🔗 Shareable personalized links
- 📱 PWA support

## 👨‍💻 Author

**ENiGMA-101**

GitHub: [@ENiGMA-101](https://github.com/ENiGMA-101)

## 📄 License

MIT License — see [`LICENSE`](./LICENSE).

---

<p align="center">
  Made with 💗 by <b>ENiGMA-101</b>
</p>
