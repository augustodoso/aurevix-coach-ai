![Aurevix Coach AI Banner](./frontend/assets/aurevix-banner.png)
<!-- Sugestão: banner dark com a frase
"Aurevix Coach AI — Construído por Aurevix Tech" -->

# Aurevix Coach AI

> Assistente virtual **educativo** de informação e bem-estar, construído pela **Aurevix Tech**, com foco em ética, segurança e respeito à atuação do Profissional de Educação Física.

---

## 🔗 Links importantes

- 🌐 **App online (frontend)**: https://aurevix-coach-ai.vercel.app/  
- 🧠 **API (backend – FastAPI)**: https://aurevix-coach-backend.onrender.com  
- 📚 **Documentação da API (Swagger)**: https://aurevix-coach-backend.onrender.com/docs  

---

## 🧩 Visão geral

O **Aurevix Coach AI** é um assistente virtual educativo que:

- responde dúvidas gerais sobre **treino e bem-estar**;
- gera **exemplos genéricos** de treinos (full body, organização semanal etc.);
- ajuda com ideias de **aquecimento, mobilidade, desaquecimento e motivação**;
- reforça, em todas as interações, que **não substitui um Profissional de Educação Física**.

> ⚖️ **Ponto central**: o projeto foi pensado para ser **CREF-friendly**, mantendo o foco em **informação educativa**, sem prescrição individualizada ou diagnóstico.

---

## ✨ Funcionalidades atuais

- 💬 **Chat em tempo real** com IA (OpenAI `gpt-4.1-mini`);
- 🧠 **Prompt sistêmico educativo** (focado em linguagem clara e segura);
- 🏋️ **Exemplos genéricos de treinos** (full body, rotinas gerais, aquecimento/desaquecimento);
- 📅 **Sugestões de organização semanal de treinos**, em nível informativo;
- ⚠️ **Mensagens de aviso e disclaimer** sobre:
  - consulta ao Profissional de Educação Física;
  - procura de médico/fisioterapeuta em caso de dor, lesões, sintomas estranhos;
- 🎨 **Interface moderna**:
  - tema dark;
  - identidade visual **Aurevix Tech** (logo, tipografia, cores);
  - layout responsivo básico para desktop e mobile.

---

## 🏗 Arquitetura do projeto

**Monorepo simples**:

```text
aurevix-coach-ai/
├── backend/           # API em FastAPI (Python)
│   ├── main.py        # Endpoints (inclui /chat)
│   ├── config.py      # Configurações (modelo, etc.)
│   ├── schemas.py     # Pydantic models (request/response)
│   └── services/
│       ├── coach_prompt.py   # Prompt sistêmico
│       └── openai_client.py  # Cliente OpenAI (SDK 1.x)
│
├── frontend/          # Interface web (HTML/CSS/JS)
│   ├── index.html
│   ├── styles.css
│   ├── script.js
│   └── assets/
│       └── aurevix_logo.png  # Logo Aurevix utilizada no app
│
├── requirements.txt   # Dependências do backend
└── .gitignore         # Ignora .env, venv, etc.

Infraestrutura usada

🔙 Backend na Render (Free Tier)

🔜 Frontend na Vercel (Static Site)

🤖 OpenAI GPT-4.1-mini (via SDK 1.x)

🔐 Variáveis no Render (sem expor .env)

🧰 Tecnologias

Backend

FastAPI

Uvicorn

Pydantic v2

Starlette

Python 3.11

OpenAI SDK 1.x

Frontend

HTML5

CSS3

JavaScript

Fetch API

Infra

Render (Backend)

Vercel (Frontend)

GitHub (Versionamento)

🚀 Como rodar localmente
1. Clonar o repositório

git clone https://github.com/augustodoso/aurevix-coach-ai.git
cd aurevix-coach-ai

2. Backend
Criar ambiente virtual:

python -m venv venv

Ativar:
    Windows:
    venv\Scripts\activate

    Linux/macOS:
    source venv/bin/activate

Instalar dependências:
pip install -r requirements.txt

Criar .env na raiz:
OPENAI_API_KEY=sua_chave_aqui

Executar backend:
uvicorn backend.main:app --reload

Acessar:

http://127.0.0.1:8000

http://127.0.0.1:8000/docs

3. Frontend

Na pasta frontend/, abra o index.html com Live Server do VS Code.

Ou abra direto no navegador.

Configurar API no script.js:

const API_URL = "http://localhost:8000/chat";
// Ou produção:
// const API_URL = "https://aurevix-coach-backend.onrender.com/chat";

📡 Endpoint principal
POST /chat

URL de produção:
https://aurevix-coach-backend.onrender.com/chat

Exemplo:
{
  "message": "Me dá um exemplo de treino full body."
}

⚖️ Aviso ético & CREF

O Aurevix Coach AI:

NÃO substitui um Profissional de Educação Física;

NÃO faz prescrição individual;

NÃO faz diagnósticos;

NÃO é ferramenta clínica;

NÃO substitui avaliação presencial.

Objetivo: educação, organização geral e bem-estar.

Em caso de dores, lesões ou sintomas → procurar médico ou fisioterapeuta.

🗺 Roadmap

 Backend no Render

 Frontend na Vercel

 Integração app + API

 Onboarding V2 (tela inicial inteligente)

 Histórico salvo no navegador (localStorage)

 Modo Jiu-Jitsu informativo

 Multi-idioma

 UI/UX melhorada com animações

 👤 Autor

Augusto Cezar de Macedo Doso

GitHub: https://github.com/augustodoso

LinkedIn: https://www.linkedin.com/in/augusto-cezar-de-macedo-doso-38b83537b

Marca: Aurevix Tech – “Technology Crafted With Precision.”

📄 Licença

Projeto aberto para estudo e portfólio.
Se for usar comercialmente, adapte com responsabilidade e respeite legislação vigente (especialmente CREF/CONFEF para atividades físicas).

