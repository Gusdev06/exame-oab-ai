import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Brain, Clock, Target, MessageCircle, Sparkles, TrendingUp } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "🧠 Analisa Seu Desempenho",
    description: "Estuda seu jeito de aprender e identifica exatamente onde você precisa melhorar. Cria um plano de estudos personalizado só para você."
  },
  {
    icon: Target,
    title: "🎯 Foca no Que Mais Cai",
    description: "Treinada com 10 anos de provas da OAB, sabe exatamente o que a banca cobra. Te mostra os temas mais importantes e te prepara para acertar."
  },
  {
    icon: Clock,
    title: "⏰ Disponível 24h no WhatsApp",
    description: "Dúvida às 3h da manhã? Precisa revisar antes da prova? É como ter uma mentora sempre ao seu lado, pronta para ajudar."
  },
  {
    icon: Sparkles,
    title: "✨ Explica de Forma Clara",
    description: "Chega de linguagem complicada. Explicações simples e diretas, do jeito que você precisa para entender de verdade."
  }
];

const MeetBia = () => {
  const handleGoToCheckout = () => {
    window.location.href = 'https://pay.kirvano.com/0108b276-b048-4524-91c3-2c8ae9b2dbae';
  };

  return (
    <section id="conheca-bia" className="py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        {/* Header com animação fade-up */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            Sua Parceira de Estudos
          </div>
          <h2 className="text-4xl lg:text-5xl font-extrabold mb-6 leading-tight text-gray-900 dark:text-white">
            👋 Conheça a Bia — Sua Mentora Inteligente Rumo à Aprovação na OAB
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
            Ela analisa seu desempenho, cria planos de estudo personalizados e te ajuda a revisar o que mais cai.<br/>
            <strong className="text-gray-900 dark:text-white">Mais que uma IA — é a parceira que te guia até a aprovação.</strong>
          </p>
        </div>
        
        {/* Features Grid com animação */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="bg-gray-50 dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 hover:border-blue-400 dark:hover:border-blue-600 transition-all duration-300 hover:shadow-xl hover:scale-105 group animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-8 space-y-4">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{feature.title}</h3>
                <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Seção Emocional */}
        <div className="max-w-4xl mx-auto text-center space-y-8 bg-gradient-to-br from-blue-50 to-green-50 dark:from-blue-950/20 dark:to-green-950/20 rounded-3xl p-8 lg:p-12 border-2 border-blue-200 dark:border-blue-800">
          <div className="space-y-4">
            <p className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white leading-tight">
              💬 "Com a Bia, você não estuda sozinho."
            </p>
            <p className="text-lg lg:text-xl text-gray-600 dark:text-gray-400">
              Te acompanha em cada etapa da jornada — desde o primeiro dia de estudos até o momento em que você segurar sua carteira da OAB nas mãos.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto py-6">
            <div className="space-y-2">
              <p className="text-3xl lg:text-4xl font-bold text-green-600 dark:text-green-500">89%</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Aprovação com a Bia</p>
            </div>
            <div className="space-y-2">
              <p className="text-3xl lg:text-4xl font-bold text-blue-600 dark:text-blue-400">24h</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Disponível no WhatsApp</p>
            </div>
            <div className="space-y-2">
              <p className="text-3xl lg:text-4xl font-bold text-blue-600 dark:text-blue-400">10 anos</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">De provas da OAB</p>
            </div>
          </div>

          {/* CTA */}
          <div className="pt-4">
            <div className="flex flex-wrap gap-3 justify-center">
              <button
                className="inline-flex items-center justify-center bg-[#00C853] hover:bg-[#00B34A] text-white font-semibold px-8 py-4 text-base lg:text-lg rounded-xl transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#00C853] shadow-xl hover:shadow-2xl w-full sm:w-auto"
                onClick={handleGoToCheckout}
                data-cta="persona_primary"
                data-variant="A"
                aria-label="Quero conhecer a Bia"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                👋 Quero conhecer a Bia
              </button>
              <button
                className="inline-flex items-center justify-center border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800 font-medium px-8 py-4 text-base lg:text-lg rounded-xl transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 w-full sm:w-auto"
                onClick={handleGoToCheckout}
                data-cta="persona_secondary"
                data-variant="A"
                aria-label="Ver como a Bia personaliza meus estudos"
              >
                💬 Ver como a Bia personaliza meus estudos
              </button>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-4">
              Acesso imediato • Garantia de 7 dias • Te espera no WhatsApp
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeetBia;

