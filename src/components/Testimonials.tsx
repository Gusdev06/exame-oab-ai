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
    window.location.href = 'https://pay.cakto.com.br/78t42ev_686798';
  };

  return (
    <section className="py-24 md:py-32 bg-[#0F1419] relative overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.02)_1px,transparent_1px)] bg-[size:64px_64px]"></div>
      
      {/* Gradient Orbs */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20 animate-fade-in">
          {/* <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 px-5 py-2.5 rounded-full text-sm font-semibold mb-8 backdrop-blur-xl">
            <Star className="w-4 h-4" />
            Prova Social
          </div> */}
          <h2 className="text-4xl lg:text-5xl font-extrabold text-white mb-6 tracking-tight drop-shadow-lg">
            Histórias de Quem Passou na OAB
          </h2>
          <p className="text-lg lg:text-xl text-gray-400 mb-12 leading-relaxed">
            Veja o que os alunos têm a dizer depois de conquistar a aprovação.
          </p>
          
          {/* Estatísticas Consolidadas Premium - Responsivo */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-3xl mx-auto mb-16">
            <div className="space-y-2 sm:space-y-3 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-4 sm:p-6 hover:bg-white/10 hover:border-emerald-500/30 transition-all duration-300">
              <p className="text-3xl sm:text-4xl font-extrabold text-emerald-400 drop-shadow-lg">5.000+</p>
              <p className="text-xs sm:text-sm text-gray-400 font-medium">Aprovados em 2024</p>
            </div>
            <div className="space-y-2 sm:space-y-3 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-4 sm:p-6 hover:bg-white/10 hover:border-blue-500/30 transition-all duration-300">
              <p className="text-3xl sm:text-4xl font-extrabold text-blue-400 drop-shadow-lg">89%</p>
              <p className="text-xs sm:text-sm text-gray-400 font-medium">Aprovação na 1ª tentativa</p>
            </div>
            <div className="space-y-2 sm:space-y-3 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-4 sm:p-6 hover:bg-white/10 hover:border-blue-500/30 transition-all duration-300">
              <div className="flex items-center justify-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-xs sm:text-sm text-gray-400 font-medium">Nota 4.9/5</p>
            </div>
          </div>
        </div>
        
        {/* Cards de Depoimentos Premium */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="bg-white/5 backdrop-blur-xl border-2 border-white/10 hover:border-white/30 transition-all duration-300 hover:shadow-2xl hover:scale-105 rounded-3xl animate-slide-up relative overflow-hidden"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Quote Icon Background */}
              <Quote className="w-20 h-20 sm:w-24 sm:h-24 text-emerald-400/20 absolute -top-4 -right-4 rotate-12" />
              
              <CardContent className="p-6 sm:p-8 space-y-4 sm:space-y-5 relative z-10">
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                <p className="text-gray-200 leading-relaxed italic font-medium text-sm sm:text-base">
                  "{testimonial.content}"
                </p>
                
                <div className="pt-3 sm:pt-4 border-t border-white/20">
                  <p className="font-bold text-white text-base sm:text-lg">{testimonial.name}</p>
                  <p className="text-xs sm:text-sm text-gray-400 mt-1">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Prova Social Premium */}
        <div className="text-center mt-12 sm:mt-16">
          <button
            className="inline-flex items-center justify-center bg-white/5 backdrop-blur-xl border border-white/10 text-white hover:bg-white/10 font-medium px-6 sm:px-8 py-3 sm:py-4 text-base lg:text-lg rounded-xl transition-all duration-300 hover:scale-105 hover:border-white/20 focus:outline-none focus:ring-2 focus:ring-white/30 focus:ring-offset-2 focus:ring-offset-[#0F1419] w-full sm:w-auto max-w-md sm:max-w-none mx-auto"
            onClick={handleGoToCheckout}
            data-cta="social_primary"
            data-variant="A"
            aria-label="Ver mais histórias de quem estudou com a Bia"
          >
            Ver mais histórias de sucesso
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
