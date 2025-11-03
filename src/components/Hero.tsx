import { MessageCircle, CheckCircle, Users, TrendingUp, Clock, Sparkles } from "lucide-react";

const Hero = () => {
  const handleGoToCheckout = () => {
    window.location.href = 'https://pay.kirvano.com/0108b276-b048-4524-91c3-2c8ae9b2dbae';
  };

  return (
    <section className="relative min-h-screen flex items-center bg-[#0B1120] overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:64px_64px]"></div>
      
      {/* Gradient Orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 py-32 relative z-10">
        <div className="max-w-5xl mx-auto text-center space-y-10">
          <div className="space-y-8 animate-fade-in">
            {/* Badge de urgência sofisticado */}
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-600/20 to-red-600/20 border border-orange-500/30 text-orange-300 px-6 py-3 rounded-full text-sm font-bold backdrop-blur-xl hover:scale-105 transition-transform duration-300">
              <Clock className="w-5 h-5" />
              Oferta Especial Disponível Até Domingo
            </div>
            
            {/* Título Premium */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight text-white drop-shadow-2xl tracking-tight">
              Conheça a <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-600 animate-glow">Bia</span><br/>
              Sua Mentora Inteligente para a OAB
            </h1>
            
            {/* Subtítulo */}
            <p className="text-xl md:text-2xl text-gray-400 leading-relaxed max-w-3xl mx-auto font-medium">
              Uma <strong className="text-gray-200">mentora inteligente</strong> que te guia passo a passo até a aprovação na OAB.<br/>
              Treinada com <strong className="text-gray-200">10 anos de provas</strong> e disponível 24h no WhatsApp para te ajudar a <strong className="text-gray-200">estudar menos e aprender mais</strong>.
            </p>
            
            {/* Estatística de destaque */}
            <div className="inline-block bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl px-8 py-4 shadow-2xl">
              <p className="text-2xl md:text-3xl font-bold text-emerald-400">
                89% dos alunos são aprovados na 1ª tentativa
              </p>
              <p className="text-lg text-gray-400 font-normal mt-1">
                Você pode ser o próximo.
              </p>
            </div>
            
            {/* CTAs Premium Sofisticados */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              {/* Botão Primary Ultra Premium */}
              <button
                className="group relative inline-flex items-center justify-center bg-gradient-to-b from-emerald-500 to-emerald-600 text-white font-semibold px-8 py-4 text-lg rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(16,185,129,0.5)] focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-[#0B1120] w-full sm:w-auto shadow-[0_0_20px_rgba(16,185,129,0.3)]"
                onClick={handleGoToCheckout}
                data-cta="hero_primary"
                data-variant="A"
                aria-label="Comece sua preparação com a Bia"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative z-10">Começar minha preparação</span>
              </button>
              
              {/* Botão Secondary Sofisticado */}
              <button
                className="group relative inline-flex items-center justify-center bg-white/5 backdrop-blur-xl border border-white/10 text-white hover:bg-white/10 font-medium px-8 py-4 text-lg rounded-xl transition-all duration-300 hover:scale-105 hover:border-white/20 focus:outline-none focus:ring-2 focus:ring-white/30 focus:ring-offset-2 focus:ring-offset-[#0B1120] w-full sm:w-auto"
                onClick={() => document.getElementById('conheca-bia')?.scrollIntoView({ behavior: 'smooth' })}
                data-cta="hero_secondary"
                data-variant="A"
                aria-label="Descubra como a Bia vai te ajudar"
              >
                Ver como funciona
              </button>
            </div>
            
            {/* Microtexto */}
            <p className="text-sm text-gray-500 pt-2">
              Acesso imediato • Garantia de 7 dias • Disponível 24h no WhatsApp
            </p>
            
            {/* Stats Grid Premium */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 pt-12 max-w-2xl mx-auto">
              <div className="space-y-2 bg-white/5 backdrop-blur-xl rounded-2xl p-4 sm:p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:border-emerald-500/30">
                <div className="flex items-center justify-center gap-2 text-emerald-400 font-bold text-2xl md:text-3xl">
                  <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
                  89%
                </div>
                <p className="text-xs sm:text-sm text-gray-400">Taxa de Aprovação</p>
              </div>
              <div className="space-y-2 bg-white/5 backdrop-blur-xl rounded-2xl p-4 sm:p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:border-blue-500/30">
                <div className="flex items-center justify-center gap-2 text-blue-400 font-bold text-2xl md:text-3xl">
                  <Users className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
                  5.000+
                </div>
                <p className="text-xs sm:text-sm text-gray-400">Aprovados em 2024</p>
              </div>
              <div className="space-y-2 bg-white/5 backdrop-blur-xl rounded-2xl p-4 sm:p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:border-blue-500/30">
                <div className="flex items-center justify-center gap-2 text-blue-400 font-bold text-2xl md:text-3xl">
                  <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
                  24/7
                </div>
                <p className="text-xs sm:text-sm text-gray-400">Disponível WhatsApp</p>
              </div>
            </div>

            {/* Seção de Urgência Premium */}
            <div className="mt-20 relative animate-slide-up" style={{ animationDelay: '0.3s' }}>
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-blue-500/10 rounded-3xl opacity-50 blur-2xl"></div>
              <div className="relative bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl p-8 lg:p-12 max-w-5xl mx-auto border border-white/10">
                <div className="flex justify-center mb-6">
                  <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-4 rounded-full shadow-lg">
                    <Sparkles className="w-8 h-8 text-white" />
                  </div>
                </div>
                
                <h3 className="text-3xl lg:text-4xl font-extrabold mb-6 text-center text-white tracking-tight">
                  A Bia Está Pronta Para Te Ajudar
                </h3>
                
                <div className="space-y-5 text-center mb-8">
                  <p className="text-lg lg:text-xl text-gray-400 leading-relaxed">
                    Comece hoje e tenha uma <strong className="text-gray-200">mentora IA sempre ao seu lado</strong>.<br/>
                    Já ajudamos mais de <strong className="text-gray-200">5.000 alunos a passar na OAB em 2024</strong>, agora é a sua vez.
                  </p>
                  
                  <div className="flex items-center justify-center gap-2 text-blue-400 font-bold text-xl lg:text-2xl pt-4 pb-2">
                    <span>Vamos começar sua jornada rumo à aprovação?</span>
                  </div>
                  
                  <p className="text-sm text-gray-500">
                    Aproveite a condição especial antes do próximo reajuste de preço.
                  </p>
                </div>
                
                <div className="flex justify-center">
                  <button
                    className="group relative inline-flex items-center justify-center bg-gradient-to-b from-emerald-500 to-emerald-600 text-white font-semibold px-10 py-5 text-lg rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(16,185,129,0.5)] focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-[#0B1120] shadow-[0_0_20px_rgba(16,185,129,0.3)]"
                    onClick={handleGoToCheckout}
                    data-cta="hero_urgency"
                    data-variant="A"
                    aria-label="Dar meu primeiro passo com a Bia"
                  >
                    <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <MessageCircle className="mr-2 h-5 w-5 relative z-10" />
                    <span className="relative z-10">Começar agora</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
