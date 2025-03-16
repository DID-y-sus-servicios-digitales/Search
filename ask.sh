#!/bin/bash

API_KEY="sk-bdb4afe4215c43ee95e04f99d9f82a16"
PREGUNTA="$1"

respuesta=$(curl -s -X POST \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $API_KEY" \
  -d '{
    "model": "deepseek-chat",
    "messages": [{"role": "user", "content": "'"$PREGUNTA"'"}]
  }' \
  https://api.deepseek.com/v1/chat/completions | jq -r '.choices[0].message.content')

echo "$respuesta"
