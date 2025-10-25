import { Button } from "@/components/ui/button";
import { MessageCircle, CheckCircle, Users, TrendingUp } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-b from-background to-secondary/30 overflow-hidden">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-8 animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-success/10 text-success px-4 py-2 rounded-full text-sm font-medium">
              <CheckCircle className="w-4 h-4" />
              Mais de 5.000 aprovados em 2024
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
              Sua <span className="bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">Aprovação na OAB</span> Começa no WhatsApp
            </h1>
            
            <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Agente de IA treinado com <strong>10 anos de provas da OAB</strong>. 
              Estude de forma inteligente, tire dúvidas instantaneamente e simule 
              questões reais direto no seu celular.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="text-lg px-8 py-6 bg-gradient-to-r from-success to-success-glow hover:opacity-90 transition-all shadow-lg hover:shadow-xl"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Começar Agora no WhatsApp
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="text-lg px-8 py-6 border-2"
              >
                Ver Como Funciona
              </Button>
            </div>
            
            <div className="grid grid-cols-3 gap-6 pt-8 max-w-2xl mx-auto">
              <div className="space-y-1">
                <div className="flex items-center justify-center gap-2 text-primary font-bold text-2xl">
                  <TrendingUp className="w-6 h-6" />
                  89%
                </div>
                <p className="text-sm text-muted-foreground">Taxa de Aprovação</p>
              </div>
              <div className="space-y-1">
                <div className="flex items-center justify-center gap-2 text-primary font-bold text-2xl">
                  <Users className="w-6 h-6" />
                  12K+
                </div>
                <p className="text-sm text-muted-foreground">Estudantes Ativos</p>
              </div>
              <div className="space-y-1">
                <div className="flex items-center justify-center gap-2 text-primary font-bold text-2xl">
                  <CheckCircle className="w-6 h-6" />
                  24/7
                </div>
                <p className="text-sm text-muted-foreground">Suporte IA</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
