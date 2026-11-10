const clientId = "User_" + Math.floor(Math.random() * 1000);
const ws = new WebSocket(`ws://localhost:8000/ws/${clientId}`);

const messagesDiv = document.getElementById("chat-messages");
const inputField = document.getElementById("message-input");
const sendButton = document.getElementById("send-button");

ws.onopen = function () {
  console.log("✅ Connected to chat as " + clientId);
};

ws.onmessage = function (event) {
  console.log("📩 Received:", event.data);

  // Create the message bubble
  const messageElement = document.createElement("div");
  messageElement.className = "message";
  messageElement.innerText = event.data;

  // Append to screen
  messagesDiv.appendChild(messageElement);
  messagesDiv.scrollTop = messagesDiv.scrollHeight;
};

function sendMessage() {
  const text = inputField.value.trim();
  if (text !== "") {
    console.log("📤 Sending:", text);
    ws.send(text);
    inputField.value = "";
  }
}

// Attach events directly
if (sendButton) {
  sendButton.addEventListener("click", sendMessage);
}
if (inputField) {
  inputField.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      sendMessage();
    }
  });
}
