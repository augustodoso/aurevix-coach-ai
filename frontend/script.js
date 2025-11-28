const API_URL = "http://localhost:8000/chat";

function addMessage(role, text) {
  const chat = document.getElementById("chat-window");
  const div = document.createElement("div");
  div.className = "msg " + role;
  div.textContent = text;
  chat.appendChild(div);
  chat.scrollTop = chat.scrollHeight;
}

async function send() {
  const input = document.getElementById("user-input");
  const text = input.value.trim();
  if (!text) return;

  addMessage("user", text);
  input.value = "";

  try {
    const res = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: text })
    });

    const data = await res.json();
    addMessage("bot", data.reply);
  } catch (err) {
    console.error(err);
    addMessage(
      "bot",
      "Opa, parece que tive um problema ao conectar com o servidor. Confere se o backend está rodando (porta 8000)."
    );
  }
}

document.getElementById("send-btn").onclick = send;
document
  .getElementById("user-input")
  .addEventListener("keydown", (e) => {
    if (e.key === "Enter") send();
  });
