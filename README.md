# 🌐 Relier – Social Media Website

**Relier** is a full-stack social media application built with the **MERN stack** (MongoDB, Express, React, Node.js). It includes real-time chat functionality via **Socket.io**, responsive UI with **Material UI**, and secure authentication using RESTful APIs. Users can register, log in, post content, view profiles, and message others privately — just like a real social platform! 💬🚀

---

## 🚀 Deployment

> 🔗 **Live site coming soon... Stay tuned!**

---

## 📸 Screenshots

| Feature | Preview |
|--------|---------|
| 🏠 Home Page | ![Home](https://github.com/arnavsharma2711/Social-Media-Website/blob/main/Screenshot/1.Home%20Page.png?raw=true) |
| ➕ New Post | ![Add Post](https://github.com/arnavsharma2711/Social-Media-Website/blob/main/Screenshot/2.New%20Post.png?raw=true) |
| 👤 Profile Page | ![Profile](https://github.com/arnavsharma2711/Social-Media-Website/blob/main/Screenshot/3.Profile%20Menu.png?raw=true) |
| 🔐 Login Page | ![Login](https://github.com/arnavsharma2711/Social-Media-Website/blob/main/Screenshot/4.Login%20Page.png?raw=true) |
| 📝 Register Page | ![Register](https://github.com/arnavsharma2711/Social-Media-Website/blob/main/Screenshot/5.Register%20Page.png?raw=true) |
| 💬 Messenger | ![Messenger](https://github.com/arnavsharma2711/Social-Media-Website/blob/main/Screenshot/6.Mesesnger%20Menu.png?raw=true) |
| 💭 Chats | ![Chats](https://github.com/arnavsharma2711/Social-Media-Website/blob/main/Screenshot/7.Chats.png?raw=true) |

---

## ⚙️ Prerequisites

- ✅ Install [Node.js](https://nodejs.org/en/download/)
- ✅ Install [Postman](https://www.postman.com/) to test APIs and seed the database
- ✅ Ensure MongoDB is accessible (via MongoDB Atlas or local setup)

---

## 🔧 Setup Instructions

### 1. Environment Setup

#### `api/.env`
```bash
MONGO_URL=mongodb+srv://<username>:<password>@cluster0.nb0sm.mongodb.net/<database-name>?retryWrites=true&w=majority
```
> Replace `<username>`, `<password>`, and `<database-name>` accordingly. Make sure options are [URL encoded](https://dochub.mongodb.org/core/atlas-url-encoding).

#### `client/.env`
```bash
REACT_APP_PUBLIC_FOLDER=http://localhost:8800/images/
```

---

### 2. Install Dependencies

In **each folder** (`api`, `client`, and `socket`), run:

```bash
npm install
```
_or_
```bash
yarn install
```

---

### 3. Start the App

Open three terminals (or use a process manager like `concurrently`) and run the following in each:

#### API Server
```bash
cd api
yarn start
```

#### Client (Frontend)
```bash
cd client
yarn start
```

#### WebSocket Server
```bash
cd socket
yarn start
```

---

### 4. Seed Initial Data (Optional)

- Open Postman
- Import the `social.postman_collection.json` file
- Use the provided endpoints to register users, create initial posts, etc.

> Make sure your backend server is running while using Postman.

---

## 🧠 Features at a Glance

✨ *Detailed synopsis coming soon...* But here’s a quick teaser:

- 🛡️ Auth: Register/Login via secure REST API
- 📝 CRUD: Create/Edit/Delete posts
- 💬 Realtime chat via Socket.io
- 📸 Upload and serve media using Multer
- 👤 View other users' profiles
- ❤️ Like posts and interact with others
- 📱 Responsive design with Material UI

---

## 📚 References & Tech Stack

- **Node.js** → [nodejs.org](https://nodejs.org/en/docs/)
- **React.js** → [reactjs.org](https://reactjs.org/docs/getting-started.html)
- **React Router** → [reactrouter.com](https://reactrouter.com/)
- **Express** → [expressjs.com](https://expressjs.com/en/starter/installing.html)
- **MongoDB** → [mongodb.com](https://docs.mongodb.com/)
- **Material UI** → [mui.com](https://mui.com/)
- **Socket.io** → [socket.io/docs](https://socket.io/docs/v4/)
- **Multer (File Uploads)** → [GitHub](https://github.com/expressjs/multer#readme)
- **timeago.js** → [GitHub](https://github.com/hustcc/timeago.js#readme)
