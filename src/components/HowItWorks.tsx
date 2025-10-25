import { MessageCircle, Brain, Trophy } from "lucide-react";

const steps = [
  {
    icon: MessageCircle,
    number: "01",
    title: "Conecte no WhatsApp",
    description: "Clique no botão e inicie sua conversa com o agente de IA. Sem cadastros complicados."
  },
  {
    icon: Brain,
    number: "02",
    title: "Estude e Pratique",
    description: "Tire dúvidas, faça simulados e receba explicações detalhadas sobre qualquer tema da OAB."
  },
  {
    icon: Trophy,
    number: "03",
    title: "Seja Aprovado",
    description: "Acompanhe seu progresso e evolua até conquistar sua aprovação na prova da OAB."
  }
];

const HowItWorks = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-secondary/30 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Como Funciona?
          </h2>
          <p className="text-xl text-muted-foreground">
            Começar é simples. Em 3 passos você está pronto para estudar de forma inteligente.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="relative text-center space-y-6">
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-20 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-primary/50 to-transparent"></div>
              )}
              
              <div className="relative inline-flex">
                <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl"></div>
                <div className="relative w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center shadow-lg">
                  <step.icon className="w-12 h-12 text-primary-foreground" />
                </div>
                <div className="absolute -top-2 -right-2 w-10 h-10 rounded-full bg-success text-success-foreground flex items-center justify-center text-sm font-bold shadow-md">
                  {step.number}
                </div>
              </div>
              
              <div className="space-y-3">
                <h3 className="text-2xl font-bold">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
