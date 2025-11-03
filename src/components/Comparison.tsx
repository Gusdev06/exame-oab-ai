import { Card, CardContent } from "@/components/ui/card";
import { Check, X, Clock, DollarSign, TrendingUp, Calendar } from "lucide-react";

const Comparison = () => {
  const handleGoToCheckout = () => {
    window.location.href = 'https://pay.kirvano.com/0108b276-b048-4524-91c3-2c8ae9b2dbae';
  };

  const comparisons = [
    {
      icon: Clock,
      category: "Tempo de Estudo",
      without: "6 meses ou mais de estudo solitário e cansativo",
      with: "1–2 meses até 83% mais rápido",
      highlight: "83% mais rápido"
    },
    {
      icon: DollarSign,
      category: "Custo Total",
      without: "R$ 5.200+ (cursos + material)",
      with: "R$ 39,99/mês economia de R$ 5.000+",
      highlight: "Economia de R$ 5.000+"
    },
    {
      icon: TrendingUp,
      category: "Taxa de Aprovação",
      without: "40% (média nacional)",
      with: "89% na 1ª tentativa +122% de aprovação",
      highlight: "+122% de aprovação"
    },
    {
      icon: Calendar,
      category: "Disponibilidade",
      without: "Horário fixo, sem flexibilidade",
      with: "24/7 direto no WhatsApp, estude quando e onde quiser",
      highlight: "Estude quando e onde quiser"
    }
  ];

  return (
    <section className="py-24 md:py-32 bg-[#0B1120] relative overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.02)_1px,transparent_1px)] bg-[size:64px_64px]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 px-5 py-2.5 rounded-full text-sm font-semibold mb-8 backdrop-blur-xl">
            <DollarSign className="w-4 h-4" />
            Economia Inteligente
          </div>
          <h2 className="text-4xl lg:text-5xl font-extrabold mb-6 leading-tight text-white tracking-tight">
            Você Vai Economizar Muito Mais do Que Imagina
          </h2>
          <p className="text-xl text-gray-400 leading-relaxed">
            Veja quanto você economiza comparado a cursinhos tradicionais.<br/>
            Tudo isso com a ajuda de <strong className="text-gray-200">uma mentora inteligente disponível 24h</strong>.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Header da Tabela - Desktop */}
          <div className="hidden lg:grid grid-cols-3 gap-6 mb-8">
            <div className="text-center">
              <p className="text-lg font-semibold text-gray-400">Categoria</p>
            </div>
            <div className="text-center bg-red-500/10 border border-red-500/20 rounded-t-3xl p-6 backdrop-blur-xl">
              <div className="flex items-center justify-center gap-2 mb-2">
                <X className="w-5 h-5 text-red-400" />
                <p className="text-lg font-bold text-white">Sem IA</p>
              </div>
              <p className="text-sm text-gray-400">Métodos antigos</p>
            </div>
            <div className="text-center bg-emerald-500/10 border border-emerald-500/20 rounded-t-3xl p-6 backdrop-blur-xl">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Check className="w-5 h-5 text-emerald-400" />
                <p className="text-lg font-bold text-white">Com a <span className="text-emerald-400">Bia</span></p>
              </div>
              <p className="text-sm text-gray-400">Sua mentora inteligente</p>
            </div>
          </div>

          {/* Linhas de Comparação Premium */}
          <div className="space-y-6 lg:space-y-4">
            {comparisons.map((item, index) => (
              <Card 
                key={index} 
                className="border-2 border-white/10 hover:border-blue-500/30 transition-all duration-300 shadow-xl hover:shadow-2xl bg-white/5 backdrop-blur-xl rounded-3xl animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-0">
                  {/* Layout Desktop */}
                  <div className="hidden lg:grid lg:grid-cols-3 gap-6 items-center">
                    <div className="p-8 flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center flex-shrink-0 shadow-lg shadow-blue-500/50">
                        <item.icon className="w-6 h-6 text-white" />
                      </div>
                      <p className="font-bold text-lg text-white">{item.category}</p>
                    </div>
                    
                    <div className="p-8 bg-red-500/10 border-l-2 border-r-2 border-red-500/20">
                      <div className="flex items-start gap-3">
                        <X className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                        <p className="text-gray-400">{item.without}</p>
                      </div>
                    </div>
                    
                    <div className="p-8 bg-emerald-500/10 relative">
                      <div className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                        <p className="font-semibold text-white">{item.with}</p>
                      </div>
                    </div>
                  </div>

                  {/* Layout Mobile */}
                  <div className="lg:hidden p-6 space-y-5">
                    {/* Categoria */}
                    <div className="flex items-center gap-4 pb-4 border-b border-white/10">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center flex-shrink-0 shadow-lg shadow-blue-500/50">
                        <item.icon className="w-6 h-6 text-white" />
                      </div>
                      <p className="font-bold text-lg text-white">{item.category}</p>
                    </div>
                    
                    {/* Sem IA */}
                    <div className="bg-red-500/10 border border-red-500/20 rounded-2xl p-5 backdrop-blur-xl">
                      <div className="flex items-center gap-2 mb-3">
                        <X className="w-5 h-5 text-red-400" />
                        <p className="text-sm font-bold text-white">Sem IA</p>
                      </div>
                      <p className="text-sm text-gray-400 ml-7">{item.without}</p>
                    </div>
                    
                    {/* Com a Bia */}
                    <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-2xl p-5 backdrop-blur-xl">
                      <div className="flex items-center gap-2 mb-3">
                        <Check className="w-5 h-5 text-emerald-400" />
                        <p className="text-sm font-bold text-white">Com a Bia</p>
                      </div>
                      <p className="text-sm font-semibold text-white ml-7">{item.with}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA Premium */}
          {/* <div className="mt-16 lg:mt-20 text-center max-w-3xl mx-auto px-4">
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 lg:p-10 shadow-2xl border border-white/10">
              <p className="text-2xl lg:text-3xl font-bold text-white mb-4 tracking-tight">
                Está pronto para transformar seus estudos?
              </p>
              <p className="text-lg lg:text-xl text-gray-400 mb-8 leading-relaxed">
                Pare de estudar sozinho, tenha uma mentora inteligente rumo à aprovação.
              </p>
              
              <div className="flex flex-wrap gap-4 justify-center">
                <button
                  className="group relative inline-flex items-center justify-center bg-gradient-to-b from-emerald-500 to-emerald-600 text-white font-semibold px-8 py-4 text-base lg:text-lg rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(16,185,129,0.5)] focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-[#0B1120] w-full sm:w-auto shadow-[0_0_20px_rgba(16,185,129,0.3)]"
                  onClick={handleGoToCheckout}
                  data-cta="economy_primary"
                  data-variant="A"
                  aria-label="Ver por que a Bia é mais acessível"
                >
                  <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative z-10">Comparar planos</span>
                </button>
              </div>
              
              <p className="text-xs lg:text-sm text-gray-500 mt-6">
                Acesso imediato • Garantia de 7 dias • Disponível 24h no WhatsApp
              </p>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Comparison;
