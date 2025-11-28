from openai import OpenAI
from ..config import MODEL_NAME
from .coach_prompt import SYSTEM_PROMPT

# Cliente oficial usando variável OPENAI_API_KEY
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
