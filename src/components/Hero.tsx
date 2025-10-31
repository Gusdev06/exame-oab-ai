import { Button } from "@/components/ui/button";
import { MessageCircle, CheckCircle, Users, TrendingUp, Clock, Zap } from "lucide-react";

const Hero = () => {
  const handleGoToCheckout = () => {
    window.location.href = 'https://pay.kirvano.com/0108b276-b048-4524-91c3-2c8ae9b2dbae';
  };

  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-b from-background to-secondary/30 overflow-hidden">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-8 animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-600 to-red-600 text-white px-6 py-3 rounded-full text-sm font-bold shadow-lg">
              <Clock className="w-5 h-5" />
              Oferta Especial Disponível Até Domingo
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
              Passe na OAB de forma <br/>
              <span className="bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">inteligente com IA</span> ⚖️
            </h1>
            
            <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Estude com o mesmo agente de IA treinado com <strong>10 anos de provas da OAB</strong>.<br/>
              Tenha resumos, simulados e explicações instantâneas direto no WhatsApp 24h — e descubra como <strong>estudar menos e aprender mais</strong>.
            </p>
            
            <p className="text-2xl font-bold text-success">
              🚀 89% dos alunos aprovam na 1ª tentativa.<br/>
              <span className="text-xl text-muted-foreground font-normal">Você pode ser o próximo.</span>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="text-lg px-8 py-6 bg-gradient-to-r from-success to-success-glow hover:opacity-90 transition-all shadow-lg hover:shadow-xl hover:scale-105"
                onClick={handleGoToCheckout}
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Quero Começar com o Agente de IA
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="text-lg px-8 py-6 border-2 hover:bg-secondary"
                onClick={() => document.getElementById('como-funciona')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Ver Como Funciona
              </Button>
            </div>
            <p className="text-sm text-muted-foreground">
              ✓ Acesso imediato • Garantia de 7 dias • Tire dúvidas 24h pelo WhatsApp
            </p>
            
            <div className="grid grid-cols-3 gap-6 pt-8 max-w-2xl mx-auto">
              <div className="space-y-1">
                <div className="flex items-center justify-center gap-2 text-success font-bold text-2xl">
                  <CheckCircle className="w-6 h-6" />
                  89%
                </div>
                <p className="text-sm text-muted-foreground">Taxa de Aprovação</p>
              </div>
              <div className="space-y-1">
                <div className="flex items-center justify-center gap-2 text-primary font-bold text-2xl">
                  <Users className="w-6 h-6" />
                  5.000+
                </div>
                <p className="text-sm text-muted-foreground">Aprovados em 2024</p>
              </div>
              <div className="space-y-1">
                <div className="flex items-center justify-center gap-2 text-primary font-bold text-2xl">
                  <TrendingUp className="w-6 h-6" />
                  24/7
                </div>
                <p className="text-sm text-muted-foreground">Disponível WhatsApp</p>
              </div>
            </div>

            {/* Nova Seção de Urgência Temporal */}
            <div className="mt-16 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl opacity-5 blur-xl"></div>
              <div className="relative bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-8 lg:p-12 max-w-5xl mx-auto border border-gray-100 dark:border-gray-800">
                <div className="flex justify-center mb-6">
                  <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-4 rounded-full">
                    <Clock className="w-8 h-8 text-white" />
                  </div>
                </div>
                
                <h3 className="text-2xl lg:text-3xl font-bold mb-6 text-center">
                  ⏰ Oferta Especial Até Domingo
                </h3>
                
                <div className="space-y-5 text-center mb-8">
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Comece hoje e estude de forma mais inteligente com o <strong>Agente de IA da OAB</strong>.<br/>
                    Tenha acesso imediato pelo WhatsApp 24h e o mesmo método que já aprovou mais de <strong className="text-foreground">5.000 alunos em 2024</strong>.
                  </p>
                  
                  <div className="flex items-center justify-center gap-2 text-blue-700 dark:text-blue-400 font-bold text-xl pt-4 pb-2">
                    <span>⚖️</span>
                    <span>Você pode ser o próximo a conquistar sua carteira da OAB.</span>
                  </div>
                  
                  <p className="text-sm text-muted-foreground">
                    Aproveite a condição atual antes do próximo reajuste de preço.
                  </p>
                </div>
                
                <div className="flex justify-center">
                  <Button 
                    size="lg" 
                    className="text-lg px-10 py-7 bg-[#00C853] hover:bg-[#00B34A] text-white font-bold shadow-xl hover:shadow-2xl hover:scale-105 transition-all"
                    onClick={handleGoToCheckout}
                  >
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Quero Começar Agora
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
