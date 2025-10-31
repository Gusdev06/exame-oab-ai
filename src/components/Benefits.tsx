import { DollarSign, BookOpen, Clock, TrendingUp, Calculator } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Benefits = () => {
  const savings = [
    {
      icon: BookOpen,
      title: "Cursos Online",
      cost: "R$ 2.500",
      description: "Curso completo para OAB",
      savings: "R$ 2.000",
      color: "from-blue-600 to-blue-800"
    },
    {
      icon: Clock,
      title: "Aulas Particulares",
      cost: "R$ 3.000",
      description: "20h de aula (R$ 150/h)",
      savings: "R$ 2.500",
      color: "from-purple-600 to-purple-800"
    },
    {
      icon: TrendingUp,
      title: "Material Impresso",
      cost: "R$ 800",
      description: "Vade Mecum + Apostilas",
      savings: "R$ 700",
      color: "from-green-600 to-green-800"
    }
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            💰 Você Vai Economizar Muito Mais do Que Imagina
          </h2>
          <p className="text-lg lg:text-xl text-gray-600 dark:text-gray-400">
            Veja quanto você economiza comparado a métodos tradicionais de estudo.
          </p>
        </div>

        {/* Comparação de Custos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12 max-w-5xl mx-auto">
          {savings.map((item, index) => (
            <Card key={index} className="border-2 border-gray-200 dark:border-gray-800 hover:border-blue-300 dark:hover:border-blue-700 transition-all duration-200 hover:shadow-xl relative overflow-hidden bg-white dark:bg-gray-900 group">
              <CardContent className="p-6 relative">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200`}>
                  <item.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{item.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">{item.description}</p>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600 dark:text-gray-400">Custo médio:</span>
                    <span className="text-lg font-semibold line-through text-gray-500 dark:text-gray-500">{item.cost}</span>
                  </div>
                  <div className="flex justify-between items-center pt-2 border-t border-gray-200 dark:border-gray-700">
                    <span className="text-sm font-medium text-green-600 dark:text-green-500">Você economiza:</span>
                    <span className="text-2xl font-bold text-green-600 dark:text-green-500">{item.savings}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Card de Economia Total */}
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-to-br from-blue-600 to-blue-800 border-0 shadow-2xl rounded-2xl">
            <CardContent className="p-8 lg:p-12 text-center text-white">
              <Calculator className="w-16 h-16 mx-auto mb-6 opacity-90" />
              <h3 className="text-3xl lg:text-4xl font-extrabold mb-4">💸 Economia Total de R$ 5.200+</h3>
              <p className="text-xl lg:text-2xl opacity-95 mb-2">
                Tudo isso por apenas <span className="font-bold">R$ 19,99/mês</span>
              </p>
              <p className="text-lg lg:text-xl opacity-90 mb-6">
                Menos de <span className="font-bold">R$ 1 por dia</span>.
              </p>
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full">
                <span className="font-semibold text-base lg:text-lg">Cancele quando quiser, sem fidelidade.</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Benefits;

