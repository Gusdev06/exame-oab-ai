import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, MessageCircle, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import confetti from "canvas-confetti";

const Success = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Confetti animation effect
    const duration = 3 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    function randomInRange(min: number, max: number) {
      return Math.random() * (max - min) + min;
    }

    const interval: any = setInterval(function() {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);
      
      // Since particles fall down, start a bit higher than random
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 }
      });
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 }
      });
    }, 250);

    return () => clearInterval(interval);
  }, []);

  const handleGoToChat = () => {
    // Redireciona para o WhatsApp
    const whatsappNumber = "5511995858361";
    window.location.href = `https://wa.me/${whatsappNumber}`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-success/10 via-background to-success-glow/10 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        <Card className="border-success/20 shadow-2xl">
          <CardContent className="pt-12 pb-10 px-6 sm:px-12">
            <div className="flex flex-col items-center text-center space-y-6">
              {/* Success Icon */}
              <div className="relative">
                <div className="absolute inset-0 bg-success/20 blur-2xl rounded-full animate-pulse"></div>
                <div className="relative bg-success/10 p-6 rounded-full">
                  <CheckCircle className="w-20 h-20 text-success animate-in zoom-in duration-500" strokeWidth={1.5} />
                </div>
              </div>

              {/* Success Message */}
              <div className="space-y-3 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
                <h1 className="text-3xl sm:text-4xl font-bold text-foreground">
                  Pagamento Aprovado! 🎉
                </h1>
                <p className="text-lg text-muted-foreground max-w-md">
                  Parabéns! Sua conta foi criada com sucesso e você já pode começar sua jornada rumo à aprovação na OAB.
                </p>
              </div>

              {/* Benefits List */}
              <div className="w-full bg-muted/50 rounded-lg p-6 space-y-3 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
                <h2 className="font-semibold text-lg text-foreground mb-4">O que você ganhou:</h2>
                <div className="space-y-3 text-left">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-muted-foreground">
                      Acesso ilimitado ao agente de IA especializado em Exame da OAB
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-muted-foreground">
                      Simulados personalizados baseados no seu desempenho
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-muted-foreground">
                      Explicações detalhadas de todas as questões
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-muted-foreground">
                      Suporte via WhatsApp para dúvidas
                    </p>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="w-full space-y-3 pt-4 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-500">
                <Button 
                  onClick={handleGoToChat}
                  className="w-full bg-gradient-to-r from-success to-success-glow hover:opacity-90 text-white"
                  size="lg"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Acessar Chat do Agente
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                
                <Button 
                  onClick={() => navigate("/")}
                  variant="outline"
                  className="w-full"
                  size="lg"
                >
                  Voltar para a Página Inicial
                </Button>
              </div>

              {/* Additional Info */}
              <div className="pt-6 border-t border-border w-full animate-in fade-in duration-700 delay-700">
                <p className="text-xs text-muted-foreground">
                  Você também receberá um e-mail de confirmação com todos os detalhes da sua conta.
                  Se tiver alguma dúvida, entre em contato pelo WhatsApp.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Success;

