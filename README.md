# CodeTogetherAI 🚀

A **real-time collaborative coding platform** where multiple users can edit code together instantly, in the same shared editor. Built with modern web technologies, CodeTogetherAI makes pair programming, teaching, and remote collaboration effortless.

---

## 🧠 Features

✨ **Real-time collaborative editor** – Multiple users edit at the same time  
✨ **Live cursor positions & simultaneous typing**  
✨ **Room system** – Create and join coding sessions via unique links  
✨ **WebSockets for fast updates**  
✨ **Clean UI with responsive design**  
✨ **Modular architecture for easy extension**

---

## 🛠️ Tech Stack

| Layer | Technologies |
|-------|--------------|
| Frontend | Vite, React (if used), TypeScript, TailwindCSS |
| Backend | Node.js, Express (optional), WebSockets |
| Real-Time Sync | WebSocket events for collaborative editing |
| Deployment | Ready for Vercel / Render / Railway |

---

## 📁 Folder Structure

```

📦 CodeTogetherAI
├── public/                # Static assets (images, icons)
├── src/                   # Frontend source
│   ├── components/        # UI components
│   ├── pages/             # Page views
│   ├── utils/             # Helpers & services
│   └── main.tsx           # App entrypoint
├── server/                # Backend server & WebSocket logic
├── package.json           # Project config & scripts
├── tsconfig.json          # TypeScript config
└── tailwind.config.js     # Tailwind CSS config

````

---

## 🚀 Getting Started

### 💻 Prerequisites

Make sure you have Node.js installed:

```bash
node -v
````

---

### 📌 Clone & Install

```bash
git clone https://github.com/O-Aryan/CodeTogetherAI.git
cd CodeTogetherAI
```

Install dependencies:

```bash
npm install
```

---

### 🟢 Run Backend Server

```bash
cd server
npm install
npm run dev
```

---

### 🔵 Run Frontend

Open a new terminal:

```bash
npm run dev
```

---

## 🧪 How It Works

1. Open the app in your browser
2. Create a new coding room
3. Share the room link with others
4. Collaborate in real-time
5. See live changes from all participants

---

## 📸 Screenshots

*(Add relevant screenshots here — update file paths as needed)*

![Landing Page](public/screenshots/landing.png)
*Landing page and room creation UI*

![Collaborative Editor](public/screenshots/editor.png)
*Live collaborative code editor*

---

## 🔮 Future Enhancements

Here are some planned improvements:

🎯 AI-powered code suggestions
🎯 Syntax highlighting for multiple languages
🎯 Authentication & user profiles
🎯 Chat inside rooms
🎯 Save sessions to database
🎯 Deploy full stack to cloud

---

## 🤝 Contributing

Contributions are welcome! Follow these steps:

1. Fork this repository
2. Create your feature branch

   ```bash
   git checkout -b feature/YourFeature
   ```
3. Commit your changes
4. Push to your fork
5. Open a Pull Request

---

## 📄 License

This project is licensed under the **MIT License** — feel free to use, modify, and build on it.

---

## 💬 Connect

If you use CodeTogetherAI or want help extending it, feel free to reach out!
