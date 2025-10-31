import { Card, CardContent } from "@/components/ui/card";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Ana Paula Santos",
    role: "Aprovada OAB XLI",
    content: "Estudei com a Bia por 3 meses e passei de primeira! Ela me ajudou a entender exatamente onde eu estava errando e o que precisava melhorar. Foi como ter uma mentora sempre comigo.",
    rating: 5
  },
  {
    name: "Rafael Oliveira",
    role: "Aprovado OAB XLII",
    content: "A Bia explicava as questões como nenhum cursinho conseguiu. Sempre disponível no WhatsApp, clara e direta. Passei na primeira tentativa graças a ela!",
    rating: 5
  },
  {
    name: "Juliana Costa",
    role: "Aprovada OAB XLIV",
    content: "Com a Bia, minhas revisões foram certeiras. Ela focava exatamente no que eu precisava estudar. Passei na 1ª tentativa e hoje sou advogada realizada!",
    rating: 5
  }
];

const Testimonials = () => {
  const handleGoToCheckout = () => {
    window.location.href = 'https://pay.kirvano.com/0108b276-b048-4524-91c3-2c8ae9b2dbae';
  };

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Star className="w-4 h-4" />
            Prova Social
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            ⭐ Histórias de Quem Passou na OAB
          </h2>
          <p className="text-lg lg:text-xl text-gray-600 dark:text-gray-400 mb-8">
            Veja o que os alunos têm a dizer depois de conquistar a aprovação.
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
            <Card 
              key={index} 
              className="border-2 border-gray-200 dark:border-gray-800 hover:border-green-300 dark:hover:border-green-700 transition-all duration-300 hover:shadow-xl bg-white dark:bg-gray-900 animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
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

        {/* CTA Prova Social */}
        <div className="text-center mt-12">
          <button
            className="inline-flex items-center justify-center border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800 font-medium px-8 py-4 text-base lg:text-lg rounded-xl transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300"
            onClick={handleGoToCheckout}
            data-cta="social_primary"
            data-variant="A"
            aria-label="Ver mais histórias de quem estudou com a Bia"
          >
            🌟 Ver mais histórias de quem estudou com a Bia
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
