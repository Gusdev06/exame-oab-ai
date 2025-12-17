import { MessageCircle, Brain, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";

const steps = [
  {
    icon: MessageCircle,
    number: "01",
    title: "Inscreva-se em 2 Minutos",
    description: "Preencha seus dados e finalize o pagamento 100% seguro.",
    note: "Em menos tempo do que leva para fazer um café, você já estará pronto para começar."
  },
  {
    icon: Brain,
    number: "02",
    title: "Receba Acesso Imediato",
    description: "Em até 5 minutos, você receberá uma mensagem de boas-vindas no WhatsApp com todas as instruções.",
    note: "A IA já estará pronta para te ajudar 24h."
  },
  {
    icon: Trophy,
    number: "03",
    title: "Estude com IA e Conquiste sua Carteirinha da OAB",
    description: "Tire dúvidas em segundos, faça simulados personalizados e veja sua evolução diária.",
    note: "Estudar nunca foi tão prático e eficiente."
  }
];

const HowItWorks = () => {
  const handleGoToCheckout = () => {
    window.location.href = 'https://pay.cakto.com.br/78t42ev_686798';
  };

  return (
    <section id="como-funciona" className="py-20 mt-20 bg-gray-50 dark:bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Trophy className="w-4 h-4" />
            Processo Simples e Rápido
          </div>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 dark:text-white mb-6">
            🚀 Veja Como É Fácil Começar e Passar com IA
          </h2>
          <p className="text-lg lg:text-xl text-gray-600 dark:text-gray-400">
            Em apenas <strong className="text-gray-900 dark:text-white">3 passos simples</strong>, você começa a estudar com inteligência artificial e dá o primeiro passo rumo à sua aprovação.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 max-w-6xl mx-auto mb-16">
          {steps.map((step, index) => (
            <div key={index} className="relative text-center space-y-6 group">
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-20 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-blue-500 to-transparent"></div>
              )}
              
              <div className="relative inline-flex">
                <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-xl animate-pulse"></div>
                <div className="relative w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center shadow-lg group-hover:scale-105 transition-all duration-200">
                  <step.icon className="w-12 h-12 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-10 h-10 rounded-full bg-[#00C853] text-white flex items-center justify-center text-sm font-bold shadow-md">
                  {step.number}
                </div>
              </div>
              
              <div className="space-y-3">
                <h3 className="text-xl lg:text-2xl font-bold text-gray-900 dark:text-white">{step.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {step.description}
                </p>
                <p className="text-sm text-blue-700 dark:text-blue-400 italic font-medium">
                  💡 {step.note}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center max-w-2xl mx-auto">
          <Button
            size="lg"
            className="w-full sm:w-auto text-base lg:text-lg px-10 py-7 bg-[#00C853] hover:bg-[#00B34A] text-white font-bold shadow-xl hover:shadow-2xl hover:scale-105 transition-all"
            onClick={handleGoToCheckout}
          >
            Quero Começar com o Agente de IA
          </Button>
          <p className="text-xs lg:text-sm text-gray-600 dark:text-gray-400 mt-4">
            Acesso imediato • Garantia de 7 dias • Tire dúvidas 24h pelo WhatsApp
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
