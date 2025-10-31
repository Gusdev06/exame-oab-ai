import { useState, useRef } from "react";
import { Play, Clock, MessageCircle, Brain } from "lucide-react";
import { Button } from "@/components/ui/button";

const Demo = () => {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleVideoLoad = () => {
    setVideoLoaded(true);
  };

  const handleVideoError = () => {
    setVideoLoaded(false);
  };

  const handleGoToCheckout = () => {
    window.location.href = 'https://pay.kirvano.com/0108b276-b048-4524-91c3-2c8ae9b2dbae';
  };

  return (
    <section className="py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Play className="w-4 h-4" />
            Demonstração Ao Vivo
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            🎥 Assista: Sua IA Respondendo em Segundos no WhatsApp
          </h2>
          <p className="text-lg lg:text-xl text-gray-600 dark:text-gray-400">
            Veja com seus próprios olhos como o Agente de IA explica conteúdos da OAB em tempo real — direto no seu WhatsApp.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* iPhone Mockup */}
          <div className="flex justify-center mb-12">
            <div className="relative">
              {/* Glow animado */}
              <div className="absolute inset-0 bg-gradient-to-b from-blue-900/40 to-transparent rounded-[3.5rem] blur-2xl animate-pulse"></div>
              
              {/* iPhone Frame com efeito 3D */}
              <div className="relative bg-gradient-to-b from-gray-900 via-black to-gray-900 rounded-[3.5rem] p-[6px] shadow-2xl border border-gray-800">
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
                <div className="bg-white rounded-[3rem] overflow-hidden w-[320px] h-[693px] md:w-[375px] md:h-[812px] relative shadow-inner">
                  {/* Status Bar */}
                  <div className="bg-white px-6 pt-3 pb-2 flex justify-between items-center text-xs font-semibold relative z-20">
                    <span className="font-bold">9:41</span>
                    <div className="flex items-center gap-1">
                      <div className="w-[17px] h-[10px] border border-black rounded-sm relative">
                        <div className="absolute inset-[1px] rounded-sm bg-black"></div>
                      </div>
                      <svg width="17" height="10" viewBox="0 0 17 10" fill="none" className="ml-0.5">
                        <rect x="0.5" y="0.5" width="16" height="9" rx="1" stroke="black" strokeWidth="1"/>
                        <path d="M2 2H15V8H2V2Z" fill="black"/>
                      </svg>
                      <svg width="15" height="11" viewBox="0 0 15 11" fill="none" className="ml-0.5">
                        <path d="M0 0H15V11H0V0Z" fill="black"/>
                        <path d="M1 1H14V10H1V1Z" fill="white"/>
                        <path d="M3 2H12V9H3V2Z" fill="black"/>
                      </svg>
                    </div>
                  </div>

                  {/* Video Container */}
                  <div className="relative w-full h-[calc(100%-44px)] bg-black flex items-center justify-center">
                    <div className="w-full h-full relative">
                      {/* Vídeo */}
                      <video
                        ref={videoRef}
                        className={`w-full h-full object-cover ${videoLoaded ? 'opacity-100' : 'opacity-0'}`}
                        controls
                        style={{ backgroundColor: '#000' }}
                        onLoadedData={handleVideoLoad}
                        onError={handleVideoError}
                        playsInline
                      >
                        <source src="/demo-video.mp4" type="video/mp4" />
                        <source src="/demo-video.webm" type="video/webm" />
                        Seu navegador não suporta o elemento de vídeo.
                      </video>
                      
                      {/* Overlay placeholder - aparece quando vídeo não está carregado */}
                      {!videoLoaded && (
                        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-b from-blue-600/20 to-black/60">
                          <div className="text-center space-y-4 px-8">
                            <div className="w-20 h-20 mx-auto rounded-full bg-[#00C853]/30 backdrop-blur-sm flex items-center justify-center border-2 border-[#00C853]/50 animate-ping">
                              <Play className="w-10 h-10 text-white ml-1" />
                            </div>
                            <div>
                              <p className="text-white font-semibold text-lg mb-1">
                                Vídeo Demonstrativo
                              </p>
                              <p className="text-white/80 text-sm max-w-xs">
                                Adicione seu vídeo em <code className="bg-black/30 px-2 py-1 rounded">/public/demo-video.mp4</code>
                              </p>
                              <p className="text-white/60 text-xs mt-2">
                                Formatos suportados: MP4, WebM
                              </p>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA abaixo do vídeo */}
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 font-medium">
              👇 Gostou? Clique abaixo e comece agora com o mesmo agente!
            </p>
            <Button
              size="lg"
              className="w-full sm:w-auto text-base lg:text-lg px-10 py-7 bg-[#00C853] hover:bg-[#00B34A] text-white font-bold shadow-xl hover:shadow-2xl hover:scale-105 transition-all"
              onClick={handleGoToCheckout}
            >
              Quero Minha IA Agora
            </Button>
          </div>

          {/* Mini Cards de Destaque */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            <div className="text-center space-y-3 p-6 bg-gray-50 dark:bg-gray-800 rounded-xl hover:shadow-lg transition-all duration-200 group">
              <div className="w-16 h-16 mx-auto rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center group-hover:scale-105 transition-all duration-200">
                <Clock className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="font-bold text-lg text-gray-900 dark:text-white flex items-center justify-center gap-2">
                ⏱️ Respostas em Segundos
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                Tire dúvidas em qualquer hora. Sem espera, sem fila, sem complicação.
              </p>
            </div>
            
            <div className="text-center space-y-3 p-6 bg-gray-50 dark:bg-gray-800 rounded-xl hover:shadow-lg transition-all duration-200 group">
              <div className="w-16 h-16 mx-auto rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center group-hover:scale-105 transition-all duration-200">
                <MessageCircle className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="font-bold text-lg text-gray-900 dark:text-white flex items-center justify-center gap-2">
                💬 Converse com Linguagem Natural
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                Fale como se estivesse com um amigo — a IA entende e explica fácil.
              </p>
            </div>
            
            <div className="text-center space-y-3 p-6 bg-gray-50 dark:bg-gray-800 rounded-xl hover:shadow-lg transition-all duration-200 group">
              <div className="w-16 h-16 mx-auto rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center group-hover:scale-105 transition-all duration-200">
                <Brain className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="font-bold text-lg text-gray-900 dark:text-white flex items-center justify-center gap-2">
                🧠 Simulados Personalizados
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                Receba simulados sob medida para seu ritmo e matérias que mais precisa reforçar.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Demo;

