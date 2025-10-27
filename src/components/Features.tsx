import { Brain, Clock, Target, Zap, Database, MessageSquare } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: Brain,
    title: "IA Especializada em OAB",
    description: "Treinada com milhares de questões dos últimos 10 anos. Entende exatamente o que a banca cobra."
  },
  {
    icon: MessageSquare,
    title: "Respostas Instantâneas",
    description: "Tire suas dúvidas a qualquer hora, direto no WhatsApp. Sem espera, sem complicação."
  },
  {
    icon: Target,
    title: "Simulados Personalizados",
    description: "Questões adaptadas ao seu nível e áreas de dificuldade. Foco no que realmente importa."
  },
  {
    icon: Database,
    title: "Estudo estratégico",
    description: "Estude de forma direcionada e eficiente. O agente elimina desperdício de tempo e guia você até a aprovação."
  },
  {
    icon: Clock,
    title: "Estude no Seu Ritmo",
    description: "Disponível 24/7. Estude quando e onde quiser, no seu tempo livre."
  },
  {
    icon: Zap,
    title: "Aprendizado Acelerado",
    description: "Revisões inteligentes e mapas mentais gerados automaticamente pela IA."
  }
];

const Features = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Tudo Que Você Precisa Para <span className="text-primary">Passar na OAB</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Tecnologia de ponta para acelerar sua preparação e aumentar suas chances de aprovação
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg group"
            >
              <CardContent className="p-6 space-y-4">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center group-hover:scale-110 transition-transform">
                  <feature.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
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
