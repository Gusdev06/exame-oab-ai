#!/bin/bash

# Script para converter vídeo para resolução otimizada para web
# Opções: 720p ou 1080p

RESOLUTION=${1:-720p}  # Padrão: 720p se não especificado

if [ "$RESOLUTION" = "720p" ]; then
  HEIGHT=720
  WIDTH=400  # Mantém proporção vertical (888/1920 = 400/720)
  BITRATE="2M"
  OUTPUT="public/video-720p.mp4"
elif [ "$RESOLUTION" = "1080p" ]; then
  HEIGHT=1080
  WIDTH=600  # Mantém proporção vertical (888/1920 = 600/1080)
  BITRATE="4M"
  OUTPUT="public/video-1080p.mp4"
else
  echo "Resolução inválida. Use: 720p ou 1080p"
  exit 1
fi

echo "Convertendo vídeo para $RESOLUTION..."
echo "Entrada: public/video.MOV"
echo "Saída: $OUTPUT"
echo "Resolução: ${WIDTH}x${HEIGHT}"
echo "Bitrate: $BITRATE"
echo ""

ffmpeg -i public/video.MOV \
  -vf "scale=${WIDTH}:${HEIGHT}:force_original_aspect_ratio=decrease,pad=${WIDTH}:${HEIGHT}:(ow-iw)/2:(oh-ih)/2" \
  -c:v libx264 \
  -preset medium \
  -crf 23 \
  -maxrate $BITRATE \
  -bufsize $(echo "$BITRATE * 2" | bc) \
  -c:a aac \
  -b:a 128k \
  -movflags +faststart \
  -y \
  "$OUTPUT"

if [ $? -eq 0 ]; then
  echo ""
  echo "✅ Conversão concluída!"
  echo ""
  echo "Tamanho do arquivo original:"
  ls -lh public/video.MOV | awk '{print $5}'
  echo ""
  echo "Tamanho do arquivo convertido:"
  ls -lh "$OUTPUT" | awk '{print $5}'
  echo ""
  echo "💡 Para usar o novo vídeo, atualize o src em Demo.tsx para:"
  echo "   /video-${RESOLUTION}.mp4"
else
  echo ""
  echo "❌ Erro na conversão"
  exit 1
fi

