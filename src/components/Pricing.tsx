import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, MessageCircle, Sparkles } from "lucide-react";

const Pricing = () => {
  const handleGoToCheckout = () => {
    window.location.href = 'https://pay.kirvano.com/0108b276-b048-4524-91c3-2c8ae9b2dbae';
  };

  return (
    <section className="py-24 bg-gradient-to-b from-secondary/30 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-success/10 text-success px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            Oferta Especial - Vagas Limitadas
          </div>
          <h2 className="text-4xl font-bold mb-4">
            Invista na Sua <span className="text-primary">Aprovação</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Escolha o plano que melhor se encaixa no seu orçamento e comece a estudar hoje mesmo
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Card className="border-4 border-primary shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-success text-success-foreground px-6 py-2 text-sm font-bold">
              MAIS POPULAR
            </div>
            
            <CardContent className="p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-3xl font-bold mb-2">Plano Anual</h3>
                    <p className="text-muted-foreground">
                      Acesso completo por 12 meses
                    </p>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-baseline gap-2">
                      <span className="text-5xl font-bold text-primary">R$ 397</span>
                      <span className="text-muted-foreground line-through">R$ 997</span>
                    </div>
                    <p className="text-success font-semibold text-lg">
                      Ou 12x de R$ 39,90 sem juros
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Apenas R$ 1,08 por dia - menos que um cafezinho ☕
                    </p>
                  </div>
                  
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                      <span>Acesso ilimitado 24/7 ao agente de IA</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                      <span>Simulados personalizados e adaptativos</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                      <span>Mapas mentais e revisões automáticas</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                      <span>Base com 10 anos de provas da OAB</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                      <span>Suporte prioritário no WhatsApp</span>
                    </li>
                  </ul>
                </div>
                
                <div className="space-y-6">
                  <Button 
                    size="lg" 
                    className="w-full text-xl px-8 py-8 bg-gradient-to-r from-success to-success-glow hover:opacity-90 transition-all shadow-xl hover:shadow-2xl hover:scale-105"
                    onClick={handleGoToCheckout}
                  >
                    <MessageCircle className="mr-2 h-6 w-6" />
                    Garantir Minha Vaga Agora
                  </Button>
                  
                  <div className="bg-secondary/50 rounded-xl p-6 space-y-3">
                    <div className="flex items-center gap-2 text-success">
                      <CheckCircle className="w-5 h-5" />
                      <span className="font-semibold">Garantia de 7 dias</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Se não gostar, devolvemos 100% do seu dinheiro. Sem perguntas.
                    </p>
                  </div>
                  
                  <div className="text-center space-y-2">
                    <p className="text-sm text-muted-foreground">🔒 Pagamento seguro e criptografado</p>
                    <p className="text-sm text-muted-foreground">⚡ Acesso liberado imediatamente</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <div className="mt-8 text-center">
            <p className="text-sm text-muted-foreground">
              <strong className="text-primary">Atenção:</strong> Vagas limitadas para garantir qualidade do suporte. Apenas 50 novas vagas por mês.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
