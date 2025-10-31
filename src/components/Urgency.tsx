import { AlertCircle, Users, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Urgency = () => {
  // Simula vagas restantes (em produção, isso viria de uma API)
  const spotsRemaining = 23;
  const totalSpots = 50;
  const percentageFilled = ((totalSpots - spotsRemaining) / totalSpots) * 100;

  return (
    <section className="py-12 bg-gradient-to-r from-orange-500 via-red-500 to-orange-600">
      <div className="container mx-auto px-4">
        <Card className="max-w-4xl mx-auto border-0 shadow-2xl bg-white/95 backdrop-blur">
          <CardContent className="p-8">
            <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
              {/* Ícone de Alerta */}
              <div className="relative flex-shrink-0">
                <div className="absolute inset-0 bg-orange-500 rounded-full blur-xl opacity-50 animate-pulse"></div>
                <div className="relative w-20 h-20 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center">
                  <AlertCircle className="w-10 h-10 text-white" />
                </div>
              </div>

              {/* Conteúdo */}
              <div className="flex-1 text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
                  <Clock className="w-5 h-5 text-orange-600" />
                  <p className="text-sm font-semibold text-orange-600 uppercase tracking-wide">
                    Atenção: Vagas Limitadas
                  </p>
                </div>
                
                <h3 className="text-2xl md:text-3xl font-bold mb-3 text-foreground">
                  Restam Apenas <span className="text-red-600">{spotsRemaining} Vagas</span> Esta Semana
                </h3>
                
                <p className="text-muted-foreground mb-4">
                  Limitamos o número de novos alunos por semana para garantir 
                  suporte de qualidade e atendimento personalizado no WhatsApp.
                </p>

                {/* Barra de Progresso */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-primary" />
                      <span className="font-medium">
                        {totalSpots - spotsRemaining} de {totalSpots} vagas preenchidas
                      </span>
                    </div>
                    <span className="font-bold text-red-600">
                      {spotsRemaining} restantes
                    </span>
                  </div>
                  
                  <div className="w-full h-3 bg-secondary rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-orange-500 to-red-500 transition-all duration-1000 ease-out rounded-full"
                      style={{ width: `${percentageFilled}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Urgency;

