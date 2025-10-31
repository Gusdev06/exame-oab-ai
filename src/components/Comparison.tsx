import { Card, CardContent } from "@/components/ui/card";
import { Check, X, Clock, DollarSign, TrendingUp, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

const Comparison = () => {
  const handleGoToCheckout = () => {
    window.location.href = 'https://pay.kirvano.com/0108b276-b048-4524-91c3-2c8ae9b2dbae';
  };

  const comparisons = [
    {
      icon: Clock,
      category: "Tempo de Estudo",
      without: "6 meses ou mais de estudo solitário e cansativo",
      with: "1–2 meses — até 83% mais rápido",
      highlight: "83% mais rápido"
    },
    {
      icon: DollarSign,
      category: "Custo Total",
      without: "R$ 5.200+ (cursos + material)",
      with: "R$ 19,99/mês — economia de R$ 5.000+",
      highlight: "Economia de R$ 5.000+"
    },
    {
      icon: TrendingUp,
      category: "Taxa de Aprovação",
      without: "40% (média nacional)",
      with: "89% na 1ª tentativa — +122% de aprovação",
      highlight: "+122% de aprovação"
    },
    {
      icon: Calendar,
      category: "Disponibilidade",
      without: "Horário fixo, sem flexibilidade",
      with: "24/7 direto no WhatsApp — estude quando e onde quiser",
      highlight: "Estude quando e onde quiser"
    }
  ];

  return (
    <section className="py-24 bg-gray-50 dark:bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <DollarSign className="w-4 h-4" />
            Economia Inteligente
          </div>
          <h2 className="text-4xl lg:text-5xl font-extrabold mb-6 leading-tight text-gray-900 dark:text-white">
            💰 Você Vai Economizar Muito Mais do Que Imagina
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Veja quanto você economiza comparado a cursinhos tradicionais.<br/>
            Tudo isso com a ajuda de <strong className="text-gray-900 dark:text-white">uma mentora inteligente disponível 24h</strong>.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Header da Tabela - Desktop */}
          <div className="hidden lg:grid grid-cols-3 gap-4 mb-6">
            <div className="text-center">
              <p className="text-lg font-semibold text-gray-700 dark:text-gray-300">Categoria</p>
            </div>
            <div className="text-center bg-red-50 dark:bg-red-950/20 rounded-t-2xl p-5 border-2 border-red-100 dark:border-red-900/30">
              <div className="flex items-center justify-center gap-2 mb-2">
                <X className="w-5 h-5 text-red-600 dark:text-red-500" />
                <p className="text-lg font-bold text-gray-900 dark:text-white">Sem IA</p>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Métodos antigos</p>
            </div>
            <div className="text-center bg-green-50 dark:bg-green-950/20 rounded-t-2xl p-5 border-2 border-green-100 dark:border-green-900/30">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Check className="w-5 h-5 text-green-600 dark:text-green-500" />
                <p className="text-lg font-bold text-gray-900 dark:text-white">Com a Bia</p>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Sua mentora inteligente</p>
            </div>
          </div>

          {/* Linhas de Comparação */}
          <div className="space-y-6 lg:space-y-3">
            {comparisons.map((item, index) => (
              <Card key={index} className="border-2 border-gray-200 dark:border-gray-800 hover:border-blue-300 dark:hover:border-blue-700 transition-all duration-200 hover:shadow-lg bg-white dark:bg-gray-900">
                <CardContent className="p-0">
                  {/* Layout Desktop */}
                  <div className="hidden lg:grid lg:grid-cols-3 gap-4 items-center">
                    <div className="p-6 flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-5 h-5 text-blue-700 dark:text-blue-400" />
                      </div>
                      <p className="font-semibold text-gray-900 dark:text-white">{item.category}</p>
                    </div>
                    
                    <div className="p-6 bg-red-50 dark:bg-red-950/20 border-l border-r border-gray-200 dark:border-gray-800">
                      <div className="flex items-start gap-2">
                        <X className="w-5 h-5 text-red-600 dark:text-red-500 flex-shrink-0 mt-0.5" />
                        <p className="text-gray-600 dark:text-gray-400">{item.without}</p>
                      </div>
                    </div>
                    
                    <div className="p-6 bg-green-50 dark:bg-green-950/20 relative">
                      <div className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-green-600 dark:text-green-500 flex-shrink-0 mt-0.5" />
                        <p className="font-medium text-gray-900 dark:text-white">{item.with}</p>
                      </div>
                    </div>
                  </div>

                  {/* Layout Mobile */}
                  <div className="lg:hidden p-4 space-y-4">
                    {/* Categoria */}
                    <div className="flex items-center gap-3 pb-3 border-b border-gray-200 dark:border-gray-700">
                      <div className="w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-5 h-5 text-blue-700 dark:text-blue-400" />
                      </div>
                      <p className="font-bold text-lg text-gray-900 dark:text-white">{item.category}</p>
                    </div>
                    
                    {/* Sem IA */}
                    <div className="bg-red-50 dark:bg-red-950/20 rounded-lg p-4 border border-red-100 dark:border-red-900/30">
                      <div className="flex items-center gap-2 mb-2">
                        <X className="w-4 h-4 text-red-600 dark:text-red-500" />
                        <p className="text-sm font-semibold text-gray-900 dark:text-white">Sem IA</p>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-400 ml-6">{item.without}</p>
                    </div>
                    
                    {/* Com a Bia */}
                    <div className="bg-green-50 dark:bg-green-950/20 rounded-lg p-4 border border-green-100 dark:border-green-900/30">
                      <div className="flex items-center gap-2 mb-2">
                        <Check className="w-4 h-4 text-green-600 dark:text-green-500" />
                        <p className="text-sm font-semibold text-gray-900 dark:text-white">Com a Bia</p>
                      </div>
                      <p className="text-sm font-medium text-gray-900 dark:text-white ml-6">{item.with}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Frase Motivacional */}
          <div className="mt-12 lg:mt-16 text-center max-w-3xl mx-auto px-4">
            <p className="text-xl lg:text-2xl font-bold text-gray-900 dark:text-white mb-3">
              💬 Está pronto para transformar seus estudos?
            </p>
            <p className="text-lg lg:text-xl text-gray-600 dark:text-gray-400 mb-8">
              Pare de estudar sozinho — tenha uma mentora inteligente rumo à aprovação.
            </p>
            
            <div className="flex flex-wrap gap-3 justify-center">
              <button
                className="inline-flex items-center justify-center bg-[#00C853] hover:bg-[#00B34A] text-white font-semibold px-8 py-4 text-base lg:text-lg rounded-xl transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#00C853] shadow-xl hover:shadow-2xl w-full sm:w-auto"
                onClick={handleGoToCheckout}
                data-cta="economy_primary"
                data-variant="A"
                aria-label="Ver por que a Bia é mais acessível"
              >
                💸 Ver por que a Bia é mais acessível
              </button>
            </div>
            
            <p className="text-xs lg:text-sm text-gray-600 dark:text-gray-400 mt-4">
              Acesso imediato • Garantia de 7 dias • Disponível 24h no WhatsApp
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Comparison;

