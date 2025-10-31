import { Card, CardContent } from "@/components/ui/card";
import { TrendingDown, Clock, Target, Zap } from "lucide-react";

const benefits = [
  {
    icon: TrendingDown,
    title: "Economize R$ 4.800+",
    description: "Cursinhos tradicionais custam entre R$ 200-400/mês. Com a IA, você paga uma fração disso e tem acesso ilimitado 24/7.",
    highlight: "12x mais barato"
  },
  {
    icon: Clock,
    title: "Ganhe 15h por Semana",
    description: "Sem deslocamento, sem aulas gravadas intermináveis. Vá direto ao ponto nas suas dúvidas e economize tempo precioso.",
    highlight: "60h/mês economizadas"
  },
  {
    icon: Target,
    title: "Estude 3x Mais Rápido",
    description: "A IA identifica suas lacunas e foca exatamente no que você precisa melhorar. Nada de estudar o que já sabe.",
    highlight: "Aprendizado focado"
  },
  {
    icon: Zap,
    title: "Respostas em Segundos",
    description: "Esqueça esperar dias por resposta de tutores. Tire dúvidas instantaneamente, quantas vezes precisar.",
    highlight: "Sem limites de perguntas"
  }
];

const ValueProposition = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Por Que Escolher a <span className="text-primary">IA em vez de Cursinhos</span>?
          </h2>
          <p className="text-xl text-muted-foreground">
            Compare os benefícios e veja quanto você vai economizar em tempo e dinheiro
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
          {benefits.map((benefit, index) => (
            <Card 
              key={index}
              className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-xl group"
            >
              <CardContent className="p-8 space-y-4">
                <div className="flex items-start justify-between">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center group-hover:scale-110 transition-transform">
                    <benefit.icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <span className="text-sm font-semibold text-success bg-success/10 px-3 py-1 rounded-full">
                    {benefit.highlight}
                  </span>
                </div>
                <h3 className="text-2xl font-bold">{benefit.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="bg-gradient-to-r from-primary/10 via-accent/10 to-success/10 rounded-2xl p-8 max-w-4xl mx-auto border-2 border-primary/20">
          <div className="text-center space-y-4">
            <h3 className="text-3xl font-bold">Investimento Total em 1 Ano</h3>
            <div className="grid md:grid-cols-2 gap-8 mt-8">
              <div className="space-y-2">
                <p className="text-muted-foreground font-medium">Cursinho Tradicional</p>
                <p className="text-4xl font-bold line-through text-muted-foreground">R$ 4.800</p>
                <p className="text-sm text-muted-foreground">+ Tempo de deslocamento</p>
              </div>
              <div className="space-y-2">
                <p className="text-success font-medium">OAB IA (Anual)</p>
                <p className="text-5xl font-bold text-success">R$ 397</p>
                <p className="text-sm text-success">Acesso ilimitado 24/7</p>
              </div>
            </div>
            <p className="text-xl font-semibold text-primary pt-4">
              💰 Você economiza R$ 4.403 e ainda estuda melhor!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
