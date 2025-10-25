import { Button } from "@/components/ui/button";
import { MessageCircle, CheckCircle, Users, TrendingUp } from "lucide-react";
import heroImage from "@/assets/hero-oab.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-b from-background to-secondary/30 overflow-hidden">
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-success/10 text-success px-4 py-2 rounded-full text-sm font-medium">
              <CheckCircle className="w-4 h-4" />
              Mais de 5.000 aprovados em 2024
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              Sua <span className="bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">Aprovação na OAB</span> Começa no WhatsApp
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed">
              Agente de IA treinado com <strong>10 anos de provas da OAB</strong>. 
              Estude de forma inteligente, tire dúvidas instantaneamente e simule 
              questões reais direto no seu celular.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
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
            
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-primary font-bold text-2xl">
                  <TrendingUp className="w-6 h-6" />
                  89%
                </div>
                <p className="text-sm text-muted-foreground">Taxa de Aprovação</p>
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-primary font-bold text-2xl">
                  <Users className="w-6 h-6" />
                  12K+
                </div>
                <p className="text-sm text-muted-foreground">Estudantes Ativos</p>
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-primary font-bold text-2xl">
                  <CheckCircle className="w-6 h-6" />
                  24/7
                </div>
                <p className="text-sm text-muted-foreground">Suporte IA</p>
              </div>
            </div>
          </div>
          
          <div className="relative lg:block hidden">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={heroImage} 
                alt="Estudante de Direito usando IA para estudar para OAB" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
            <div className="absolute -top-6 -left-6 w-72 h-72 bg-success/10 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
