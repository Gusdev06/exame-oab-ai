import { Card, CardContent } from "@/components/ui/card";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Ana Paula Santos",
    role: "Aprovada OAB XLI",
    content: "Usei o agente de IA por apenas 3 meses e passei de primeira! Os comentários detalhados das questões e as dicas personalizadas me ajudaram a estudar de forma muito mais eficiente do que eu imaginava.",
    rating: 5
  },
  {
    name: "Rafael Oliveira",
    role: "Aprovado OAB XLII",
    content: "Ter a possibilidade de tirar dúvidas a qualquer hora pelo WhatsApp foi fundamental. A IA explica de forma clara e direta, muito melhor do que vários cursinhos que já fiz.",
    rating: 5
  },
  {
    name: "Juliana Costa",
    role: "Aprovada OAB XLIV",
    content: "Os simulados adaptativos identificaram exatamente minhas dificuldades. Em apenas 2 meses, meus acertos aumentaram em 40%! Recomendo para quem quer resultados de verdade.",
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            ⭐ Histórias de Sucesso Reais
          </h2>
          <p className="text-lg lg:text-xl text-gray-600 dark:text-gray-400 mb-8">
            Veja o que nossos alunos têm a dizer depois de estudar com o Agente de IA da OAB.
          </p>
          
          {/* Estatísticas Consolidadas */}
          <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto mb-12">
            <div className="space-y-2">
              <p className="text-3xl font-bold text-green-600 dark:text-green-500">✅ 5.000+</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Aprovados em 2024</p>
            </div>
            <div className="space-y-2">
              <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">⚡ 89%</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Aprovação na 1ª tentativa</p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">🌟 Nota 4.9/5</p>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-2 border-gray-200 dark:border-gray-800 hover:border-green-300 dark:hover:border-green-700 transition-all duration-300 hover:shadow-xl bg-white dark:bg-gray-900">
              <CardContent className="p-6 space-y-4">
                <Quote className="w-10 h-10 text-blue-200 dark:text-blue-800" />
                
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed italic">
                  "{testimonial.content}"
                </p>
                
                <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                  <p className="font-semibold text-gray-900 dark:text-white">{testimonial.name}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
