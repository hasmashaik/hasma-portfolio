# Hasma Shaik — Portfolio

Personal developer portfolio built with React.js.

## 🚀 Run Locally

```bash
# Install dependencies
npm install

# Start development server
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📦 Build for Production

```bash
npm run build
```

## ☁️ Deploy to Vercel

1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) → **New Project**
3. Import your GitHub repository
4. Framework: **Create React App** (auto-detected)
5. Click **Deploy** — done! ✅

## 📁 Project Structure

```
hasma-portfolio/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Navbar.jsx / .css
│   │   ├── Hero.jsx   / .css
│   │   ├── Skills.jsx / .css
│   │   ├── Experience.jsx / .css
│   │   ├── Projects.jsx   / .css
│   │   ├── Education.jsx  / .css
│   │   ├── Contact.jsx    / .css
│   │   └── Footer.jsx     / .css
│   ├── data/
│   │   └── portfolio.js   ← Edit your info here
│   ├── hooks/
│   │   └── useTypewriter.js
│   ├── styles/
│   │   └── globals.css
│   ├── App.js
│   └── index.js
├── .gitignore
├── vercel.json
└── package.json
```

## ✏️ Customization

All your personal data lives in **`src/data/portfolio.js`**.  
Edit that file to update name, projects, skills, etc.
