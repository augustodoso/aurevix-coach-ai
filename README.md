# Aurevix Coach AI

Assistente virtual **educativo** de treino e bem-estar desenvolvido pela **Aurevix Tech**.  
O sistema fornece explicações gerais sobre exercícios, organização de treinos, aquecimento, mobilidade e rotinas semanais — sempre com foco em **segurança, ética e respeito às normas do CREF**.

Este projeto utiliza inteligência artificial para educar, informar e orientar, mas **não substitui** um Profissional de Educação Física.

---

## 🔗 Links do Projeto

- **Aplicação Web (Frontend):** https://aurevix-coach-ai.vercel.app/  
- **API Online (Backend):** https://aurevix-coach-backend.onrender.com  
- **Documentação da API (Swagger):** https://aurevix-coach-backend.onrender.com/docs  
- **Repositório GitHub:** https://github.com/augustodoso/aurevix-coach-ai  

---

## 🧩 Sobre o Projeto

O Aurevix Coach AI foi criado com os seguintes objetivos:

- Explicar conceitos básicos de treino e bem-estar  
- Oferecer **exemplos genéricos** de estruturas de treino  
- Ajudar na organização semanal  
- Incentivar mobilidade, aquecimento e hábitos saudáveis  
- Garantir avisos éticos obrigatórios  
- Proteger o usuário respeitando a legislação brasileira  

---

## ✨ Funcionalidades

- 💬 Chat IA com respostas educativas e claras  
- 🧠 Modelo OpenAI (GPT-4.1-mini)  
- 🏋️ Exemplos genéricos de treinos (full body, ABC etc.)  
- ⚠️ Avisos automáticos conforme normas do CREF  
- 🎨 Interface moderna com identidade Aurevix  
- 🚀 Frontend rápido hospedado na Vercel  
- 📡 Backend FastAPI hospedado no Render  

---

## 🏗 Arquitetura do Projeto

```text
aurevix-coach-ai/
├── backend/
│   ├── main.py
│   ├── config.py
│   ├── schemas.py
│   └── services/
│       ├── coach_prompt.py
│       └── openai_client.py
│
├── frontend/
│   ├── index.html
│   ├── styles.css
│   ├── script.js
│   └── assets/
│       └── aurevix_logo.png
│
├── requirements.txt
└── .gitignore
```

### Infraestrutura

- **Frontend:** Vercel  
- **Backend:** Render (Free Tier)  
- **IA:** OpenAI GPT-4.1-mini  
- **Ambiente:** Python 3.11 + FastAPI  

---

## 🛠 Tecnologias Utilizadas

### **Frontend**
- HTML5  
- CSS3  
- JavaScript  
- Fetch API  

### **Backend**
- Python 3.11  
- FastAPI  
- Uvicorn  
- Pydantic v2  
- OpenAI SDK 1.x  

### **Infra**
- Vercel  
- Render  
- GitHub  

---

## 🚀 Como Rodar Localmente

### 1. Clonar o repositório

```bash
git clone https://github.com/augustodoso/aurevix-coach-ai.git
cd aurevix-coach-ai
```

---

## 🖥 Backend

### Criar ambiente virtual

```bash
python -m venv venv
```

Ativar:

**Windows**
```bash
venv\Scripts\activate
```

**Linux/Mac**
```bash
source venv/bin/activate
```

### Instalar dependências

```bash
pip install -r requirements.txt
```

### Criar arquivo `.env` na raiz:

```env
OPENAI_API_KEY=sua_chave_aqui
```

### Executar o servidor

```bash
uvicorn backend.main:app --reload
```

Acessos locais:

- API: http://127.0.0.1:8000  
- Documentação: http://127.0.0.1:8000/docs  

---

## 🌐 Frontend

Abra o arquivo:

```
frontend/index.html
```

ou use o **Live Server** do VS Code.

No `script.js`, altere para ambiente local:

```js
const API_URL = "http://localhost:8000/chat";
```

---

## 📡 Endpoint Principal

### POST `/chat`

Exemplo:

```json
{
  "message": "Me dá um exemplo de treino full body."
}
```

---

## ⚖️ Aviso Ético Importante (CREF)

Este sistema fornece apenas:

- orientações **educativas**  
- explicações gerais sobre treino e bem-estar  
- exemplos genéricos de exercícios  

Ele **NÃO**:

- substitui um Profissional de Educação Física  
- cria treinos personalizados  
- realiza diagnósticos  
- avalia condições clínicas ou físicas  
- substitui consulta com médico ou fisioterapeuta  

---

## 🗺 Roadmap

- [x] Backend FastAPI  
- [x] Frontend Vercel  
- [x] Integração com OpenAI  
- [ ] Onboarding inteligente (V2)  
- [ ] Histórico salvo (localStorage)  
- [ ] Modo Informativo Jiu-Jitsu  
- [ ] Tema escuro/tema claro  
- [ ] Multi-idioma  

---

## 👤 Autor

**Augusto Cezar de Macedo Doso**  
- GitHub: https://github.com/augustodoso  
- LinkedIn: https://www.linkedin.com/in/augusto-cezar-de-macedo-doso-38b83537b  
- Marca: **Aurevix Tech – "Technology Crafted With Precision."**

---

## 📜 Licença

Projeto aberto para estudos, portfólio e uso educacional.  
Respeite as normas profissionais e legislação vigente.
