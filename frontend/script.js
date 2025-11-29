// ===============================
// CONFIG
// ===============================
const API_URL = "https://aurevix-coach-backend.onrender.com/chat";

// ===============================
// RECUPERA DADOS DO ONBOARDING
// ===============================
const goal = localStorage.getItem("avx_goal") || "";
const level = localStorage.getItem("avx_level") || "";
const sport = localStorage.getItem("avx_sport") || "";

// ===============================
// MENSAGEM DE BOAS-VINDAS
// ===============================
function getWelcomeMessage() {
  let welcome =
    "Fala, atleta! 👋 Eu sou o Aurevix Coach AI. Posso te ajudar com informações gerais sobre treino, aquecimento, mobilidade, organização semanal e bem-estar.";

  if (goal || level || sport) {
    welcome += `\n\nPelo que entendi do seu perfil: objetivo = ${goal || "não informado"}, nível = ${level || "não informado"}, esporte = ${sport || "não informado"}.`;
    welcome += "\nVou usar isso como contexto para adaptar minhas orientações gerais, sempre de forma educativa e segura. 😊";
  }

  return welcome;
}

// ===============================
// ADICIONA MENSAGEM NO CHAT
// ===============================
function addMessage(role, text) {
  const chat = document.getElementById("chat-window");
  if (!chat) return;

  const div = document.createElement("div");
  div.className = "msg " + role;
  div.textContent = text;
  chat.appendChild(div);
  chat.scrollTop = chat.scrollHeight;
}

// ===============================
// ENVIO DA MENSAGEM PARA O BACKEND
// ===============================
async function send() {
  const input = document.getElementById("user-input");
  if (!input) return;

  const userText = input.value.trim();
  if (!userText) return;

  addMessage("user", userText);
  input.value = "";

  // monta contexto com onboarding
  let extraContext = "";
  if (goal || level || sport) {
    extraContext =
      `\n\n(Informações do usuário: objetivo = ${goal}, nível = ${level}, esporte = ${sport})`;
  }

  try {
    const res = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        message: userText + extraContext
      })
    });

    const data = await res.json();
    addMessage("bot", data.reply);
  } catch (err) {
    console.error(err);
    addMessage(
      "bot",
      "Opa, parece que tive um problema ao conectar com o servidor. Tenta novamente em instantes 🙂"
    );
  }
}

// ===============================
// LIMPAR CHAT
// ===============================
function clearChat() {
  const chat = document.getElementById("chat-window");
  if (!chat) return;

  if (confirm("Deseja realmente limpar todo o histórico do chat desta página?")) {
    chat.innerHTML = "";
    const welcome = getWelcomeMessage();
    addMessage("bot", welcome);
  }
}

// ===============================
// INICIALIZAÇÃO
// ===============================
window.onload = () => {
  // Mensagem de boas-vindas
  const welcome = getWelcomeMessage();
  addMessage("bot", welcome);

  // Eventos
  const sendBtn = document.getElementById("send-btn");
  if (sendBtn) {
    sendBtn.onclick = send;
  }

  const input = document.getElementById("user-input");
  if (input) {
    input.addEventListener("keydown", (e) => {
      if (e.key === "Enter") send();
    });
  }

  const clearBtn = document.getElementById("clear-chat-btn");
  if (clearBtn) {
    clearBtn.onclick = clearChat;
  }
};