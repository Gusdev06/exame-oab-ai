import { MessageCircle, Lock } from "lucide-react";

const CTA = () => {
  const handleGoToCheckout = () => {
    window.location.href = 'https://pay.kirvano.com/0108b276-b048-4524-91c3-2c8ae9b2dbae';
  };

  return (
    <section className="py-24 md:py-32 bg-[#0B1120] relative overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:64px_64px]"></div>
      
      {/* Gradient Orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white space-y-10">
          <h2 className="text-4xl lg:text-6xl font-extrabold leading-tight drop-shadow-2xl tracking-tight animate-fade-in">
            Está Pronto Para Conquistar Sua Carteira da OAB com a <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-600 animate-glow">Bia</span>?
          </h2>
          
          <p className="text-xl lg:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed font-medium">
            Sua mentora inteligente está pronta para te guiar passo a passo até a aprovação.<br/>
            Mais de <strong className="text-gray-200">5.000 estudantes</strong> já conquistaram sua carteira, agora é a sua vez.
          </p>

          {/* Frase Emocional Premium */}
          <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 lg:p-10 max-w-2xl mx-auto border border-white/10 shadow-2xl hover:bg-white/10 transition-all duration-300 animate-slide-up">
            <p className="text-2xl lg:text-3xl font-extrabold text-white mb-3 drop-shadow-md tracking-tight">
              Acreditamos no seu potencial
            </p>
            <p className="text-base lg:text-lg text-gray-400 leading-relaxed">
              Já ajudamos milhares de alunos a conquistarem seus sonhos. Você será o próximo.
            </p>
          </div>

          {/* CTA Principal Premium Sofisticado */}
          <div className="pt-6">
            <button
              className="group relative inline-flex items-center justify-center bg-gradient-to-b from-emerald-500 to-emerald-600 text-white font-bold px-12 py-6 text-xl lg:text-2xl rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_60px_rgba(16,185,129,0.7)] focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-[#0B1120] w-full sm:w-auto shadow-[0_0_30px_rgba(16,185,129,0.4)]"
              onClick={handleGoToCheckout}
              data-cta="closing_primary"
              data-variant="A"
              aria-label="Quero que a Bia me acompanhe até a aprovação"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <MessageCircle className="mr-3 h-7 w-7 relative z-10" />
              <span className="relative z-10">Começar minha jornada agora</span>
            </button>
          </div>

          <p className="text-base lg:text-lg text-gray-500 mt-6">
            Acesso imediato • Garantia de 7 dias • Cancele quando quiser
          </p>
          
          {/* Trust Badges Premium */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 lg:gap-10 pt-8 text-sm lg:text-base">
            <div className="flex items-center gap-3 bg-white/5 backdrop-blur-xl border border-white/10 px-6 py-3 rounded-full hover:bg-white/10 hover:border-white/20 transition-all duration-300">
              <Lock className="w-5 h-5 text-emerald-400" />
              <span className="font-medium text-white">Pagamento 100% seguro</span>
            </div>
            <div className="flex items-center gap-3 bg-white/5 backdrop-blur-xl border border-white/10 px-6 py-3 rounded-full hover:bg-white/10 hover:border-white/20 transition-all duration-300">
              <MessageCircle className="w-5 h-5 text-emerald-400" />
              <span className="font-medium text-white">Disponível 24h no WhatsApp</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
