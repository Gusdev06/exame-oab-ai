import { Card } from "@/components/ui/card";
import { CheckCircle, MessageCircle } from "lucide-react";
import whatsappDemo from "@/assets/whatsapp-demo.jpg";

const VisualDemo = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Veja Como Funciona <span className="text-primary">Na Prática</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            É simples: você envia sua dúvida no WhatsApp e a IA responde instantaneamente com explicações claras e objetivas
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">
          <div className="order-2 lg:order-1">
            <Card className="p-2 shadow-2xl border-2">
              <img 
                src={whatsappDemo} 
                alt="Exemplo de conversa no WhatsApp com a IA especializada em OAB" 
                className="w-full rounded-lg"
              />
            </Card>
          </div>
          
          <div className="order-1 lg:order-2 space-y-6">
            <div className="flex gap-4 items-start">
              <div className="w-12 h-12 rounded-full bg-success/10 flex items-center justify-center flex-shrink-0">
                <MessageCircle className="w-6 h-6 text-success" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">1. Envie Sua Dúvida</h3>
                <p className="text-muted-foreground">
                  Mande sua pergunta por texto, áudio ou até mesmo uma foto da questão. A IA entende tudo.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4 items-start">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <CheckCircle className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">2. Receba Resposta Imediata</h3>
                <p className="text-muted-foreground">
                  Em segundos, você recebe uma explicação detalhada, com fundamentos jurídicos e exemplos práticos.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4 items-start">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                <CheckCircle className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">3. Pratique e Evolua</h3>
                <p className="text-muted-foreground">
                  Peça simulados personalizados, revisões e mapas mentais. A IA adapta o conteúdo ao seu nível.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisualDemo;
