// Configuração do vídeo
// Se você quiser hospedar o vídeo externamente, defina a URL aqui
// Opções populares: YouTube, Vimeo, Cloudflare Stream, AWS S3, Bunny.net, etc.

export const VIDEO_CONFIG = {
  // URL do vídeo hospedado externamente
  // Exemplo: "https://example.com/video.mp4"
  // Ou deixe null para usar o vídeo local
  externalUrl: null as string | null,
  
  // URL local (fallback se externalUrl não estiver definida)
  localUrl: "/video-720p.mp4",
};

// Se você quiser usar variável de ambiente, pode usar assim:
// externalUrl: import.meta.env.VITE_VIDEO_URL || null,

