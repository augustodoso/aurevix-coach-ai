from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from .schemas import ChatRequest, ChatResponse
from .services.openai_client import call_aurevix_coach_ai

app = FastAPI(title="Aurevix Coach AI")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/chat", response_model=ChatResponse)
def chat(req: ChatRequest):
    reply = call_aurevix_coach_ai(req.message)
    return ChatResponse(reply=reply)
