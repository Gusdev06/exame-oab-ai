import { Brain, Clock, Target, Zap, Database, MessageSquare } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: Brain,
    title: "💡 IA Especializada em OAB",
    description: "Treinada com 10 anos de provas oficiais. Sabe exatamente o que a banca cobra e como você deve responder para acertar mais."
  },
  {
    icon: MessageSquare,
    title: "⚡ Respostas Instantâneas 24/7",
    description: "Tire dúvidas a qualquer hora direto no WhatsApp. Sem espera, sem enrolação. É como ter um professor particular no bolso."
  },
  {
    icon: Target,
    title: "🎯 Simulados Inteligentes",
    description: "Questões adaptadas ao seu nível e dificuldade real. Foco total no que você precisa melhorar para atingir 40 pontos."
  },
  {
    icon: Database,
    title: "📚 Base Completa com 10 Anos de Provas",
    description: "Tenha acesso a todas as questões oficiais da OAB, organizadas por tema, disciplina e nível de dificuldade."
  },
  {
    icon: Clock,
    title: "🕓 Flexibilidade Total",
    description: "Estude onde e quando quiser no ônibus, na pausa do trabalho ou em casa. Você define o ritmo, a IA guia o caminho."
  },
  {
    icon: Zap,
    title: "🚀 Aprendizado 7x Mais Rápido",
    description: "Revisões automáticas, mapas mentais e técnicas de memorização baseadas em IA para você dominar o conteúdo em menos tempo."
  }
];

const Features = () => {
  return (
    <section className="py-24 bg-gray-50 dark:bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Zap className="w-4 h-4" />
            Recursos Exclusivos
          </div>
          <h2 className="text-4xl lg:text-5xl font-extrabold mb-6 leading-tight text-gray-900 dark:text-white">
            Tudo Que Você Precisa Para Passar na OAB em Um Só Lugar
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
            Tecnologia de ponta que já aprovou mais de <strong className="text-gray-900 dark:text-white">5.000 estudantes</strong>.<br/>
            Acelere sua preparação até <strong className="text-blue-700 dark:text-blue-400">7x mais rápido</strong> com o poder da IA.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 hover:border-blue-300 dark:hover:border-blue-700 transition-all duration-200 ease-in-out hover:shadow-lg hover:scale-105 group"
            >
              <CardContent className="p-6 space-y-4">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
