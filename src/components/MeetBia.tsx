import { Card, CardContent } from "@/components/ui/card";
import { Brain, Clock, Target, MessageCircle, Sparkles } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "Analisa Seu Desempenho",
    description: "Estuda seu jeito de aprender e identifica exatamente onde você precisa melhorar. Cria um plano de estudos personalizado só para você."
  },
  {
    icon: Target,
    title: "Foca no Que Mais Cai",
    description: "Treinada com 10 anos de provas da OAB, sabe exatamente o que a banca cobra. Te mostra os temas mais importantes e te prepara para acertar."
  },
  {
    icon: Clock,
    title: "Disponível 24h no WhatsApp",
    description: "Dúvida às 3h da manhã? Precisa revisar antes da prova? É como ter uma mentora sempre ao seu lado, pronta para ajudar."
  },
  {
    icon: Sparkles,
    title: "Explica de Forma Clara",
    description: "Chega de linguagem complicada. Explicações simples e diretas, do jeito que você precisa para entender de verdade."
  }
];

const MeetBia = () => {
  const handleGoToCheckout = () => {
    window.location.href = 'https://pay.kirvano.com/0108b276-b048-4524-91c3-2c8ae9b2dbae';
  };

  return (
    <section id="conheca-bia" className="py-24 md:py-32 bg-[#0F1419] relative overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.02)_1px,transparent_1px)] bg-[size:64px_64px]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header Premium */}
        <div className="text-center max-w-3xl mx-auto mb-20 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 text-blue-400 px-5 py-2.5 rounded-full text-sm font-semibold mb-8 backdrop-blur-xl">
            <Sparkles className="w-4 h-4" />
            Sua Parceira de Estudos
          </div>
          <h2 className="text-4xl lg:text-5xl font-extrabold mb-6 leading-tight text-white tracking-tight">
            Conheça a <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-600">Bia</span> sua mentora inteligente rumo à aprovação na OAB
          </h2>
          <p className="text-xl text-gray-400 leading-relaxed">
            Ela analisa seu desempenho, cria planos de estudo personalizados e te ajuda a revisar o que mais cai.<br/>
            <strong className="text-gray-200">Mais que uma IA, é a parceira que te guia até a aprovação.</strong>
          </p>
        </div>
        
        {/* Features Grid Premium */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-20">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="bg-white/5 backdrop-blur-xl border-2 border-white/10 hover:border-blue-500/30 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 group animate-fade-in rounded-3xl"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-8 space-y-5">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-blue-500/50">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">{feature.title}</h3>
                <p className="text-lg text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Seção Emocional Premium */}
        <div className="max-w-5xl mx-auto text-center space-y-10 bg-white/5 backdrop-blur-xl shadow-2xl rounded-3xl p-10 lg:p-16 border border-white/10 animate-slide-up">
          <div className="space-y-6">
            <p className="text-3xl lg:text-4xl font-bold text-white leading-tight tracking-tight">
              Com a <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-600">Bia</span>, você não estuda sozinho
            </p>
            <p className="text-lg lg:text-xl text-gray-400 leading-relaxed max-w-3xl mx-auto">
              Te acompanha em cada etapa da jornada, desde o primeiro dia de estudos até o momento em que você segurar sua carteira da OAB nas mãos.
            </p>
          </div>

          {/* Stats Premium */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8 max-w-3xl mx-auto py-8">
            <div className="space-y-2 sm:space-y-3 p-4 sm:p-6 bg-emerald-500/10 border border-emerald-500/20 rounded-2xl hover:border-emerald-500/40 transition-all duration-300">
              <p className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-emerald-400">89%</p>
              <p className="text-xs sm:text-sm font-medium text-gray-400">Aprovação com a Bia</p>
            </div>
            <div className="space-y-2 sm:space-y-3 p-4 sm:p-6 bg-blue-500/10 border border-blue-500/20 rounded-2xl hover:border-blue-500/40 transition-all duration-300">
              <p className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-blue-400">24h</p>
              <p className="text-xs sm:text-sm font-medium text-gray-400">Disponível no WhatsApp</p>
            </div>
            <div className="space-y-2 sm:space-y-3 p-4 sm:p-6 bg-blue-500/10 border border-blue-500/20 rounded-2xl hover:border-blue-500/40 transition-all duration-300">
              <p className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-blue-400">10 anos</p>
              <p className="text-xs sm:text-sm font-medium text-gray-400">De provas da OAB</p>
            </div>
          </div>

          {/* CTA Premium */}
          <div className="pt-6">
            <div className="flex flex-wrap gap-4 justify-center">
              <button
                className="group relative inline-flex items-center justify-center bg-gradient-to-b from-emerald-500 to-emerald-600 text-white font-semibold px-8 py-4 text-base lg:text-lg rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(16,185,129,0.5)] focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-[#0F1419] w-full sm:w-auto shadow-[0_0_20px_rgba(16,185,129,0.3)]"
                onClick={handleGoToCheckout}
                data-cta="persona_primary"
                data-variant="A"
                aria-label="Quero conhecer a Bia"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <MessageCircle className="mr-2 h-5 w-5 relative z-10" />
                <span className="relative z-10">Conhecer a Bia</span>
              </button>
              <button
                className="inline-flex items-center justify-center bg-white/5 backdrop-blur-xl border border-white/10 text-white hover:bg-white/10 font-medium px-8 py-4 text-base lg:text-lg rounded-xl transition-all duration-300 hover:scale-105 hover:border-white/20 focus:outline-none focus:ring-2 focus:ring-white/30 focus:ring-offset-2 focus:ring-offset-[#0F1419] w-full sm:w-auto"
                onClick={handleGoToCheckout}
                data-cta="persona_secondary"
                data-variant="A"
                aria-label="Ver como a Bia personaliza meus estudos"
              >
                Ver planos personalizados
              </button>
            </div>
            <p className="text-sm text-gray-500 mt-6">
              Acesso imediato • Garantia de 7 dias • Te espera no WhatsApp
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeetBia;
