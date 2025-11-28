from openai import OpenAI
from ..config import MODEL_NAME
from .coach_prompt import SYSTEM_PROMPT

# O cliente agora usa a chave direto da variável de ambiente OPENAI_API_KEY
# (não passamos nada pelo __init__)
client = OpenAI()


def call_aurevix_coach_ai(message: str) -> str:
    response = client.chat.completions.create(
        model=MODEL_NAME,
        messages=[
            {"role": "system", "content": SYSTEM_PROMPT},
            {"role": "user", "content": message},
        ],
        temperature=0.4,
    )

    return response.choices[0].message.content.strip()
