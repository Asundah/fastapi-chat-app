# 💬 FastAPI Real-Time Chat

A real-time chat application built with **FastAPI WebSockets** and **Vanilla JavaScript**. It features a sleek, custom-built dark-mode UI using pure CSS with zero frontend frameworks.

## ✨ Features

- ⚡ **Real-Time Messaging** – Messages appear instantly across all connected clients using WebSockets.
- 🎨 **Custom Dark-Mode UI** – Built from scratch with pure CSS (no Bootstrap or Tailwind).
- 🚀 **Fast Backend** – Uses FastAPI's asynchronous WebSocket connections to manage state.
- 📱 **Responsive Design** – Works seamlessly on desktop and mobile browsers.
- 🔌 **Auto-Reconnect** – (Optional) Handles connection drops gracefully.

## 🛠️ Tech Stack

- **Backend:** FastAPI, Python 3.8+, Uvicorn (with WebSocket support)
- **Frontend:** HTML5, Vanilla JavaScript, Custom CSS
- **Templating:** Jinja2

## 📁 Project Structure

fastapi-chat-app/
├── app/
│ ├── init.py
│ └── main.py # FastAPI app + WebSocket ConnectionManager
├── static/
│ ├── style.css # Custom dark-mode CSS
│ └── script.js # WebSocket client logic
├── templates/
│ └── index.html # Chat UI
├── requirements.txt
└── README.md

text

## 🚀 Local Setup

### 1. Clone the repository
```bash
git clone https://github.com/asundah/fastapi-chat-app.git
cd fastapi-chat-app
2. Create and activate a virtual environment
bash
python -m venv venv
source venv/bin/activate   # Mac/Linux
venv\Scripts\activate      # Windows
3. Install dependencies
bash
pip install -r requirements.txt
(Note: uvicorn[standard] is required to handle WebSocket connections properly).

4. Run the server
bash
uvicorn app.main:app --reload
5. Open in browser
text
http://localhost:8000
Open a second browser window (or incognito tab) and navigate to the same URL to test the real-time messaging.

🧠 How It Works
Unlike standard HTTP requests (where the client asks and the server answers), this app uses WebSockets.

When a user opens the page, a WebSocket connection is established.

The FastAPI ConnectionManager keeps track of all active connections.

When a user sends a message, it is sent to the server.

The server instantly broadcasts that message to every other connected user.

📡 Endpoints
Method	Endpoint	Description
GET	/	Serves the chat UI
WS	/ws/{client_id}	WebSocket endpoint for real-time communication
👨‍💻 Author
Amos Asunda
GitHub: @asundah

Built with ❤️ using FastAPI and WebSockets.
