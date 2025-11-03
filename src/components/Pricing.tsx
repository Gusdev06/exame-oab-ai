import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Shield, Zap, Lock, MessageCircle } from "lucide-react";

const Pricing = () => {
  const handleGoToCheckout = () => {
    window.location.href = 'https://pay.kirvano.com/0108b276-b048-4524-91c3-2c8ae9b2dbae';
  };

  const features = [
    "Mentora IA disponível 24/7 no WhatsApp",
    "Simulados personalizados e adaptativos",
    "Revisões automáticas e explicações detalhadas",
    "Base com 10 anos de provas da OAB",
    "Plano de estudos adaptado ao seu ritmo",
    "Garantia de 7 dias • Pagamento 100% seguro"
  ];

  return (
    <section id="precos" className="py-24 md:py-32 bg-[#0B1120] relative overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.02)_1px,transparent_1px)] bg-[size:64px_64px]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 px-5 py-2.5 rounded-full text-sm font-semibold mb-8 backdrop-blur-xl">
            <MessageCircle className="w-4 h-4" />
            Plano Mensal
          </div>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-white mb-6 tracking-tight">
            Menos de R$1 por Dia Para Mudar Sua Carreira
          </h2>
          <p className="text-lg lg:text-xl text-gray-400 leading-relaxed">
            Acesso completo por apenas <strong className="text-white">R$19,99/mês</strong>.<br/>
            Sua mentora inteligente disponível 24h no WhatsApp.
          </p>
        </div>

        <div className="max-w-lg mx-auto">
          <Card className="bg-white/5 backdrop-blur-xl shadow-2xl rounded-3xl border-2 border-white/10 relative overflow-hidden animate-fade-in hover:shadow-[0_0_60px_rgba(59,130,246,0.3)] transition-all duration-500">
            {/* Badge "MAIS POPULAR" Premium */}
            <div className="absolute top-0 right-0 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-3 rounded-bl-3xl text-xs font-bold z-10 shadow-lg shadow-blue-500/50">
              MAIS POPULAR
            </div>

            <CardContent className="p-10">
              <div className="space-y-8">
                <div className="text-center">
                  <h3 className="text-3xl font-extrabold text-white mb-4 tracking-tight">Plano Mensal</h3>
                  <div className="flex items-baseline justify-center gap-2 mb-4">
                    <span className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">R$ 19,99</span>
                    <span className="text-xl text-gray-400 font-medium">/mês</span>
                  </div>
                  <p className="text-base text-gray-400">
                    Apenas <span className="font-bold text-white">R$ 0,67 por dia</span> - menos que um cafezinho
                  </p>
                </div>

                {/* Features Premium */}
                <ul className="space-y-4 text-gray-300 border-t-2 border-white/10 pt-8">
                  {features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3 group">
                      <CheckCircle2 className="w-6 h-6 text-emerald-400 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform duration-200" />
                      <span className="font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Premium Sofisticado */}
                <button
                  className="group relative inline-flex items-center justify-center bg-gradient-to-b from-emerald-500 to-emerald-600 text-white font-bold px-8 py-5 text-lg rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(16,185,129,0.6)] focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-[#0B1120] w-full shadow-[0_0_25px_rgba(16,185,129,0.4)] animate-pulse-slow"
                  onClick={handleGoToCheckout}
                  data-cta="pricing_primary"
                  data-variant="A"
                  aria-label="Garantir meu acesso com a Bia agora"
                >
                  <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <MessageCircle className="mr-2 h-6 w-6 relative z-10" />
                  <span className="relative z-10">Garantir meu acesso agora</span>
                </button>

                <p className="text-xs text-center text-gray-500 mt-4">
                  Acesso em 5 minutos • Garantia de 7 dias • Sem fidelidade
                </p>

                {/* Trust Elements Premium */}
                <div className="space-y-3 pt-6 border-t-2 border-white/10">
                  <div className="flex items-center gap-3 text-sm text-gray-300 p-3 bg-emerald-500/10 border border-emerald-500/20 rounded-xl hover:bg-emerald-500/15 transition-colors duration-200">
                    <Shield className="w-6 h-6 text-emerald-400 flex-shrink-0" />
                    <span className="font-medium">Garantia de 7 dias - 100% reembolso</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-300 p-3 bg-blue-500/10 border border-blue-500/20 rounded-xl hover:bg-blue-500/15 transition-colors duration-200">
                    <Lock className="w-6 h-6 text-blue-400 flex-shrink-0" />
                    <span className="font-medium">Pagamento seguro e criptografado</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-300 p-3 bg-blue-500/10 border border-blue-500/20 rounded-xl hover:bg-blue-500/15 transition-colors duration-200">
                    <Zap className="w-6 h-6 text-blue-400 flex-shrink-0" />
                    <span className="font-medium">Acesso liberado imediatamente</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
