# 💗 Will You Be Mine?

<p align="center">
  <img src="./assets/love-sparkles.gif" width="560" alt="Will You Be Mine animated preview">
</p>

<p align="center">
  <b>A playful interactive love-question website with animated hearts, a runaway No button, and a cute Yes celebration.</b>
</p>

<p align="center">
  <a href="https://github.com/MarzzzSiam/WillYouBeMine">Repository</a>
  ·
  <a href="https://marzzzsiam.github.io/WillYouBeMine/">Live Demo</a>
</p>

---

## ✨ What is Will You Be Mine?

**Will You Be Mine?** is a small interactive web experience designed to turn a simple question into a fun, memorable moment.

The visitor gets one very important question:

> 💌 **Will you be mine?**

The **Yes** button leads to a cute animated celebration, while the **No** button playfully moves away.

No framework. No backend. No database. Just a lightweight front-end experience.

## 🌸 Features

- 💗 Romantic glassmorphism interface
- ✨ Animated floating hearts
- 🎞️ Local custom GIF animations
- 🏃 Playful escaping **No** button
- 🎉 Animated **Yes** celebration
- 🔄 Ask-again interaction
- 📱 Fully responsive layout
- ⚡ Fast and lightweight
- 🌐 GitHub Pages ready
- 🧩 Pure HTML, CSS and JavaScript
- 🚫 No external GIF hosting required

## 🎬 Preview

<p align="center">
  <img src="./assets/love-sparkles.gif" width="520" alt="Animated project preview">
</p>

### 💞 The Question

The interface presents the visitor with two choices:

**Yes, I do 💗**  
**No 😭**

Try choosing **No**. The button has other plans. 😄

### 🎉 The Result

Clicking **Yes** starts a short loading animation before revealing the final celebration screen.

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| HTML5 | Page structure |
| CSS3 | Styling, animations & responsive design |
| JavaScript | Interaction & state changes |
| GIF | Local animated visual assets |
| GitHub Pages | Static deployment |

## 📁 Project Structure

```text
WillYouBeMine/
│
├── assets/
│   ├── heart-loading.gif
│   ├── love-celebration.gif
│   └── love-sparkles.gif
│
├── index.html
├── do_you_love_me.css
├── do_you_love_me.js
├── README.md
├── LICENSE
└── .gitignore
```

## 🚀 Run Locally

### 1. Clone the repository

```bash
git clone https://github.com/MarzzzSiam/WillYouBeMine.git
cd WillYouBeMine
```

### 2. Open the project

The project has no build step.

Simply open:

```text
index.html
```

### 3. Or use a local server

```bash
python -m http.server 5500
```

Then open:

```text
http://localhost:5500
```

## 🌐 Deploy with GitHub Pages

1. Push the project to GitHub.
2. Open the repository.
3. Go to **Settings → Pages**.
4. Under **Build and deployment**, select **Deploy from a branch**.
5. Select:
   - Branch: `main`
   - Folder: `/ (root)`
6. Click **Save**.
7. Wait for GitHub Pages to deploy.

Your site will normally be available at:

```text
https://marzzzsiam.github.io/WillYouBeMine/
```

## 🎨 Customize It

### Change the question

Edit `index.html`:

```html
<h1>Will you be mine?</h1>
```

### Change the final message

Edit:

```html
<h2>I knew it!</h2>
<p class="subtitle">You officially said YES. 💗</p>
```

### Change the theme

Edit the variables near the top of `do_you_love_me.css`:

```css
:root {
  --pink: #f44f7a;
  --deep: #6b3046;
  --soft: #fff4f8;
}
```

### Replace the GIFs

Put your own GIFs inside:

```text
assets/
```

Then update the corresponding `<img>` source in `index.html`.

## 💡 Why This Project?

Sometimes a project does not need to solve a huge technical problem to be memorable.

This project focuses on:

- interaction
- animation
- responsive design
- visual polish
- simple JavaScript logic
- creating an enjoyable user experience

It is a small project, but it demonstrates how HTML, CSS and JavaScript can work together to create something people actually want to interact with.

## 📌 Future Ideas

Possible upgrades:

- 🎵 Optional background music
- 💌 Custom name input
- 📸 Personalized final message
- 🎊 More celebration animations
- 🌙 Dark romantic theme
- 🔗 Shareable personalized links
- 📱 Installable PWA version
- 🧠 Multiple question/answer modes

## 👨‍💻 Author

**MarzzzSiam**

GitHub: [@MarzzzSiam](https://github.com/MarzzzSiam)

## 📄 License

This project is released under the **MIT License**.

See [`LICENSE`](./LICENSE) for details.

---

<p align="center">
  Made with 💗, HTML, CSS & JavaScript
</p>
