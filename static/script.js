// Generate a random client ID (so we know who is talking)
const clientId = "User_" + Math.floor(Math.random() * 1000);

// Connect to the FastAPI WebSocket endpoint
const ws = new WebSocket(`ws://localhost:8000/ws/${clientId}`);

const messagesDiv = document.getElementById("chat-messages");
const inputField = document.getElementById("message-input");

// Attach the click event to the button
const sendButton = document.getElementById("send-button");

// When the connection opens
ws.onopen = function () {
  console.log("Connected to chat!");
};

// When a message is received from the server
ws.onmessage = function (event) {
  const messageData = event.data;

  const messageElement = document.createElement("div");
  messageElement.className = "message";

  // Check if it's a user message
  if (messageData.includes(": ")) {
    const parts = messageData.split(": ");
    const sender = parts.shift(); // Gets "User_123"
    const text = parts.join(": "); // Gets the rest of the message

    messageElement.innerHTML = `<span class="sender">${sender}:</span> ${text}`;
  } else {
    // For system messages like "User left the chat"
    messageElement.textContent = messageData;
  }

  messagesDiv.appendChild(messageElement);
  messagesDiv.scrollTop = messagesDiv.scrollHeight;
};

// Send a message
function sendMessage() {
  const text = inputField.value.trim();
  if (text != "") {
    console.log("📤 Sending:", text);
    ws.send(text);
    inputField.value = "";
  }
}

if (sendButton) {
  sendButton.addEventListener("click", sendMessage);
}

// Allow pressing "Enter" to send
if (inputField) {
  inputField.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      sendMessage();
    }
  });
}
