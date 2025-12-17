import { useState, useRef, useEffect } from "react";
import { Play, Clock, MessageCircle, Brain } from "lucide-react";

// URL do vídeo hospedado no Supabase Storage
const VIDEO_URL = "https://mlrnnrubodrcpkbrhneh.supabase.co/storage/v1/object/public/videos/video-720p.mp4";

const Demo = () => {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleVideoLoad = () => {
    setVideoLoaded(true);
  };

  const handleVideoError = (e: any) => {
    console.error('Erro ao carregar vídeo:', e);
    setVideoLoaded(false);
  };

  // Detecta quando o vídeo pode ser reproduzido - múltiplos eventos para compatibilidade
  const handleCanPlay = () => {
    setVideoLoaded(true);
  };

  const handleLoadedMetadata = () => {
    setVideoLoaded(true);
  };

  const handleGoToCheckout = () => {
    window.location.href = 'https://pay.cakto.com.br/78t42ev_686798';
  };

  return (
    <section className="py-24 md:py-32 bg-[#0B1120] relative overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.02)_1px,transparent_1px)] bg-[size:64px_64px]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 px-5 py-2.5 rounded-full text-sm font-semibold mb-8 backdrop-blur-xl">
            <Play className="w-4 h-4" />
            Demonstração Ao Vivo
          </div>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-white mb-6 tracking-tight">
            Veja a <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-600">Bia</span> em Ação no WhatsApp
          </h2>
          <p className="text-lg lg:text-xl text-gray-400 leading-relaxed">
            Veja com seus próprios olhos como funciona na prática, explicações claras em tempo real, direto no seu WhatsApp.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* iPhone Mockup Premium */}
          <div className="flex justify-center mb-16">
            <div className="relative animate-fade-in">
              {/* Glow animado premium */}
              <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/20 to-blue-500/20 rounded-[3.5rem] blur-3xl animate-pulse-slow"></div>
              
              {/* iPhone Frame com efeito 3D Premium */}
              <div className="relative bg-gradient-to-b from-gray-900 via-black to-gray-900 rounded-[3.5rem] p-[6px] shadow-2xl border border-gray-800 hover:scale-105 transition-transform duration-500">
                {/* Botões laterais */}
                <div className="absolute left-0 top-32 w-1 h-16 bg-gray-800 rounded-l-full"></div>
                <div className="absolute right-0 top-40 w-1 h-20 bg-gray-800 rounded-r-full"></div>
                <div className="absolute right-0 top-64 w-1 h-24 bg-gray-800 rounded-r-full"></div>
                
                {/* Notch */}
                <div className="absolute top-[6px] left-1/2 -translate-x-1/2 w-[140px] h-[30px] bg-black rounded-b-[20px] z-10 flex items-center justify-center gap-2">
                  <div className="w-[60px] h-[6px] bg-gray-900 rounded-full"></div>
                  <div className="w-4 h-4 rounded-full bg-gray-900 border border-gray-700"></div>
                </div>
                
                {/* Screen */}
                <div className="bg-black rounded-[3rem] overflow-hidden w-[320px] h-[693px] md:w-[375px] md:h-[812px] relative shadow-inner">
                  {/* Status Bar */}
                  <div className="bg-black px-6 pt-3 pb-2 flex justify-between items-center text-xs font-semibold relative z-20">
                    <span className="font-bold text-white">9:41</span>
                    <div className="flex items-center gap-1">
                      <div className="w-[17px] h-[10px] border border-white rounded-sm relative">
                        <div className="absolute inset-[1px] rounded-sm bg-white"></div>
                      </div>
                      <svg width="17" height="10" viewBox="0 0 17 10" fill="none" className="ml-0.5">
                        <rect x="0.5" y="0.5" width="16" height="9" rx="1" stroke="white" strokeWidth="1"/>
                        <path d="M2 2H15V8H2V2Z" fill="white"/>
                      </svg>
                      <svg width="15" height="11" viewBox="0 0 15 11" fill="none" className="ml-0.5">
                        <path d="M0 0H15V11H0V0Z" fill="white"/>
                        <path d="M1 1H14V10H1V1Z" fill="black"/>
                        <path d="M3 2H12V9H3V2Z" fill="white"/>
                      </svg>
                    </div>
                  </div>

                   {/* Video Container */}
                   <div className="relative w-full h-[calc(100%-44px)] bg-black overflow-hidden">
                     {/* Vídeo */}
                     <video
                       ref={videoRef}
                       className={`w-full h-full object-cover ${videoLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`}
                       controls
                       preload="metadata"
                       style={{ backgroundColor: '#000', display: 'block', width: '100%', height: '100%' }}
                       onLoadedData={handleVideoLoad}
                       onLoadedMetadata={handleLoadedMetadata}
                       onCanPlay={handleCanPlay}
                       onError={handleVideoError}
                       playsInline
                       crossOrigin="anonymous"
                     >
                       <source src={VIDEO_URL} type="video/mp4" />
                       Seu navegador não suporta o elemento de vídeo.
                     </video>
                    
                    {/* Loader simples - aparece quando vídeo não está carregado */}
                    {!videoLoaded && (
                      <div className="absolute inset-0 flex items-center justify-center bg-black/80">
                        <div className="w-16 h-16 border-4 border-emerald-500/30 border-t-emerald-500 rounded-full animate-spin"></div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA abaixo do vídeo Premium */}
          <div className="text-center mb-20 max-w-2xl mx-auto">
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/10">
              <p className="text-lg text-gray-300 mb-6 font-semibold">
                Gostou? Comece agora a estudar de forma inteligente no seu WhatsApp
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <button
                  className="group relative inline-flex items-center justify-center bg-gradient-to-b from-emerald-500 to-emerald-600 text-white font-semibold px-10 py-4 text-base lg:text-lg rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(16,185,129,0.5)] focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-[#0B1120] w-full sm:w-auto shadow-[0_0_20px_rgba(16,185,129,0.3)]"
                  onClick={handleGoToCheckout}
                  data-cta="video_primary"
                  data-variant="A"
                  aria-label="Ver a Bia em ação"
                >
                  <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative z-10">Testar a Bia agora</span>
                </button>
              </div>
            </div>
          </div>

          {/* Mini Cards de Destaque Premium */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-16">
            <div className="text-center space-y-4 p-6 sm:p-8 bg-white/5 backdrop-blur-xl rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 group border border-white/10 hover:border-blue-500/30 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg shadow-blue-500/50">
                <Clock className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
              </div>
              <h3 className="font-bold text-lg sm:text-xl text-white">
                Respostas em Segundos
              </h3>
              <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                Tire dúvidas em qualquer hora. Sem espera, sem fila, sem complicação.
              </p>
            </div>
            
            <div className="text-center space-y-4 p-6 sm:p-8 bg-white/5 backdrop-blur-xl rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 group border border-white/10 hover:border-blue-500/30 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg shadow-blue-500/50">
                <MessageCircle className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
              </div>
              <h3 className="font-bold text-lg sm:text-xl text-white">
                Conversação Natural
              </h3>
              <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                Fale como se estivesse com uma amiga, explicações claras que você realmente entende.
              </p>
            </div>
            
            <div className="text-center space-y-4 p-6 sm:p-8 bg-white/5 backdrop-blur-xl rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 group border border-white/10 hover:border-blue-500/30 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg shadow-blue-500/50">
                <Brain className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
              </div>
              <h3 className="font-bold text-lg sm:text-xl text-white">
                Simulados Personalizados
              </h3>
              <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                Simulados sob medida para seu ritmo e matérias que você mais precisa reforçar.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Demo;
