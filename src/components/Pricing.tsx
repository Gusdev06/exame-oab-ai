import { Button } from "@/components/ui/button";
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
    <section className="py-20 bg-gray-50 dark:bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <MessageCircle className="w-4 h-4" />
            Plano Mensal
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            💰 Menos de R$1 por Dia Para Mudar Sua Carreira
          </h2>
          <p className="text-lg lg:text-xl text-gray-600 dark:text-gray-400">
            Acesso completo por apenas <strong className="text-gray-900 dark:text-white">R$19,99/mês</strong>.<br/>
            Sua mentora inteligente disponível 24h no WhatsApp.
          </p>
        </div>

        <div className="max-w-lg mx-auto">
          <Card className="bg-white dark:bg-gray-900 shadow-2xl rounded-2xl border-2 border-blue-200 dark:border-blue-800 relative overflow-hidden">
            {/* Badge "MAIS POPULAR" */}
            <div className="absolute top-0 right-0 bg-blue-600 text-white px-6 py-2 rounded-bl-2xl text-xs font-bold z-10">
              MAIS POPULAR
            </div>

            <CardContent className="p-8">
              <div className="space-y-6">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Plano Mensal</h3>
                  <div className="flex items-baseline justify-center gap-2 mb-3">
                    <span className="text-5xl font-extrabold text-blue-600 dark:text-blue-400">R$ 19,99</span>
                    <span className="text-lg text-gray-500 dark:text-gray-400">/mês</span>
                  </div>
                  <p className="text-base text-gray-600 dark:text-gray-400">
                    Apenas <span className="font-bold">R$ 0,67 por dia</span> - menos que um cafezinho ☕
                  </p>
                </div>

                {/* Features */}
                <ul className="space-y-3 text-gray-700 dark:text-gray-300 border-t border-gray-200 dark:border-gray-700 pt-6">
                  {features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-500 mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <button
                  className="inline-flex items-center justify-center bg-[#00C853] hover:bg-[#00B34A] text-white font-semibold px-8 py-4 text-lg rounded-xl transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#00C853] shadow-xl hover:shadow-2xl w-full"
                  onClick={handleGoToCheckout}
                  data-cta="pricing_primary"
                  data-variant="A"
                  aria-label="Garantir meu acesso com a Bia agora"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  💳 Garantir meu acesso com a Bia agora
                </button>

                <p className="text-xs text-center text-gray-500 dark:text-gray-400 mt-3">
                  Acesso em 5 minutos • Garantia de 7 dias • Sem fidelidade
                </p>

                {/* Trust Elements */}
                <div className="space-y-2 pt-4 border-t border-gray-200 dark:border-gray-700">
                  <div className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-400">
                    <Shield className="w-5 h-5 text-green-600 dark:text-green-500 flex-shrink-0" />
                    <span>Garantia de 7 dias - 100% reembolso</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-400">
                    <Lock className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                    <span>Pagamento seguro e criptografado</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-400">
                    <Zap className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                    <span>Acesso liberado imediatamente</span>
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

